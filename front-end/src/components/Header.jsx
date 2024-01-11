import React from "react";
// import { CiUser } from "react-icons/ci";
// import { BsCart3 } from "react-icons/bs";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h2>techguard</h2>
      </Link>
      <ul>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <li>home</li>
        </Link>
        <Link to={"/product"} style={{ textDecoration: "none" }}>
          <li>product</li>
        </Link>
        <Link to={"/service"} style={{ textDecoration: "none" }}>
          <li>service</li>
        </Link>
        <Link to={"/contact"} style={{ textDecoration: "none" }}>
          <li>contact</li>
        </Link>
      </ul>
      <div className="auth-button">
        {/* <CiUser className="icon" />
        <BsCart3 className="icon" /> */}
        <Link to={"/login"} style={{ textDecoration: "none" }}>
          <p className="login">Login</p>
        </Link>
        <Link to={"/register"} style={{ textDecoration: "none" }}>
          <p className="register">Register</p>
        </Link>
      </div>
    </header>
  );
}
