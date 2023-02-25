import Askgpt_page from "./pages/Askgpt_page"
import { useState } from "react";
import './App.css';

function App() {
  const [Response, setResponse] = useState(null)
  return (
    <div className="App">
      <div style={{color:"black"}}>Nav</div>
      <Askgpt_page/>
      
    </div>
  );
}

export default App;
