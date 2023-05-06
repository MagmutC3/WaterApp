import React, { useState } from "react";
import "./Authentication.css";
import Login from "./Login";
import Signup from "./Signup";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function Authentication() {
  const [active, setActive] = useState("login");
  const handleChange = () => {
    if (active === "login") {
      setActive("signup");
    } else {
      setActive("login");
    }
  };
  return (
    <div className="authentication">
      {/** Login page should contain: */}
      {/** Logo */}
      <div className="authentication__logo">
        <img
          src="https://game-icons.net/icons/ffffff/000000/1x1/delapouite/corn.png"
          alt="appLogo"
        ></img>
      </div>
      {/** Username and password inputs; login button */}
      <div className="authentication__login">
        {active === "login" ? <Login /> : <Signup />}
      </div>
      <div className="authentication__buttons">
        {/** already have an account/don't have an account */}
        <div className="authentication__button">
          <OpenInNewIcon />
          {active === "login" ? (
            <>
              <span>Don't have an account?</span>{" "}
              <button onClick={handleChange}>Sign up</button>
            </>
          ) : (
            <>
              <span>Already have an account?</span>{" "}
              <button onClick={handleChange}>Log in</button>
            </>
          )}
        </div>
        {/** Forgot password button */}
        <button className="authentication__button">
          <OpenInNewIcon />
          <span>Forgot password?</span>
        </button>
        {/** Privacy button */}
        <button className="authentication__button">
          <OpenInNewIcon />
          <span>Privacy</span>
        </button>
        {/** About Us button */}
        <button className="authentication__button">
          <OpenInNewIcon />
          <span>About Us</span>
        </button>
      </div>
    </div>
  );
}

export default Authentication;
