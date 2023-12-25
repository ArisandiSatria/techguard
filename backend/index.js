import cookieParser from "cookie-parser"
import express from "express"

import { PORT } from "./config.js"

const app = express()

app.use(express.json())
app.use(cookieParser())

app.listen(PORT, () => {
  console.log(`Server is running from port ${PORT}`);
})

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const message = err.message || "Internal server error!"
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message
  })
})