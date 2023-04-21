import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

// import logo from '../logo.svg';

const Login = () => {
  // Add your component logic here

  return (
    <div className='Login'>
      <header className='Login-header'>
        {/* Add your component JSX here */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Welcome to the Login Component!</h1>
        <p>This is the login page of your app.</p>
      </header>
    </div>
  );
};



export default Login;
