import Order from "../models/order.model.js";
import { errorHandler } from "../utils/errorHandler.js";

export const addOrder = async (req, res, next) => {
  try {
    const order = await Order.create(req.body);
    return res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};

export const updateOrder = async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    return next(errorHandler(404, "Order not found!"));
  }

  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.status(200).json(updatedOrder);
  } catch (error) {
    next(error);
  }
};

export const getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({});
    return res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

export const getOrderDetail = async (req, res, next) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
    });

    if (!order) return next(errorHandler(404, "Order not found!"));

    return res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};
