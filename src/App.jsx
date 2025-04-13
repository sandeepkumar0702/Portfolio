import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactForm from "./Components/ContactForm";
import Home from "./Components/Home";
import Projects from "./Components/Project";
import Work from "./Components/Work";
import Team from "./Components/team";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/work" element={<Work />} />
        <Route path="/team" element={<Team/>}/>
      </Routes>
    </Router>
  );
}

export default App;
