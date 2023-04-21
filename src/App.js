import "./App.css";
import Login from "./Login";
import About from "./About";
import NotFound from "./NotFound";
import Todo from "./Todo";
import Geo from "./Geo";
import AddField from "./AddField";


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

          <Route path="/notFound" element={<NotFound />}></Route>
          <Route path="*" element={<Navigate to="/notFound" replace />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
