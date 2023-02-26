import React from "react";
import Link_box from "../LINK_BOX/Link_box";
import Prescription_box from "../PRESCRIPTION_BOX/Prescription_box";
import Response_box from "../RESPONSE_BOX/Response_box";
import "./Responses.css";

function Responses({ data }) {
  let response = JSON.parse(data.choices[0].text);
  console.log(response);
  return (
    <div className="Responses">
      <div className="wrapper">
        <Response_box diseases={response.diseases} />

        <Prescription_box medicines={response.medicines} />
      </div>

      <Link_box links={response.articles} />
    </div>
  );
}

export default Responses;
