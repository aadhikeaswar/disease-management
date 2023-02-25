import Askgpt_page from "./pages/Askgpt_page"
import Header from "./components/HEADER/Header";
import { useState } from "react";
import './App.css';

function App() {
  const [Response, setResponse] = useState(null)
  return (
    <div className="App">
    
      <Header/>
      <Askgpt_page setResponse={e=>setResponse(e)}/>
      
    </div>
  );
}

export default App;
