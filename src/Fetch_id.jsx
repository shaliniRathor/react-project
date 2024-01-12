import React, { useState, useEffect } from 'react'


const Fetch_id = () => {
    const [user_id, setUser_id] = useState("");
    const [data, setData] = useState({});
    console.log(user_id);
    console.log(data);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${user_id}`)  // fetch api  //
            .then(response => response.json())
            .then((res) => {
                setData(res)
            })
            // return ()=>{
            //     abc=null 
            // }

    }, [user_id])
    


    return (
        <div>

            <input type="text" value={user_id} onChange={(e)=> setUser_id(e.target.value)}/>
            <p>{data.title}</p>
            <p>{data.id}</p>




        </div>
    )
}

export default Fetch_id