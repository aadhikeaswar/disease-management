import React from "react";
import "./Response_box.css";

function Response_box() {
  return (
    <div className="Response_box">
      <h1>Your symptoms can include</h1>
      <textarea placeholder="API response" className="txt_area"/>
    </div>
  ); 
}

export default Response_box;
