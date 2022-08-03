import React from 'react'
import {useState} from 'react'
import EditDetails from "./EditDetails"

function User({user, onUpdateUser}) {
    const {id, profile_url, name, city, profession, background}= user; 

  return (
    <div>
        <img 
        className= "profilepage-image"
        src={profile_url} />
        {/* <h4>{name}</h4>
        <h4>{city}</h4>
        <h5>{profession}</h5>
        <p>{background}</p> */}
        <EditDetails 
        editUser={user}
        handleUpdate= {onUpdateUser}/>
    </div>
  )
}

export default User