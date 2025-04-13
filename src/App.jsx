import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactForm from "./Components/ContactForm";
import Home from "./Components/Home";
import Projects from "./Components/Project";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
