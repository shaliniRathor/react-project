import React from 'react'
import { useState } from 'react'

function Data7() {
    const[name, setName]= useState("")
  return (
    <div>
       <label htmlFor="">userName</label>
        <input type="text" value={name} onChange={(event)=>setName(event.target.value)} />
        <p>{name}</p>


    </div>
  )
}

export default Data7