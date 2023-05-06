import "./App.css";
import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
  Redirect,
  Switch,
} from "react-router-dom";
import MyFields from "./myfields/MyFields";
import Authentication from "./authentication/Authentication";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth } from "./config/firebase";
import { loginUser, setLoading } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
        console.log("User is not logged in.");
      }
    });
  }, []);

  
  const user = useSelector((state) => state.data.user.user);
  const isLoading = useSelector((state) => state.data.user.isLoading);

  return (
    <div className="app">
      {isLoading ? (
        <div class="loader-container">
          <div class="loader"></div>
        </div>
      ) : (
        <>{user ? <MyFields /> : <Authentication />}</>
      )}
    </div>
  );
}

export default App;
