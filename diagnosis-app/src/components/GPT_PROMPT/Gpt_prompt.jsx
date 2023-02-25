import React from "react";
import "./Gpt_prompt.css";
function Gpt_prompt({ setResponse }) {
  return (
    <div className="prompt_box">
    <h2>What are your symptoms?</h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const gpt_res = await fetch(
            `http://localhost:2000/completion/${"Give me a list of possible diseases if I have " + e.target[0].value + "Give me a list of UK medications as well and links to articles for more information. Response should be divided into diseases,medcines, and article section. Respond with a JSON string where each section is a property in lowercase. There should be atleast 5 Article links which should be from NHS, Mayo clinic, Web MD and other reputable websites"}`
          );
          const res_json = await gpt_res.json();
          setResponse(res_json);
        }}>
        <textarea
          type="text"
          className="text_box"
          placeholder="Enter your symptoms"
          onChange={(e) => console.log(e.target.value)}
        />
        <input type="submit" className="submit_btn" value="Ask!" />
      </form>
    </div>
  );
}

export default Gpt_prompt;
