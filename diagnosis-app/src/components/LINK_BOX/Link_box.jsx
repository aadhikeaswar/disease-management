import React from "react";
import "./Link_box.css";

function Link_box({ links }) {
  return (
    <div className="Link_box">
      <h3>Links for further reading</h3>
      <div className="style_box">
        <ul >
          {links.map((link) => (
            <li>
              <a href={link}> {link}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Link_box;
