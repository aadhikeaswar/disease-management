import React from "react";
import "./Prescription_box.css";

function Prescription_box({medicines}) {
  return (
    <>
      <div className="Prescription_box"><ul>
        {medicines.map((medicine)=>{return <li>{medicine}</li>})}
      </ul></div>
    </>
  );
}

export default Prescription_box;
