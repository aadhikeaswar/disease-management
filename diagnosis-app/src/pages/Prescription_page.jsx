import React from 'react'
import { useState } from 'react';
import "./Prescription_page.css"
function Prescription_page() {
  const [input_name, setName] = useState("Enter Name");
  const [input_dosage, setDosage] = useState("Enter Dosage");
  const [input_frequency, setFrequency] = useState("Enter Frequency");
  const [prescriptions, setPrescriptions] = useState([]);
  const addPrescription = () => {
    setPrescriptions(oldPrescriptions => [...oldPrescriptions, create_Prescription()]);
  }
  let create_Prescription = () =>
  {
    return {
      name : input_name,
      dosage : input_dosage,
      frequency : input_frequency 
    }
  }
   let prescription_list = prescriptions.map((prescription) =>
    <li className='prescriptionBox'>
      Name : {prescription.name}
      <br/>
      Dosage : {prescription.dosage}
      <br/>
      Frequency : {prescription.frequency}
    </li>
  );
  return (
    <div name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, minimal-ui, user-scalable=no" >
      <ul className='prescriptionList'>
        {prescription_list}
      </ul>
        <div>
          <div>
            <input type='text' name='Name' value={input_name} onChange={(e)=>setName(e.target.value)} className='input'/>
          </div>
          <div>
            <input type='text' name='Dosage' value={input_dosage} onChange={(e)=>setDosage(e.target.value)}className='input'/>
          </div>
          <div>
            <input type='text' name='Frequency' value={input_frequency} onChange={e=>setFrequency(e.target.value)}className='input'/>
          </div>
          <button type="submit" onClick={addPrescription} className='submit_btn'>Add Prescription</button>
        </div>
    </div>
  )
}

export default Prescription_page