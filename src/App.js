import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import MyFields from "./myfields/MyFields";
import Authentication from "./authentication/Authentication";
import About from "./aboutus/About";
import Privacy from "./aboutprivacy/Privacy";
import Tools from "./tools/Tools";
import FieldDesc from "./myfields/fields/FieldDesc";
import NotFound from "./notfound/NotFound";
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
    <Router>
      <div className="app">
        {isLoading ? (
          <div class="loader-container">
            <div class="loader"></div>
          </div>
        ) : (
          <>
            {user ? (
              <Routes>
                <Route path="/" element={<MyFields />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/fielddesc" element={<FieldDesc />}></Route>
                <Route path="/notFound" element={<NotFound />}></Route>
                <Route path="*" element={<Navigate to="/notFound" replace />} />
              </Routes>
            ) : (
              <Routes>
                <Route path="/" element={<Authentication />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/notFound" element={<NotFound />}></Route>
                <Route path="*" element={<Navigate to="/notFound" replace />} />
              </Routes>
            )}
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
