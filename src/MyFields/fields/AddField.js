import React, { useState } from "react";
import "./AddField.css";
import { db } from "./../../config/firebase";

function AddField() {
  const [name, setName] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  // const [image, setImage] = useState("");

  const handleLocationClick = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => console.log(error)
    );
  };








  

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new document in the "fields" collection
    db.collection("fields")
      .add({
        name,
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
      })
      .then(() => {
        console.log("Field added to Firestore!");
        setName("");
        setLatitude("");
        setLongitude("");
      })
      .catch((error) => {
        console.error("Error adding field to Firestore: ", error);
      });
  };

















  return (
    <div className="addfield">
      <h1>AddField</h1>
      <form className="addfield__form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Latitude:
          <input type="text" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
        </label>
        <label>
          Longitude:
          <input type="text" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
        </label>
        <button type="button" onClick={handleLocationClick}>
          Get My Location
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddField;
