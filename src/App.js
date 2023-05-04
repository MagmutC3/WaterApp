import "./App.css";
import Login from "./components/Login";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Todo from "./components/Todo";
import Tools from "./components/Tools";
import Geo from "./components/Geo";
import AddField from "./components/AddField";

import Home from "./components/Home";


import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
          <Route path="/geo" element={<Geo />}></Route>
          <Route path="/addfield" element={<AddField />}></Route>
          <Route path="/tools" element={<Tools />}></Route>
          <Route path="/notFound" element={<NotFound />}></Route>
          <Route path="*" element={<Navigate to="/notFound" replace />} />
          <Route path="/" element={<Navigate to="/login" replace />} />

          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
