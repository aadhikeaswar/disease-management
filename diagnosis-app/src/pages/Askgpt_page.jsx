import React from "react";
import Gpt_prompt from "../components/GPT_PROMPT/Gpt_prompt";
import Responses from "../components/Links/Responses";
import { useState } from "react";

function Askgpt_page() {
  const [Response, setResponse] = useState(null);
  return <>{Response ? <Responses data = {Response}/> : <Gpt_prompt setResponse={e=>setResponse(e)}/>}</>; 
}

export default Askgpt_page;
