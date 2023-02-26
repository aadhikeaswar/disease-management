import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    
      <nav className="navBar">
          <div className="navLinkBox">
            <Link to="/" className="navComp">
                Home
              </Link>
          </div>
          <div className="navLinkBox">
            <Link to="/prescriptions" className="navComp">
                Prescriptions
              </Link>
          </div>
      </nav>
  );
}

export default Header;
