import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductSection() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

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

  return (
    <div className="product-section">
      {error && error}
      {products.length > 0 ? (
        products.map((product, index) => (
          <Link
            key={product.name + index}
            to={`/product/${product._id}`}
            style={{ textDecoration: "none" }}
          >
            <div className="product-card">
              <img src={product.images[0]} alt={product.name} />
              <p>{product.name}</p>
              <div className="product-card-footer">
                <p>Rp {product.price?.toLocaleString("en-US")}</p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
