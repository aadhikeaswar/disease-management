import React from "react";
import Link_box from "../LINK_BOX/Link_box";
import Prescription_box from "../PRESCRIPTION_BOX/Prescription_box";
import Response_box from "../RESPONSE_BOX/Response_box";
import "./Responses.css";

function Responses({ data }) {
  return (
    <div className="Responses">
      <Response_box />
      <div className="secondary_boxes">
        <Link_box />
        <Prescription_box />
      </div>
    </div>
  );
}

export default Responses;
