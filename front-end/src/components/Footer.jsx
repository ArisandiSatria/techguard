import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <img src="/images/techguard-logo_footer.png" alt="jpg" />
        <p>
          Tekno Biometric Security provides services in the fields of
          installation & maintenance of Fingerprint Absence Machines, Face
          Absences Machinery, Access Door Control, and CCTV with quality
          products and affordable prices.
        </p>
      </div>
      <div className="sitemap">
        <div>
          <h4>COMPANY</h4>
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
        </div>
        <div>
          <h4>PRODUCT</h4>
          <ul>
            <li>FINGERPRINT</li>
            <li>ATTENDANCE</li>
            <li>FACE RECOGNITION</li>
            <li>ACCESS DOOR CONTROL</li>
            <li>CCTV</li>
          </ul>
        </div>
        <div>
          <h4>CONTACT</h4>
          <ul>
            <li>
              <IoLocationSharp />
              Jl.Surya Abadi 6 Blok K1 No.15E, Bekasi
            </li>
            <li>
              <IoMail />
              techguard@rocketmail.com
            </li>
            <li>
              <FaPhone />
              +62 851-5666-8479
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
