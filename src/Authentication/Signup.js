import React, { useState } from "react";
import "./Signup.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignupBackup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(signInWithEmailAndPassword(auth, email, password))
      .then(updateProfile(auth.currentUser, { displayName: email }))
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then(signInWithEmailAndPassword(auth, email, password))
      .then(updateProfile(auth.currentUser, { displayName: email }))
      .catch((error) => {
        alert(error.message);
      });

    try {
      const docRef = await addDoc(collection(db, "cropFields"), {
        fields: [],
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    alert("DB Doc was added!");
  };

  return (
    <div className="signup">
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value={email}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        value={password}
      />
      <button onClick={handleSignup}>Register</button>
    </div>
  );
}

export default Signup;
