import React from "react";

export default function ProductSection() {
  return (
    <div className="product-section">
      <div className="product-card">
        <img src="images/product-1.jpg" alt="" />
        <p>product name</p>
        <div className="product-card-footer">
          <p>Rp 100.000</p>
        </div>
      </div>

      <div className="product-card">
        <img src="images/product-2.jpg" alt="" />
        <p>product name</p>
        <div className="product-card-footer">
          <p>Rp 100.000</p>
        </div>
      </div>

      <div className="product-card">
        <img src="images/product-3.jpg" alt="" />
        <p>product name</p>
        <div className="product-card-footer">
          <p>Rp 100.000</p>
        </div>
      </div>

      <div className="product-card">
        <img src="images/product-4.jpg" alt="" />
        <p>product name</p>
        <div className="product-card-footer">
          <p>Rp 100.000</p>
        </div>
      </div>
    </div>
  );
}
