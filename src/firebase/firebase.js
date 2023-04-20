// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_ZeJq5CxxAgJzo8ayDVJcjmZPAzdg30o",
  authDomain: "stihl-pwa.firebaseapp.com",
  databaseURL: "https://stihl-pwa-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "stihl-pwa",
  storageBucket: "stihl-pwa.appspot.com",
  messagingSenderId: "12092617861",
  appId: "1:12092617861:web:3e6340e6d4a78fb4a725ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)