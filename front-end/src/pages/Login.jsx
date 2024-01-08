import React, { useState } from "react";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlfor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
          id="email"
          name="email"
        />
        <label htmlfor="Password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="Password"
          placeholder="Enter your password"
          id="password"
          name="password"
        />
        <button type="submit">login</button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Dont have an account? Register here.
      </button>
    </>
  );
}
