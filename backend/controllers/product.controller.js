import Product from "../models/product.model.js";
import { errorHandler } from "../utils/errorHandler.js";

export const addProduct = async (req, res, next) => {
  const { name, category, description } = req.body;

  if (!name || !category || !description || !price) {
    return next(errorHandler(400, "Please, fill all input!"));
  }

  try {
    const product = await Product.create(req.body);
    return res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) return next(errorHandler(404, "Product not found!"));

  try {
    await Product.findByIdAndDelete(req.params.id);
    return res
      .status(200)
      .json({ message: `${product.name} has been deleted!` });
  } catch (error) {
    next(error);
  }
};

export const editProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) return next(errorHandler(404, "Product not found!"));

  const { name, category, description } = req.body;

  if (!name || !category || !description) {
    return next(errorHandler(400, "Please, fill all input!"));
  }

  try {
    const editProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(201).json(editProduct);
  } catch (error) {
    next(error);
  }
};

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export const getProduct = async (req, res, next) => {
  const products = await Product.find({ category: req.params.category });

  try {
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export const getProductDetail = async (req, res, next) => {
  try {
    const product = await Product.findOne({
      category: req.params.category,
      _id: req.params.id,
    });

    if (!product) return next(errorHandler(404, "Product not found!"));

    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};
