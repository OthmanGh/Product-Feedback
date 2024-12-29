import jwt from "jsonwebtoken"

export const generateVerificationCode = () =>
  Math.floor(100000 + Math.random() * 900000).toString()

export const generateToken = (userId) =>
  jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRESIN,
  })

export const setAuthCookie = (res, token) => {
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 60 * 60 * 1000,
  })

  return token
}
