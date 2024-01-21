import React, { useState } from "react";
import ProductSection from "./product/ProductSection";
import AddProduct from "./product/AddProduct";
import DetailProduct from "./product/DetailProduct";

export default function AdminProduct() {
  const [addProduct, setAddProduct] = useState(false);
  const [detail, setDetail] = useState(false);
  const [idDetailProduct, setIdDetailProduct] = useState("");

  const getProductId = (selectedId) => {
    setIdDetailProduct(selectedId);
  };

  return (
    <div className="admin-product-panel">
      <h1>
        {addProduct
          ? "Add New Product"
          : !detail
          ? "Product List"
          : "Product Detail"}
      </h1>
      <p
        onClick={() => setAddProduct(!addProduct)}
        className="admin-add-product-button"
      >
        {!addProduct && !detail ? "Add Product" : "Back"}
      </p>
      {addProduct ? (
        <AddProduct />
      ) : !detail ? (
        <ProductSection getProductId={getProductId} detail={setDetail} />
      ) : (
        <DetailProduct id={idDetailProduct} />
      )}
    </div>
  );
}
