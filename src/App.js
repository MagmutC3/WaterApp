import "./App.css";
import Login from "./pages/Login";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Todo from "./pages/Todo";
import Tools from "./pages/Tools";
import Geo from "./pages/Geo";
import AddField from "./pages/AddField";


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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
