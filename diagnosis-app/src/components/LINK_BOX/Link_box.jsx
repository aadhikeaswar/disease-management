import React from "react";
import "./Link_box.css";

function Link_box({ links }) {
  return (
    <div className="Link_box">
      <ul>
        {links.map((link) => (
          <li>
            <a href={ link }> {link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Link_box;
