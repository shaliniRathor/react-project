import React from 'react'

function Deno({studentName,studentAge,studentRollno}) {  //props destructing
  return (
    <div>
    <p>name:{studentName}</p>
    <p>age:{studentAge}</p>
    
    </div>
  )
}

export default Deno