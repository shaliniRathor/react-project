import React from 'react'

function Props(props) {
    console.log(props);
  return (
    <div>Props {props.studentName}
    <p>{props.studentAge}</p>
    <p>{props.studentRollno}</p>
    <p>{props.array}</p>
    </div>
  )
}

export default Props