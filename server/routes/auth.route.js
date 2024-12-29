import express from "express"
import {
  login,
  logout,
  signup,
  verifyEmail,
  forgotPassword,
  resetPassword,
  checkAuth,
} from "../controllers/auth.controller.js"
import { protectRoute } from "../middleware/protecteRoute.js"

const router = express.Router()

router.post("/signup", signup)
router.post("/login", login)
router.get("/logout", logout)
router.get("/check-auth", protectRoute, checkAuth)

router.post("/verify-email", verifyEmail)
router.post("/forgot-password", forgotPassword)
router.post("/reset-password/:token", resetPassword)

export default router
