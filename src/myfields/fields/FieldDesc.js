import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  collection,
  query,
  addDoc,
  getDocs,
  orderBy,
  where,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "../../App.css";
import "./FieldDesc.css";
import { MapContainer, TileLayer } from "react-leaflet";
import osm from "../../osm-providers";
import "leaflet/dist/leaflet.css";
import BasicMap from "./Geo";
import { auth } from "../../config/firebase";

function FieldDesc({ name }) {
  const history = useNavigate();

  const [fieldData, setFieldData] = useState(null);

  const [fieldLatitude, setFieldLatitude] = useState(0);
  const [fieldLongitude, setFieldLongitude] = useState(0);

  useEffect(() => {
    const fetchField = async () => {
      const docRef = doc(
        db,
        "users",
        auth.currentUser.uid,
        "fields",
        name
      );
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        const fieldData = docSnapshot.data();
        const fieldName = name;
        console.log(fieldName);
        setFieldLatitude(fieldData.latitude);
        setFieldLongitude(fieldData.longitude);
      } else {
        console.log("Dokument nie istnieje!");
      }
    };

    fetchField();
  }, [name]);

  const [lastIrrigation, setLastIrrigation] = useState();
  const [nextIrrigation, setNextIrrigation] = useState();
  const [soilCondition, setSoilCondition] = useState();

  function getSoilCondition(lastIrrigationDate, nextIrrigationDate) {
    const now = new Date();
    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in one day

    const daysSinceLastIrrigation = Math.round(
      (now - new Date(lastIrrigationDate)) / oneDay
    );
    const daysToNextIrrigation = Math.round(
      (new Date(nextIrrigationDate) - now) / oneDay
    );

    if (daysSinceLastIrrigation >= 10) {
      return "bad";
    } else if (daysSinceLastIrrigation >= 7) {
      return "poor";
    } else if (daysToNextIrrigation <= 2) {
      return "very good";
    } else if (daysToNextIrrigation <= 5) {
      return "good";
    } else {
      return "average";
    }
  }

  function IrrigationNow() {
    const now = new Date();
    const lastIrrigationDate = now.toLocaleString();
    setLastIrrigation(lastIrrigationDate);
    const nextWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    const nextIrrigationDate = nextWeek.toLocaleString();
    setNextIrrigation(nextIrrigationDate);

    const soilCondition = getSoilCondition(
      lastIrrigationDate,
      nextIrrigationDate
    );
    setSoilCondition(soilCondition);
  }

  return (
    <div className="field-desc">
      <h1>Field Details: {name}</h1>

      <br></br>
      <button onClick={() => IrrigationNow()}>Irrigation Now</button>
      <p className="coordinates">Last irrigation date is: {lastIrrigation}</p>
      <p className="coordinates">Next irrigation date is: {nextIrrigation}</p>
      <p className="coordinates">Soil condition is: {soilCondition}</p>
      <br></br>
      <BasicMap className="fieldMap"> </BasicMap>
      <p className="coordinates">Latitude: {fieldLatitude}</p>
      <p className="coordinates">Longitude: {fieldLongitude}</p>
      <button onClick={() => history(-1)}>Go Back</button>
    </div>
  );
}

export default FieldDesc;
