import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <>
      <div className="auth-form-container">
        <form onSubmit={handleSubmit}>
          <label htmlfor="email">email</label>
          <div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              id="email"
              name="email"
            />
          </div>

          <div className="Password">
            <label htmlfor="Password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="Password"
              placeholder="Enter your password"
              id="password"
              name="password"
            />
          </div>
          <button type="submit">login</button>
        </form>
        <Link to={"/register"} style={{ textDecoration: "none" }}>
          <h3>Dont have an account? Register here.</h3>
        </Link>
      </div>
    </>
  );
}
