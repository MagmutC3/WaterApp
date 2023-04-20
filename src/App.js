import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter,
          Routes,
          Route
        } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Login from './pages/Login';
import Home from './pages/Home';
import Layout from './pages/Layout';

import handleSubmit from './handles/handlesubmit';
import { useRef } from 'react';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


/*
function App() {
    const dataRef = useRef()
   
    const submithandler = (e) => {
      e.preventDefault()
      handleSubmit(dataRef.current.value)
      dataRef.current.value = ""
    }
   
    return (
      <div className="App">
        <form onSubmit={submithandler}>
          <input type= "text" ref={dataRef} />
          <button type = "submit">Save</button>
        </form>
      </div>
    );
  }

export default App;
*/