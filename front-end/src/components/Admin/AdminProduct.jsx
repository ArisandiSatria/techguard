import React, { useState } from "react";
import ProductSection from "./product/ProductSection";
import AddProduct from "./product/AddProduct";
import DetailProduct from "./product/DetailProduct";
import { AiOutlineEdit } from "react-icons/ai";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function AdminProduct() {
  const [addProduct, setAddProduct] = useState(false);
  const [detail, setDetail] = useState(false);
  const [idDetailProduct, setIdDetailProduct] = useState("");
  const [editProduct, setEditProduct] = useState(false);
  const [error, setError] = useState(null);

  const handleDeleteProduct = async () => {
    console.log(idDetailProduct);
    const res = await fetch(`/api/product/delete-product/${idDetailProduct}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (data.success == false) {
      setError(data.message);
      console.log(data.message);
      alert("Delete Error");
      return;
    }
    window.location.reload();
    alert("Product Deleted");
  };

  return (
    <div className="admin-product-panel">
      <h1>
        {addProduct
          ? "Add New Product"
          : !detail
          ? "Product List"
          : editProduct
          ? "Edit Product"
          : "Product Detail"}
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingRight: "1rem",
        }}
      >
        <p
          onClick={() => {
            setAddProduct(detail && !addProduct ? addProduct : !addProduct);
            setDetail(!detail);
            setEditProduct(false);
          }}
          className="admin-add-product-button"
        >
          {!addProduct && !detail ? "Add Product" : "Back"}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
          {detail && !addProduct && !editProduct && (
            <p onClick={handleDeleteProduct} className="delete-product">
              Delete Product
            </p>
          )}
          {detail && !addProduct && (
            <p
              onClick={() => setEditProduct(!editProduct)}
              className={editProduct ? "abort-edit" : "edit"}
            >
              {editProduct ? <IoIosCloseCircleOutline /> : <AiOutlineEdit />}
              {editProduct ? "Abort Edit" : "Edit"}
            </p>
          )}
        </div>
      </div>

      {addProduct ? (
        <AddProduct />
      ) : !detail ? (
        <ProductSection getProductId={setIdDetailProduct} detail={setDetail} />
      ) : (
        <DetailProduct id={idDetailProduct} edit={editProduct} />
      )}
    </div>
  );
}
