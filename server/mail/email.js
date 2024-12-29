import { mailtrapTransport, sender } from "./mailtrap.config.js"
import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplates.js"

const EmailType = {
  VERIFICATION: "VERIFICATION",
  WELCOME: "WELCOME",
  PASSWORD_RESET: "PASSWORD_RESET",
  PASSWORD_RESET_SUCCESS: "PASSWORD_RESET_SUCCESS",
}

const sendEmail = async ({ type, email, templateVars = {}, subject }) => {
  if (!email) {
    throw new Error("Email recipient is required")
  }

  const emailConfigs = {
    [EmailType.VERIFICATION]: {
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        templateVars.verificationToken
      ),
      text: `Your verification code is: ${templateVars.verificationToken}`,
      category: "Email Verification",
    },

    [EmailType.WELCOME]: {
      subject: "Welcome to A product feedback review app",
      template_uuid: "caedd3e9-a60f-460b-8274-246923cc62cb",
      template_variables: {
        company_info_name: "A product feedback review app",
        name: templateVars.name,
      },
      text: `Welcome to A product feedback review app, ${templateVars.name}!`,
    },

    [EmailType.PASSWORD_RESET]: {
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace(
        "{resetURL}",
        templateVars.resetURL
      ),
      text: "Reset Your Password",
      category: "Password Reset",
    },

    [EmailType.PASSWORD_RESET_SUCCESS]: {
      subject: "Password Reset Successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      text: "Password Reset Successful",
      category: "Password Reset",
    },
  }

  const config = emailConfigs[type]
  if (!config) {
    throw new Error(`Invalid email type: ${type}`)
  }

  try {
    const info = await mailtrapTransport.sendMail({
      from: sender,
      to: [email],
      ...config,
    })

    console.log(`${type} email sent successfully`, {
      messageId: info.messageId,
      recipient: email,
      type,
    })

    return info
  } catch (error) {
    console.error(`Error sending ${type} email:`, {
      error,
      recipient: email,
      type,
    })
    throw new Error(
      `Failed to send ${type.toLowerCase()} email: ${
        error.message || "Unknown error"
      }`
    )
  }
}

export const sendVerificationEmail = async (email, verificationToken) => {
  if (!verificationToken) {
    throw new Error("Verification token is required")
  }

  return sendEmail({
    type: EmailType.VERIFICATION,
    email,
    templateVars: { verificationToken },
  })
}

export const sendWelcomeEmail = async (email, name) => {
  if (!name) {
    throw new Error("Name is required")
  }

  return sendEmail({
    type: EmailType.WELCOME,
    email,
    templateVars: { name },
  })
}

export const sendPasswordResetEmail = async (email, resetURL) => {
  if (!resetURL) {
    throw new Error("Reset URL is required")
  }

  return sendEmail({
    type: EmailType.PASSWORD_RESET,
    email,
    templateVars: { resetURL },
  })
}

export const sendResetSuccessEmail = async (email) => {
  return sendEmail({
    type: EmailType.PASSWORD_RESET_SUCCESS,
    email,
  })
}
