import React from 'react'
import {useState} from 'react'
import EditDetails from "./EditDetails"

function User({user, onUpdateUser}) {
    const {id, profile_url, name, city, profession, background}= user; 

    // const [current, setCurrent]= useState(0)

    // const [updatedUser, setUpdatedUser] = useState(name, city, profession, background);
    
    // function handleUserChange(e) {
    //     e.preventDefault();
    //     fetch(`http://localhost:4000/users/${id}`, {
    //       method: "PATCH",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(user),
    //     //   body: JSON.stringify({ user: updatedUser }),
    //     })
    //       .then((r) => r.json())
    //       .then((updatedUser) => {
    //         onUpdateUser(updatedUser);
    //       });
    //   }

  return (
    <div>
        <img 
        className= "profilepage-image"
        src={profile_url} />
        <h4>{name}</h4>
        <h4>{city}</h4>
        <h5>{profession}</h5>
        <p>{background}</p>
        <EditDetails 
        editUser={user}
        handleUpdate= {onUpdateUser}/>
    </div>
  )
}

export default User