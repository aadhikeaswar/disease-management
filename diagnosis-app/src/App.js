// import Askgpt_page from "./pages/Askgpt_page"
// import Header from "./components/HEADER/Header";
// import { useState } from "react";
// import './App.css';

// function App() {
//   const [Response, setResponse] = useState(null)
//   return (
//     <div className="App">
    
//       <Header/>
//       <Askgpt_page setResponse={e=>setResponse(e)}/>
      
//     </div>
//   );
// }

// export default App;

import {useState} from 'react';
import Calendar from 'react-calendar'; 
import './App.css';

function App() {
 const [date, setDate] = useState(new Date())



return (
 <div className="app">
   <h1 className="header">React Calendar</h1>
   <div className="calendar-container">
     <Calendar onChange={setDate} value={date}/>
   </div>
   <div className="text-center">
      Selected date: {date.toDateString()}
   </div>
 </div>
  )

}

export default App;