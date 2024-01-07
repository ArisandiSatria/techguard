import React from "react";
import { CiUser } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";

export default function Header() {
  return (
    <header>
      <h1>techguard</h1>
      <ul>
        <li>home</li>
        <li>product</li>
        <li>service</li>
        <li>contact</li>
      </ul>
      <div>
        <CiUser className="icon" />
        <BsCart3 className="icon" />
      </div>
    </header>
  );
}
