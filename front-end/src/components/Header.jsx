import React from "react";
import { CiUser } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";

import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userIsLoggedIn } from "../state/selector/loggedInUser.js";

export default function Header() {
  const user = useRecoilValue(userIsLoggedIn);
  return (
    <header>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h2>techguard</h2>
      </Link>
      <ul>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <li>home</li>
        </Link>
        <Link to={"/products"} style={{ textDecoration: "none" }}>
          <li>product</li>
        </Link>
        <Link to={"/service"} style={{ textDecoration: "none" }}>
          <li>service</li>
        </Link>
        <Link to={"/contact"} style={{ textDecoration: "none" }}>
          <li>contact</li>
        </Link>
      </ul>
      <Link to={"/profile"} style={{ textDecoration: "none" }}>
        <div className="auth-button">
          {user ? (
            <div>
              <CiUser className="icon" style={{ color: "black" }} />
              <Link to={"/cart"} style={{ color: "black" }}>
                <BsCart3 className="icon" />
              </Link>
            </div>
          ) : (
            <>
              <Link to={"/login"} style={{ textDecoration: "none" }}>
                <p className="login">Login</p>
              </Link>
              <Link to={"/register"} style={{ textDecoration: "none" }}>
                <p className="register">Register</p>
              </Link>
            </>
          )}
        </div>
      </Link>
    </header>
  );
}
