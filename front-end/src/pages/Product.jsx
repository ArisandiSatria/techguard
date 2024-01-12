import React from "react";
import { Link } from "react-router-dom";

export default function Product() {
  return (
    <div className="product-page">
      <div className="filter">
        <h3>Filter</h3>
        <div>
          <input type="radio" name="filterSelected" id="all" />
          <label htmlFor="all"> All</label>
        </div>
        <div>
          <input
            type="radio"
            name="filterSelected"
            id="fingerprint-attendance"
          />
          <label htmlFor="fingerprint-attendance">
            {" "}
            Fingerprint Attendance
          </label>
        </div>
        <div>
          <input type="radio" name="filterSelected" id="face-recognition" />
          <label htmlFor="face-recognition"> Face Recognition</label>
        </div>
        <div>
          <input type="radio" name="filterSelected" id="access-door-control" />
          <label htmlFor="access-door-control"> Access Door Control</label>
        </div>
        <div>
          <input type="radio" name="filterSelected" id="cctv" />
          <label htmlFor="cctv"> CCTV</label>
        </div>
      </div>

      <div className="product-section">
        <Link to={"/products/1"} style={{ textDecoration: "none" }}>
          <div className="product-card">
            <img src="images/product-1.jpg" alt="" />
            <p>product name</p>
            <div className="product-card-footer">
              <p>Rp 100.000</p>
              <p className="button">Buy Now</p>
            </div>
          </div>
        </Link>

        <Link to={"/products/1"} style={{ textDecoration: "none" }}>
          <div className="product-card">
            <img src="images/product-2.jpg" alt="" />
            <p>product name</p>
            <div className="product-card-footer">
              <p>Rp 100.000</p>
              <p className="button">Buy Now</p>
            </div>
          </div>
        </Link>

        <Link to={"/products/1"} style={{ textDecoration: "none" }}>
          <div className="product-card">
            <img src="images/product-3.jpg" alt="" />
            <p>product name</p>
            <div className="product-card-footer">
              <p>Rp 100.000</p>
              <p className="button">Buy Now</p>
            </div>
          </div>
        </Link>

        <Link to={"/products/1"} style={{ textDecoration: "none" }}>
          <div className="product-card">
            <img src="images/product-4.jpg" alt="" />
            <p>product name</p>
            <div className="product-card-footer">
              <p>Rp 100.000</p>
              <p className="button">Buy Now</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
