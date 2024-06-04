import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "../style/login.css";

const Login = () => {
  const token = localStorage.getItem("username");
  const [loggedIn, setLoggedIn] = useState(token !== null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const showPasswordInputHandler = () => {
    if (username) {
      setShowPasswordInput(true);
      document.getElementById("password").focus();
    } else {
      alert("Please enter your User ID.");
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (username === "admin@gmail.com" && password === "admin@123") {
      localStorage.setItem("username", username);
      setLoggedIn(true);
    }
  };

  if (loggedIn) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="main-container">
      <div className="login-container">
        <img
          src="https://ribbonsandballoons.com//frontassets/images/rnblogo.png"
          alt="iCloud Logo"
          style={{ width: "70px" }}
          height="40"
        />
        <h1>Sign in to Ribbons & Balloons</h1>
        <div className="form-group">
          <input
            type="text"
            id="user-id"
            name="username"
            value={username}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <label htmlFor="user-id">Username</label>
          <button
            className="arrow-button"
            onClick={showPasswordInputHandler}
            style={{ display: showPasswordInput ? "none" : "block" }}
          >
            &#x2192;
          </button>
        </div>
        <div
          className="form-group"
          id="password-group"
          style={{ display: showPasswordInput ? "block" : "none" }}
        >
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <label htmlFor="password">Password</label>
        </div>
        <button
          className="login-button"
          onClick={submitForm}
          style={{ display: showPasswordInput ? "block" : "none" }}
        >
          Sign In
        </button>
        <a href="#" className="forgot-password">
          Forgot username or password?
        </a>
      </div>
      <div className="footer">
        Made by <a href="http://example.com">Zyrkof</a>
      </div>
    </div>
  );
};

export default Login;