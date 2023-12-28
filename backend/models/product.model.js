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
    image: { type: String, required: true },
    description: { type: String },
    specifications: [{ type: String }],
    note: { type: String, trim: true },
    packages: [
      {
        type: String,
        specifications: [{ type: String }],
      },
    ],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
