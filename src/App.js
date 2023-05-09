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
import Recovery from "./authentication/Recovery";
import Tools from "./tools/Tools";
import FieldDesc from "./myfields/fields/FieldDesc";
import Geo from "./myfields/fields/Geo";
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
                <Route path="/recovery" element={<Recovery />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/notFound" element={<NotFound />}></Route>
                <Route path="*" element={<Navigate to="/notFound" replace />} />
                {/** paths below require login */}
                <Route path="/tools" element={<Tools />} />
                <Route path="/geo" element={<Geo />}></Route>
                {/* <Route path="/fielddesc" element={<FieldDesc />}></Route> */}
                <Route path="/fielddesc/:name" element={<FieldDesc />}></Route>
              </Routes>
            ) : (
              <Routes>
                <Route path="/" element={<Authentication />} />
                <Route path="/recovery" element={<Recovery />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/notFound" element={<NotFound />}></Route>
                <Route path="*" element={<Navigate to="/notFound" replace />} />
                {/** paths requiring login should "Navigate to=" authentication */}
                <Route path="/tools" element={<Navigate to="/" replace />} />
                <Route path="/geo" element={<Navigate to="/" replace />}></Route>
                <Route path="/fielddesc" element={<Navigate to="/" replace />}></Route>
              </Routes>
            )}
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
