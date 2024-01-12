import logo from './logo.svg';
import './App.css';
import Props from './Props';
import Deno from './Deno';
import Practices from './Practices';
import Data7 from './Data7';
import Hookcounter from './Hookcounter'
import AppHover from './AppHover';
import Apphover1 from './Apphover1';
import Fetch_id from './Fetch_id';


function App() {
  let arr= [4,8,5]


  let data= [
    {name: "kajal", age: "20"},
    {name: "anchal", age: "27"},
    {name: "jal", age: "24"},
    {name: "jal", age: "24"},
    {name: "jal", age: "24"},
    {name: "jal", age: "24"},
    {name: "jal", age: "24"},
    {name: "jal", age: "24"},
    {name: "jal", age: "24"},


  ]

  return (
    <div className="App">
      <div> 
         {/* <Practices userName='shalini'/>
         <Data7 /> */}
         {/* <Hookcounter /> */}
         {/* <AppHover/>
         <Apphover1/> */}
         <Fetch_id/>
         



      </div>
      {/* {data.map(value=>(
        //  <Deno studentName={value.name} studentAge= {value.age}/>
       ))} */}
      {/* // <Props studentName="shalini" studentRollno= {78} studentAge= {45} array= {arr}/>
      // <Deno studentName="shalini Rathor" studentRollno= {68} studentAge= {28}/> */}
      {/* {data.map(value=>(
        <p>name: {value.name},
        age: {value.age}</p>
       ))} */}

    </div>
    
   
  );
}

export default App;
