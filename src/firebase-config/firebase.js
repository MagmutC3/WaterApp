// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLPYJqNNeztsf7HLnb7sU0eMy7YQ8wkmM",
  authDomain: "satagro-9454d.firebaseapp.com",
  // databaseURL: "https://stihl-pwa-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "satagro-9454d",
  storageBucket: "satagro-9454d.appspot.com",
  messagingSenderId: "339864230371",
  appId: "1:339864230371:web:cdc5a401ba05f4c9bea8d6",
  measurementId: "G-HCZXBJCE7C"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyD_ZeJq5CxxAgJzo8ayDVJcjmZPAzdg30o",
//   authDomain: "stihl-pwa.firebaseapp.com",
//   databaseURL: "https://stihl-pwa-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "stihl-pwa",
//   storageBucket: "stihl-pwa.appspot.com",
//   messagingSenderId: "12092617861",
//   appId: "1:12092617861:web:3e6340e6d4a78fb4a725ec"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const auth = getAuth(app);