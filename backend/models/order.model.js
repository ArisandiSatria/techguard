import mongoose from "mongoose";

// const orderItemSchema = new mongoose.Schema({
//   product: { type: String, required: true },
//   productImage: { type: String, required: true },
//   quantity: { type: Number, required: true },
// });

const orderSchema = mongoose.Schema(
  {
    userRef: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "processing",
      enum: ["processing", "cancelled", "completed"],
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
