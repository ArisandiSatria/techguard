import cookieParser from "cookie-parser";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { MONGODB_URL, PORT } from "./config.js";

import authRouter from "./routes/auth.route.js";
import productRouter from "./routes/product.route.js";
import orderRouter from "./routes/order.route.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running from port ${PORT}`);
});

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("App connected to database");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api/auth", authRouter);
app.use("/api/product", productRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.json("This is RESTful API for Coding Studio Academy Project");
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error!";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
