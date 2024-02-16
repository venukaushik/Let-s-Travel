import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/routes/Home";
import About from "./components/routes/About";
import Service from "./components/routes/Service";
import Contact from "./components/routes/Contact";
import Signup from "./components/routes/Signup";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact element={<Home />} path="/" />
          <Route exact element={<About />} path="/about" />
          <Route exact element={<Service />} path="/service" />
          <Route exact element={<Contact />} path="/contact" />
          <Route exact element={<Signup />} path="/signup" />
        </Routes>
      </BrowserRouter>
      <ScrollToTop />
    </>
  );
}

export default App;
