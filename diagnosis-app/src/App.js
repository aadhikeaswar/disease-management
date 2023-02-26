import Askgpt_page from "./pages/Askgpt_page";
import Prescription_page from "./pages/Prescription_page";
import Header from "./components/HEADER/Header";
import { useState } from "react";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router className="App">
      
        <Header />
        <Routes>
          <Route path="/" element={<Askgpt_page />} />
          <Route path="/prescriptions" element={<Prescription_page />} />
        </Routes>
      
    </Router>
  );
}

export default App;
