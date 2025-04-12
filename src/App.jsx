import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactForm from "./Components/ContactForm";
// import Home from "./Components/Home";

function App() {
  return (
    <ContactForm/>
    // <Home/>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home/>} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<ContactForm />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
