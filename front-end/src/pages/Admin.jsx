import React, { useState } from "react";
import { Link } from "react-router-dom";

import AdminOrder from "../components/Admin/AdminOrder";
import AdminProduct from "../components/Admin/AdminProduct";
import { useRecoilState, useRecoilValue } from "recoil";
import { userIsLoggedIn } from "../state/selector/loggedInUser";
import { userState } from "../state/atom/userState";

export default function Admin() {
  const [adminPage, setAdminPage] = useState("order");

  const userData = useRecoilValue(userIsLoggedIn);
  const [user, setUser] = useRecoilState(userState);
  const [error, setError] = useState(false);

  const handleLogOut = async () => {
    try {
      const res = await fetch("/api/auth/logout");
      const data = await res.json();
      if (data.success == false) {
        setError(data.message);
        return;
      }
      setUser(null);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="admin">
      <div className="admin-panel">
        <div className="admin-menu">
          <img
            src={userData.avatar}
            alt={userData.username}
            className="admin-profile-picture"
          />
          <p>Hi! {userData.username}</p>
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
        {error && (
          <p
            style={{
              color: "red",
              fontSize: "small",
              fontStyle: "italic",
            }}
          >
            {error}
          </p>
        )}
        <p className="logout-button" onClick={handleLogOut}>
          Log Out
        </p>
      </div>
      <div className="admin-page">
        {adminPage == "order" ? <AdminOrder /> : <AdminProduct />}
      </div>
    </div>
  );
}
