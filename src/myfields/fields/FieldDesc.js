import React, { useState } from "react";
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
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from "react-router-dom";
import "../../App.css";

function FieldDesc() {
  const history = useNavigate ();

  const fetchField = async (fieldId) => {
    const docRef = doc(db, "fields", fieldId);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const fieldData = docSnapshot.data();
      const fieldName = fieldData.name; // odwołanie do pola "name"
      console.log(fieldName);
    } else {
      console.log("Dokument nie istnieje!");
    }
  };

  const [lastIrrigation, setLastIrrigation] = useState();
  const [ nextIrrigation, setNextIrrigation ] = useState();
  const [ soilCondition, setSoilCondition] = useState();

  function getSoilCondition(lastIrrigationDate, nextIrrigationDate) {
    const now = new Date();
    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in one day
  
    const daysSinceLastIrrigation = Math.round((now - new Date(lastIrrigationDate)) / oneDay);
    const daysToNextIrrigation = Math.round((new Date(nextIrrigationDate) - now) / oneDay);
  
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
    setNextIrrigation(nextIrrigationDate)

    const soilCondition = getSoilCondition(lastIrrigationDate, nextIrrigationDate);
    setSoilCondition(soilCondition);
  }




    
  return (
    <div className="field-desc">
      <h1>Field Details</h1>
      {/* <h2>Latitude: 1</h2>
      <h2>Longitude: 1</h2> */}
      <br></br>
      <button onClick={() => IrrigationNow()}>Irrigation Now</button>
      <br></br>
      <p>Last irrigation date is: {lastIrrigation}</p>
      <p>Next irrigation date is: {nextIrrigation}</p>
      <p>Soil Condition: {soilCondition}</p>
      <button onClick={() => history(-1)}>Go Back</button>
    </div>
  );
}

export default FieldDesc;