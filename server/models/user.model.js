import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },

    username: {
      type: String,
      unique: true,
      required: [true, "Username is required"],
      minlength: [3, "Username must be at least 3 characters long"],
      maxlength: [20, "Username must be less than 20 characters"],
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters long"],
      select: false,
    },

    fullName: {
      type: String,
      trim: true,
    },

    avatar: {
      type: String,
      default: "/avatars/default_avatar.svg",
    },

    lastLogin: {
      type: Date,
      default: Date.now,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    resetPasswordToken: {
      type: String,
      select: false,
    },

    resetPasswordExpiresAt: {
      type: Date,
    },

    verificationToken: {
      type: String,
      select: false,
    },

    verificationTokenExpiresAt: {
      type: Date,
    },
  },

  {
    timestamps: true,
  }
)

const User = mongoose.model("User", userSchema)

export default User
