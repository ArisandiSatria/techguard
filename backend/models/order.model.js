import mongoose from "mongoose";

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
      enum: ["processing", "rejected", "approved", "cancelled", "completed"],
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
