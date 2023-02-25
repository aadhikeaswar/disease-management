import {useState} from 'react';
import Calendar from 'react-calendar'; 
import './App.css';

function Calendar() {
 const [date, setDate] = useState(new Date())



return (
 <div className="calendar">
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

export default Calendar;