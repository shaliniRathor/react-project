import React from 'react'
import { useState } from 'react'

function  Hookcounter() {
    const [count, setCount]= useState(0)
  return (
    <div> <p>plus button</p>
        <button onClick= {()=>setCount(count+1)}>count{count}</button>
 

 </div>
  )
}

export default  Hookcounter