import React, { useState } from "react";
import ProductSection from "./product/ProductSection";
import AddProduct from "./product/AddProduct";

export default function AdminProduct() {
  const [addProduct, setAddProduct] = useState(false);
  return (
    <div className="admin-product-panel">
      <h1>{!addProduct ? "Product List" : "Add New Product"}</h1>
      <p
        onClick={() => setAddProduct(!addProduct)}
        className="admin-add-product-button"
      >
        {!addProduct ? "Add Product" : "Back"}
      </p>
      {addProduct ? <AddProduct /> : <ProductSection />}
    </div>
  );
}
