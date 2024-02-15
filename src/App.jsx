import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/routes/Home";
import About from "./components/routes/About";
import Service from "./components/routes/Service";
import Contact from "./components/routes/Contact";
import Signup from "./components/routes/Signup";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact element={<Home />} path="/" />
          <Route exact element={<About />} path="/about" />
          <Route exact element={<Service />} path="/service" />
          <Route exact element={<Contact />} path="/contact" />
          <Route exact element={<Signup />} path="/signup" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
