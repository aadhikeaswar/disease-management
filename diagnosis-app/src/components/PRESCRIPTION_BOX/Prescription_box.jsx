import React from "react";
import "./Prescription_box.css";

function Prescription_box({ medicines }) {
  return (
    <>
      <div className="Prescription_box">
        <h3>Possible medications</h3>
        <div className="style_box">
          <ul>
            {medicines.map((medicine) => {
              return <li>{medicine}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Prescription_box;
