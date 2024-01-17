import React, { useEffect, useState } from "react";

export default function ProductSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      const res = await fetch("/api/product/");
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
      {products.length > 0 ? (
        products.map((product, index) => (
          <div key={product.name + index} className="product-card">
            <img src={product.images[0]} alt={product.name} />
            <p>{product.name}</p>
            <div className="product-card-footer">
              <p>Rp {product.price?.toLocaleString("en-US")}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No Product</p>
      )}
    </div>
  );
}
