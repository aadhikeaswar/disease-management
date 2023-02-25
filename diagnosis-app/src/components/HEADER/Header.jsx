import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    
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
  );
}

export default Header;
