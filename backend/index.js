import cookieParser from "cookie-parser"
import express from "express"
import mongoose from "mongoose"

import { MONGODB_URL, PORT } from "./config.js"

import authRouter from "./routes/auth.route.js"

const app = express()

app.use(express.json())
app.use(cookieParser())

app.listen(PORT, () => {
  console.log(`Server is running from port ${PORT}`);
})

mongoose.connect(MONGODB_URL).then(() => {
  console.log("App connected to database");
}).catch((error) => {
  console.log(error);
})

app.use("/api/auth", authRouter)

app.use("/", (req, res) => {
  res.json("HELLOOOO")
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