import React, { useState, useEffect, useRef, Component } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase.js";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";

function AddField() {
  const history = useNavigate();
  const [todo, setTodo] = useState("");
  const [langer, setLanger] = useState("");
  const [longer, setLonger] = useState("");

  function getCurrentTimestamp() {
    return Date.now();
  }

  const handleClick = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLanger(position.coords.latitude);
      setLonger(position.coords.longitude);
    });
  };
  const addTodo = async (e) => {
    e.preventDefault();

    if (
      langer.toString().trim().length <= 0 ||
      langer.toString().trim().length <= 0 ||
      todo.trim().length <= 0
    ) {
      alert("Pola formularza nie mogą być puste");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "satagro"), {
        name: todo.charAt(0).toUpperCase() + todo.slice(1),
        latitude: langer,
        longitude: longer,
        timestamp: getCurrentTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    alert("Pole zostało dodane!");
    history("/todo");
  };

  return (
    <div className="container">
      <h1>Dodaj Pole</h1>
      <form>
        <div className="form-group">
          <label htmlFor="todo">Nazwa Pola</label>
          <input
            type="text"
            id="todo"
            placeholder="Nazwa Pola"
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>
        <button type="button" className="btn" onClick={handleClick}>
          Pobierz moja aktualną lokalizację
        </button>
        <div className="form-group">
          <label htmlFor="langer">Szerokość Geograficzna</label>
          <input
            type="number"
            id="langer"
            placeholder="Szerokość Geograficzna"
            onChange={(e) => setLanger(e.target.value)}
            value={langer}
          />
        </div>
        <div className="form-group">
          <label htmlFor="longer">Długość Geograficzna</label>
          <input
            type="number"
            id="longer"
            placeholder="Długość Geograficzna"
            onChange={(e) => setLonger(e.target.value)}
            value={longer}
          />
        </div>
        <button type="button" className="btn" onClick={addTodo}>
          Dodaj Pole z własną lokalizacją
        </button>
      </form>
      <button className="go-back-btn" onClick={() => history(-1)}>Go Back</button>
    </div>
  );
}

export default AddField;

