import { config } from "dotenv"
import nodemailer from "nodemailer"
import { MailtrapTransport } from "mailtrap"

config()

if (!process.env.MAILTRAP_TOKEN) {
  throw new Error("MAILTRAP_TOKEN is required in environment variables")
}

export const mailtrapTransport = nodemailer.createTransport(
  MailtrapTransport({
    token: process.env.MAILTRAP_TOKEN,
  })
)

export const sender = {
  address: "hello@demomailtrap.com",
  name: "Product Feedback App",
}
