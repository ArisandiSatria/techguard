import React, { useState } from "react";
import { Link } from "react-router-dom";

import AdminOrder from "../components/Admin/AdminOrder";
import AdminProduct from "../components/Admin/AdminProduct";

export default function Admin() {
  const [adminPage, setAdminPage] = useState("order");
  return (
    <div className="admin">
      <div className="admin-panel">
        <div className="admin-menu">
          <img src="" alt="admin image" />
          <span>Admin 1</span>
          <div className="admin-panel-list">
            <p
              onClick={() => setAdminPage("order")}
              className={`order-panel-button ${
                adminPage == "order" ? "active" : ""
              }`}
            >
              Order
            </p>
            <p
              onClick={() => setAdminPage("product")}
              className={`product-panel-button ${
                adminPage == "product" ? "active" : ""
              }`}
            >
              Product
            </p>
          </div>
        </div>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <p className="logout-button">Log Out</p>
        </Link>
      </div>
      <div className="admin-page">
        {adminPage == "order" ? <AdminOrder /> : <AdminProduct />}
      </div>
    </div>
  );
}
