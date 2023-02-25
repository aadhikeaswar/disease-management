import React from "react";
import "./Response_box.css";

function Response_box({ diseases }) {
  return (
    <div className="Response_box">
      <ul>
        {diseases.map((element) => {
          return <li>{element}</li>;
        })}
      </ul>
    </div>
  );
}

export default Response_box;
