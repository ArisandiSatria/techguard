import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      enum: [
        "fingerprint-attendance",
        "face-attendance",
        "access-door",
        "cctv-installation",
      ],
    },
    name: { type: String, required: true, trim: true },
    images: { type: Array, required: true },
    description: { type: String },
    price: { type: String, required: true },
    specifications: { type: Array },
    note: { type: String, trim: true },
    packages: { type: Array },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
