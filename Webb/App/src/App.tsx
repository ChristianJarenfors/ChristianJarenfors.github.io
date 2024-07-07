import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "./App.less";
import "./App.css";
import FlappyCanvas from "./FlappyCanvas";

function App() {
  return (
    <div className="App">
      <h1>Christian Jarenfors</h1>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/flappyCanvas">flappyCanvas</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/flappyCanvas" element={<FlappyCanvas />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
