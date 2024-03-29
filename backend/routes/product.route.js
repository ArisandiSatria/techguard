import express from "express";

import { verifyToken } from "../utils/verifyToken.js";

import {
  addProduct,
  editProduct,
  deleteProduct,
  getProductDetail,
  getAllProducts,
} from "../controllers/product.controller.js";

const route = express.Router();

route.post("/add-product", verifyToken, addProduct);
route.post("/edit-product/:id", verifyToken, editProduct);
route.delete("/delete-product/:id", verifyToken, deleteProduct);
route.get("/", getAllProducts);
route.get("/:id", getProductDetail);

export default route;
