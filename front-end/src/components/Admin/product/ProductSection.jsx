import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

export default function ProductSection({ detail, getProductId }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [detailClicked, setDetailClicked] = useState(false);
  const [productId, setProductId] = useState("");

  useEffect(() => {
    const fetchAllProducts = async () => {
      const res = await fetch(
        "https://coding-studio-fp.vercel.app/api/product/"
      );
      const data = await res.json();
      if (data.success == false) {
        setError(data.message);
      }
      setProducts(data);
    };

    fetchAllProducts();
  }, []);

  detail(detailClicked);
  getProductId(productId);

  return (
    <div className="product-section">
      {error && error}
      {products.length > 0 ? (
        products.map((product, index) => (
          <div
            key={product.name + index}
            onClick={() => {
              setProductId(product._id);
              setDetailClicked(true);
            }}
            className="product-card"
          >
            <img src={product.images[0]} alt={product.name} />
            <p>{product.name}</p>
            <div className="product-card-footer">
              <p>Rp {product.price?.toLocaleString("en-US")}</p>
            </div>
          </div>
        ))
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <RotatingLines
            visible={true}
            height="100"
            width="100"
            strokeColor="black"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
    </div>
  );
}
