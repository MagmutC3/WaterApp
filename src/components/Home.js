import React, { useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { firestore } from "../config/firebase";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "../App.css";

function Home() {}

export default Home;