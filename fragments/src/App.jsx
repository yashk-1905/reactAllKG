import React from 'react'
// importing react library for getting the fragment
import './App.css'

// function App() {
//   return <div>
//     {/* abhi jab ye pura div me wrap hai to koi issue nahi hai  pura ek saath return ho raha hai*/}
//     <h1>Healthy food</h1>
//     <ul>
//     <li>Roti</li>
//     <li>Sabji</li>
//     <li>Daal</li>
//     <li>Chaanval</li>
//     </ul>
//   </div>
// }


// function App() {
//   return 
//     {/* abhi jab ye pura div me wrap nahi hai to iska matlab hum do cheejen return karva rahe hain ek h1 or ek ul jo possible nahi hai*/}
//     <h1>Healthy food</h1>
//     <ul>
//     <li>Roti</li>
//     <li>Sabji</li>
//     <li>Daal</li>
//     <li>Chaanval</li>
//     </ul>
// }


// function App() {
//   return 
//     {/* abhi in dono ko ek hi element me add karne ke liye or vo bhi bina extra div add kiye hum react ke library se uthayenge fragment*/}
//     <React.Fragment>
//     <h1>Healthy food</h1>
//     <ul>
//     <li>Roti</li>
//     <li>Sabji</li>
//     <li>Daal</li>
//     <li>Chaanval</li>
//     </ul>
//     </React.Fragment>
// }


function App() {
  return 
    {/* abhi kyonki fragment bahut jyada use hota hai isliye hum <></> aise bhi fragment ko de sakte hain vo bhi bina react ki library ko import karaaye*/}
    <>
    <h1>Healthy food</h1>
    <ul>
    <li>Roti</li>
    <li>Sabji</li>
    <li>Daal</li>
    <li>Chaanval</li>
    </ul>
    </>
}
export default App
