import jwt from "jsonwebtoken"

export const protectRoute = async (req, res, next) => {
  const token = req.cookies.token

  if (!token)
    return res.status(401).json({
      success: false,
      message: "Unauthorized - No Token Provided",
    })

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    if (!decoded) throw new Error("Invalid Token")
    console.log(decoded)
    req.userId = decoded.userId

    next()
  } catch (error) {
    console.log("Error in protecte Route ", error)
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    })
  }
}
