import React from "react";
import "./Gpt_prompt.css"
function Gpt_prompt({setResponse}) {
  return (
    <form
      onSubmit={async(e) => {
        e.preventDefault();
        const gpt_res = await fetch(`http://localhost:2000/completion/${e.target[0].value}`)
        const res_json = await gpt_res.json()
        setResponse(res_json)
      }}>
      <textarea type="text" className="text_box" placeholder="Enter your prompt for chat gpt" onChange={(e)=>console.log(e.target.value)}/>
      <input type="submit" className="submit_btn" value="Ask!"/>
    </form>
  );
}

export default Gpt_prompt;
