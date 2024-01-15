import express from "express";

import { verifyToken } from "../utils/verifyToken.js";

import {
  addOrder,
  updateOrder,
  getAllOrders,
  getOrderDetail,
} from "../controllers/order.controller.js";

const route = express.Router();

route.post("/add-order", verifyToken, addOrder);
route.post("/edit-order/:id", verifyToken, updateOrder);
route.get("/get-orders", verifyToken, getAllOrders);
route.get("/get-order/:id", verifyToken, getOrderDetail);

export default route;
