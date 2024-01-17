import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Register = (props) => {
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success == false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/login");
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          name="name"
          onChange={handleChange}
          id="username"
          placeholder="full Name"
        />
        <label htmlFor="email">email</label>
        <input
          onChange={handleChange}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          onChange={handleChange}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          onChange={handleChange}
          type="password"
          placeholder="********"
          id="confirmPassword"
          name="confirmPassword"
        />
        <button disabled={loading} type="submit">
          {loading ? "Loading..." : "Register"}
        </button>
      </form>
      <Link to={"/login"} style={{ textDecoration: "none" }}>
        <h3> Already have an account? Login here.</h3>
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
  );
};
