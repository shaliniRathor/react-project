import React from 'react'
import { useState } from 'react'



function Practices() {
const [userName, setName]= useState("0")
const [phone_number, setNumber]= useState()
const [user_id, set_Id]= useState("") 
const [user_reset]= useState()

console.log(userName);
console.log(phone_number);
console.log(user_id);
console.log(user_reset);

function reset() {
setName("")
setNumber("")
set_Id("")
}
function handleName(event1){
  setName(event1.target.value)
  console.log(event1);

}

return(
  <div> 
{/*    
     <p>enter_Name</p>
        <input type="text" value={userName} onChange={(event)=>setName(event.target.value)} /> */}

    <p>enter_number</p>
        <input type="number" value={phone_number} onChange={(event)=>setNumber(event.target.value)} />
 
  <p>enter_emailId</p>
        <input type="email" value={user_id} onChange={(event)=>set_Id(event.target.value)} />

        <p> <button onClick={ reset }>reset</button> </p>
 
        <p>enter_Name</p>
        <input type="text" value={userName} onChange={(event)=>handleName(event)} />





  </div>


)

//     const [name, setName]= useState("")
//     const [count, setCount]= useState(45)
//     console.log(count);
//     console.log(name);

// function handleclick(){
//   setCount(count-5)  
// }
// function plus(){
//     setCount(count+8)
// }
// function reset(){
//     setCount(45)
// }
//   return (
    
//     <div> hooks
 
//         <p>{count}</p> 
//         <button onClick={ handleclick }>increament</button>
//         <button onClick={ reset } >reset all data</button>
//         <button onClick={ plus } >decreament</button>
//         {/* <button onMouseUp={ handleclick }>hover me</button>
//         <p onMouseOver={ handleclick }>steps</p> */}

//         <p>{name}</p>
//         <input type="text" value={name} onChange={(event)=>setName(event.target.value)} />





    // </div>
  // )
}

export default Practices