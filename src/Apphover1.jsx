              //USE EFFECT (HOOKS)
import React, {useState,useEffect} from 'react';
// // const Apphover1=()=>{
// // const[count, setCount]= useState(0);
// // useEffect(()=>{
// //     document.title='you clicked $ {count}times'})
// //     return(
// //         <div>
// //         <button onClick={()=>setCount(count+1)}>click{count}times</button>
        
// //         </div>
// //     )};
// useEffect(()=>{

// }, [])





//               //CONDTIONAL USE EFFEACT DATA

const Apphover1=()=>{
    const[count, setCount]= useState(0);
    const[name, setName]= useState('');
    const[data, setData]= useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')  // fetch api  //
      .then(response => response.json())
      .then((res)=>{
        setData(res)
      })
        // console.log("updating useEffect");
        // document.title=`you click ${count} time`
    },[])

    console.log("data=>",data); 

    return(
        <div>

            <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
            {/* <button onClick={()=>setCount(count+1)}>click{count}times</button> */}
            <ul>{data.map(d=> (
                <li key={d.id}>
                    {d.title}   
                    {/* stored dynamically data  */}
                    
                    <img style={{height:40, width:40}} src={d.url} alt="" />   
                    </li>
                  
            ))}</ul>

        </div>
    )}
                
                
    






    export default Apphover1




