import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/routes/Home";
import About from "./components/routes/About";
import Service from "./components/routes/Service";
import Contact from "./components/routes/Contact";
import SignUp from "./components/routes/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact element={<Home />} path="/" />
          <Route exact element={<About />} path="/about" />
          <Route exact element={<Service />} path="/service" />
          <Route exact element={<Contact />} path="/contact" />
          <Route exact element={<SignUp />} path="/signup" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
