import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import { Homepage } from "./pages/home/index";

function App() {
  return (
    <Router>
      <div>
        <div>HELLO WORLD</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/topics" element={<div>About Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
