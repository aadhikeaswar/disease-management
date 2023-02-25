import Askgpt_page from "./pages/Askgpt_page"
import Prescription_page from "./pages/Prescription_page"
import Header from "./components/HEADER/Header";
import { useState } from "react";
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes, 
  Route,
  Link
} from "react-router-dom";

function App() {
  const [Response, setResponse] = useState(null)
  return (
    <div>
      <Router  className="App" >
        <div>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/prescriptions">Prescriptions</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Routes>
            <Route path="/" element={<Askgpt_page/>}/>
            <Route path="/prescriptions" element={<Prescription_page/>}/>
          </Routes>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
