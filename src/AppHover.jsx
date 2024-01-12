import React from "react";
import { useState } from "react"

                    //use effect with object

// function AppHover() {
//     const [name, setName]= useState({firstName:"" , lastName: "",phone_no: ""});
//     const [name2, setName2]= useState(false)
//     console.log(name2);
//   return (
//     <div>
//         <form>
//            <p><input required type="file" value= {name.firstName} onChange={(e)=> setName({...name, firstName:e.target.value})}/></p> 
//            <p> <input required type="email" value= {name.lasttName} onChange={(e)=> setName({...name, lastName:e.target.value})}/></p> 
//            <p> <input required type="number" value= {name.phone_no} onChange={(e)=> setName((prev)=>({...prev, phone_no:e.target.value}))}/></p> 
//            <p>name2:{name2}</p>
//            <button type="submit">setting On</button>
           

           

//             <h1>your first name is {name.firstName}</h1>
//             <h1>your last name is {name.lastName}</h1>
//             <h1>your phone number is {name.phone_no}</h1>
//             <h1>{JSON.stringify (name)}</h1>
//         </form>
//     </div>
//   )
// }

// use with Array

// const AppHover = () =>{
//     const[items, setItems]= useState([])
//     const addItems= ()=>{
//         setItems([...items, {id:items.length, value:Math.floor(Math.random()*10)+1}])
//     }

// console.log(items);
// return(
// <div>
// <button onClick={addItems}>ADD ITEM</button>
// <h1>list of item</h1>
// <ul>{items.map(item=>( <li key={item.id}>{item.value}</li>))}</ul>


// </div>
// )


// export default AppHover
