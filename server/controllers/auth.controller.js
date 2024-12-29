import crypto from "crypto"
import bcrypt from "bcryptjs"
import User from "../models/user.model.js"
import {
  generateToken,
  setAuthCookie,
  generateVerificationCode,
} from "../lib/utils.js"
import {
  sendPasswordResetEmail,
  sendResetSuccessEmail,
  sendVerificationEmail,
  sendWelcomeEmail,
} from "../mail/email.js"

class AuthError extends Error {
  constructor(message, statusCode = 400) {
    super(message)
    this.statusCode = statusCode
  }
}

const SALT_ROUNDS = 12
const VERIFICATION_TOKEN_EXPIRY = 24 * 60 * 60 * 1000 // 24 hours
const PASSWORD_RESET_EXPIRY = 1 * 60 * 60 * 1000 // 1 hour

const sendResponse = (res, statusCode, success, message, data = null) => {
  const response = {
    success,
    message,
    ...(data && { data }),
  }
  return res.status(statusCode).json(response)
}

const validateUserInput = (input, requiredFields) => {
  const missingFields = requiredFields.filter((field) => !input[field])
  if (missingFields.length > 0) {
    throw new AuthError(`Missing required fields: ${missingFields.join(", ")}`)
  }
}

export const signup = async (req, res) => {
  try {
    const { fullName, username, email, password } = req.body

    validateUserInput(req.body, ["fullName", "username", "email", "password"])

    const existingUser = await User.findOne({
      $or: [{ email: email }, { username: username }],
    })

    if (existingUser) {
      throw new AuthError(
        "User with this email or username already exists",
        409
      )
    }

    const verificationToken = generateVerificationCode()

    const newUser = new User({
      fullName,
      username: username,
      email: email,
      password: await bcrypt.hash(password, SALT_ROUNDS),
      verificationToken,
      verificationTokenExpiresAt: new Date(
        Date.now() + VERIFICATION_TOKEN_EXPIRY
      ),
    })

    await newUser.save()
    await sendVerificationEmail(newUser.email, verificationToken)

    const token = generateToken(newUser._id)
    setAuthCookie(res, token)

    const userResponse = {
      id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      email: newUser.email,
      isVerified: newUser.isVerified,
      createdAt: newUser.createdAt,
    }

    return sendResponse(
      res,
      201,
      true,
      "User created successfully. Please check your email for verification.",
      { user: userResponse }
    )
  } catch (error) {
    console.error("Signup Error:", error)
    return sendResponse(res, error.statusCode || 500, false, error.message)
  }
}

export const verifyEmail = async (req, res) => {
  try {
    const { code } = req.body

    if (!code) {
      throw new AuthError("Verification code is required")
    }

    const user = await User.findOne({
      verificationToken: code,
      verificationTokenExpiresAt: { $gt: Date.now() },
    })

    if (!user) {
      throw new AuthError("Invalid or expired verification code")
    }

    user.isVerified = true
    user.verificationToken = undefined
    user.verificationTokenExpiresAt = undefined
    await user.save()

    await sendWelcomeEmail(user.email, user.fullName)

    return sendResponse(res, 200, true, "Email verified successfully", { user })
  } catch (error) {
    console.error("Email Verification Error:", error)
    return sendResponse(res, error.statusCode || 500, false, error.message)
  }
}

export const login = async (req, res) => {
  try {
    const { username, email, password } = req.body

    if (!password || (!username && !email)) {
      throw new AuthError("Email/username and password are required")
    }

    const user = await User.findOne({
      $or: [
        { username: username?.toLowerCase() },
        { email: email?.toLowerCase() },
      ],
    }).select("+password")

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new AuthError("Invalid credentials", 401)
    }

    if (!user.isVerified) {
      throw new AuthError("Please verify your email before logging in", 403)
    }

    user.lastLogin = Date.now()
    await user.save()

    const token = generateToken(user._id)
    setAuthCookie(res, token)

    const userResponse = {
      id: user._id,
      fullName: user.fullName,
      username: user.username,
      email: user.email,
      isVerified: user.isVerified,
      createdAt: user.createdAt,
    }

    return sendResponse(res, 200, true, "Logged in successfully", {
      user: userResponse,
    })
  } catch (error) {
    console.error("Login Error:", error)
    return sendResponse(res, error.statusCode || 500, false, error.message)
  }
}

export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    })
    return sendResponse(res, 200, true, "Logged out successfully")
  } catch (error) {
    console.error("Logout Error:", error)
    return sendResponse(res, 500, false, "Error logging out")
  }
}

export const forgotPassword = async (req, res) => {
  try {
    const { email, username } = req.body

    if (!email && !username) {
      throw new AuthError("Email or username is required")
    }

    const user = await User.findOne({
      $or: [
        { email: email?.toLowerCase() },
        { username: username?.toLowerCase() },
      ],
    })

    if (!user) {
      return sendResponse(
        res,
        200,
        true,
        "If a user exists with this email, they will receive password reset instructions"
      )
    }

    const resetToken = crypto.randomBytes(32).toString("hex")
    user.resetPasswordToken = resetToken
    user.resetPasswordExpiresAt = new Date(Date.now() + PASSWORD_RESET_EXPIRY)
    await user.save()

    const resetUrl = `${process.env.CLIENT_URL}/reset-password/${resetToken}`
    await sendPasswordResetEmail(user.email, resetUrl)

    return sendResponse(
      res,
      200,
      true,
      "If a user exists with this email, they will receive password reset instructions"
    )
  } catch (error) {
    console.error("Forgot Password Error:", error)
    return sendResponse(
      res,
      error.statusCode || 500,
      false,
      "Error processing password reset request"
    )
  }
}

export const resetPassword = async (req, res) => {
  try {
    const { token } = req.params
    const { password } = req.body

    if (!password) {
      throw new AuthError("New password is required")
    }

    if (password.length < 8) {
      throw new AuthError("Password must be at least 8 characters long")
    }

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpiresAt: { $gt: Date.now() },
    })

    if (!user) {
      throw new AuthError("Invalid or expired reset token")
    }

    user.password = await bcrypt.hash(password, SALT_ROUNDS)
    user.resetPasswordToken = undefined
    user.resetPasswordExpiresAt = undefined
    await user.save()

    await sendResetSuccessEmail(user.email)
    return sendResponse(res, 200, true, "Password reset successful")
  } catch (error) {
    console.error("Reset Password Error:", error)
    return sendResponse(res, error.statusCode || 500, false, error.message)
  }
}

export const checkAuth = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select(
      "-password -resetPasswordToken -resetPasswordExpiresAt -verificationToken -verificationTokenExpiresAt"
    )

    if (!user) {
      throw new AuthError("User not found", 404)
    }

    return sendResponse(res, 200, true, "User authenticated", { user })
  } catch (error) {
    console.error("Check Auth Error:", error)
    return sendResponse(res, error.statusCode || 500, false, error.message)
  }
}
