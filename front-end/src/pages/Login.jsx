import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../state/atom/userState";
import Cookies from "js-cookie";

export default function Login() {
  const [formData, setFormData] = useState({});
  const [user, setUser] = useRecoilState(userState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const setCookie = (cookie) => {
    Cookies.set("access_token", cookie, { expires: 1 });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      const res = await fetch(
        "https://coding-studio-fp.vercel.app/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (data.success == false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setUser(data);
      setCookie(data.token);
      setLoading(false);
      setError(null);
      navigate("/");
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  return (
    <>
      <div className="auth-form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">email</label>
          <div>
            <input
              onChange={handleChange}
              type="email"
              placeholder="Enter your email"
              id="email"
              name="email"
            />
          </div>

          <div className="Password">
            <label htmlFor="Password">Password</label>
            <input
              onChange={handleChange}
              type="Password"
              placeholder="Enter your password"
              id="password"
              name="password"
            />
          </div>
          <button disabled={loading} type="submit">
            {loading ? "Loading..." : "Log In"}
          </button>
        </form>
        <Link to={"/register"} style={{ textDecoration: "none" }}>
          <h3>Dont have an account? Register here.</h3>
        </Link>
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
      </div>
    </>
  );
}
