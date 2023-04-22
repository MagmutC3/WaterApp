// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLPYJqNNeztsf7HLnb7sU0eMy7YQ8wkmM",
  authDomain: "satagro-9454d.firebaseapp.com",
  projectId: "satagro-9454d",
  storageBucket: "satagro-9454d.appspot.com",
  messagingSenderId: "339864230371",
  appId: "1:339864230371:web:cdc5a401ba05f4c9bea8d6",
  measurementId: "G-HCZXBJCE7C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);