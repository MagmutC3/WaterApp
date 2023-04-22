import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

export default function Login() {
    return (
      <div id="login-container">
        <h1>Login</h1>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <Link to="/todo">
            <button type="submit">Login</button>
          </Link>
        </form>
        <Link to="/about">
            <p className="about-us-button">About Us</p>
          </Link>
      </div>
    );
  }