import './App.css';
import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import MyFields from './MyFields/MyFields';
import Authentication from './Authentication/Authentication';

function App() {
  return (
    <div className="app">
    <Router>
      <Routes>
        <Route path="/myfields" element={<MyFields />}></Route>
        <Route path="/authentication" element={<Authentication />}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
