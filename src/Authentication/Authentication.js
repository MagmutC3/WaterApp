import React from "react";
import "./Authentication.css";
import Login from "./login/Login";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function Authentication() {

  return (
    <div className="authentication">
      <h1>Placeholder text to remove later in line 16</h1>
      {/** Login page should contain: */}
      {/** Logo */}
      <div className="authentication__logo">
        <img
          src="https://naiadcoin.com/wp-content/uploads/2022/09/naiad_logo.svg"
          alt="appLogo"
        ></img>
      </div>
      {/** Username and password inputs; login button */}
      <div className="authentication__login">
        <Login />
      </div>
      <div className="authentication__buttons">
        {/** Register button */}
        <div className="authentication__button">  
          <OpenInNewIcon />
          <span>Register</span>
        </div>
        {/** Forgot password button */}
        <div className="authentication__button">  
          <OpenInNewIcon />
          <span>Forgot password?</span>
        </div>
        {/** Privacy button */}
        <div className="authentication__button">  
          <OpenInNewIcon />
          <span>Privacy</span>
        </div>
        {/** About Us button */}
        <div className="authentication__button">  
          <OpenInNewIcon />
          <span>About Us</span>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
