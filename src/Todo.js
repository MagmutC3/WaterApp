import React, { useState, useEffect, useRef } from "react";
import {
  collection,
  query,
  addDoc,
  getDocs,
  orderBy,
  where,
} from "firebase/firestore";
import { firestore } from "./firebase.js";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import { MapContainer, TileLayer } from "react-leaflet";
import osm from "./osm-providers";
import "leaflet/dist/leaflet.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  // const fetchPost = async () => {
  //   await getDocs(collection(firestore, "satagro")).then((querySnapshot) => {
  //     const newData = querySnapshot.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     setTodos(newData);
  //     console.log(todos, newData);
  //   });
  // };

  const fetchPost = async () => {
    const q = query(collection(firestore, "satagro"), orderBy("timestamp", "desc"));

    const querySnapshot = await getDocs(q);
    console.log(querySnapshot.docs);
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setTodos(newData);
    console.log(todos, newData);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const history = useNavigate();
  const [center, setCenter] = useState({ lat: 25.084622, lng: 80.248357 });
  const ZOOM_LEVEL = 13;
  const mapRef = useRef();

  return (
    <section className="todo-container">
      <div className="todo">
        <h1>SatAgro Home Page</h1>
        <Link to="/about">
          <p className="about-us-button">About Us</p>
        </Link>
        <h1 className="header">Lista pól</h1>
        <div className="btn-container">
          <Link to="/addfield">
            <button type="submit" className="btn">
              Dodaj Pole
            </button>
          </Link>
          <Link to="/tools">
            <button
              type="submit"
              className="btn"
              style={{ marginLeft: "25px" }}
            >
              Narzędzia Rolnika
            </button>
          </Link>
        </div>
        <br />
        <br />
        <div>
          <div className="todo-content">
            {todos?.map((todo, i) => (
              <div className="container" key={i}>
                <div className="map">
                  <div id="pole">
                    <MapContainer
                      center={[todo.latitude, todo.longitude]}
                      zoom={ZOOM_LEVEL}
                      ref={mapRef}
                    >
                      <TileLayer
                        url={osm.maptiler.url}
                        attribution={osm.maptiler.attribution}
                      />
                    </MapContainer>
                  </div>
                </div>
                <div className="list">
                  <div className="item">
                    <h2>{todo.name}</h2>
                    <p>Szerokość geograficzna: {todo.latitude}</p>
                    <p>Długość geograficzna: {todo.longitude}</p>
                    <p>
                      Data dodania:{" "}
                      {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      }).format(todo.timestamp)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <br />
          <br />
        </div>
      </div>
    </section>
  );
};
export default Todo;
