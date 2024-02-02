import React, { useEffect, useState } from 'react'

const User = () => {
    const [users, setusers] = useState([]);

    useEffect(() => {
     fetch('http://localhost:8000/Users')
     .then(res => res.json())
     .then(data => setusers(data));
    }, [])
    
  return (
    <div >
        {
            users.map(userss =>(
                <img src={`img/${userss['image']}`} alt="" />
            ))
        }
        <h1></h1>
    </div>
  )
}

export default User