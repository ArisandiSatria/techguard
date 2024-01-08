import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="not-found">
      <h2>404 Not Found</h2>
      <h4>Looks like the page you've search is not found</h4>
      <Link to={"/"} style={{ color: "#000", textDecoration: "none" }}>
        <p>Back to Home</p>
      </Link>
    </section>
  );
}
