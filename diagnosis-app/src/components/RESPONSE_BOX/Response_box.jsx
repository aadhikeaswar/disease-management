import React from "react";
import "./Response_box.css";

function Response_box({ diseases }) {
  return (
    <div className="Response_box">
      <h3>Possible diseases</h3>
      <div className="style_box">
        <ul>
          {diseases.map((element) => {
            return <li>{element}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Response_box;
