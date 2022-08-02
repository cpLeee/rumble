import React from 'react'

import {useState} from 'react'
import Stack from '@mui/material/Stack'
import EditDetails from '../Components/EditDetails'

function ProfilePage({user}) {
  const {id, name, background, profession, city, profile_url} = user; 

 
  // const [myName, setMyName]= useState(name)
  // const [myProfession, setMyProfession] = useState(profession)
  // const [mycity, setMyCity]= useState(city)
  const [myBio, setMyBio]= useState("");    

  // const handleChangeName= (e) => {
  //   setMyName(e.target.value)
  // }

  // const handleChangeProfession= (e) => {
  //   setMyProfession(e.target.value)
  // }

  // const handleChangeCity= (e) => {
  //   setMyCity(e.target.value)
  // }

  const handleChangeBio= (e) => {
    setMyBio(e.target.value)
  }
  
 

  return (
    <div key= {id}>
      
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <img
          className="profilepage-image"
          src={profile_url}
        />
        
        <h4>{name}</h4>
        <h4>{profession}</h4>
        <h4>{city}</h4>
        
      
        <form className="profilepage-form">
          <input
            className="profilepage-background"
            type="text"
            placeholder={background}
            onChange={(e) => setMyBio(e.target.value)}
          />
          <br></br>
          <br></br>
        </form>
        <EditDetails user={user} />

      </Stack>

      
    </div>
  )
}

export default ProfilePage