import React from 'react'
import ReactDOM from 'react-dom'
import {useState} from 'react'
import Stack from '@mui/material/Stack'

function ProfilePage({user}) {
  const {name, background, profession, city, profile_url} = user; 

 
  const [myName, setMyName]= useState(name)
  const [myProfession, setMyProfession] = useState(profession)
  const [mycity, setMyCity]= useState(city)
  const [myBio, setMyBio]= useState("");    

  const handleChangeName= (e) => {
    setMyName(e.target.value)
  }

  const handleChangeProfession= (e) => {
    setMyProfession(e.target.value)
  }

  const handleChangeCity= (e) => {
    setMyCity(e.target.value)
  }

  const handleChangeBio= (e) => {
    setMyBio(e.target.value)
  }


 
  
  return (
    <div>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={0.2}
      >

        <img
          className="profilepage-image"
          src={profile_url} />

        
          <Stack
          direction= "row"
          space={1}>

          <form>
          <input
          className="profilepage-name"
          type="text"
          placeholder={name}
          onChange={(e) => setMyName(e.target.value)}
          />
          <button
          className= "profilepage-edit-btn">
            <img 
            className= "profilepage-edit-btn" src="https://cdn-images-1.medium.com/max/800/1*qM0PL1osixzpHZCCGOStwg.png" />
          </button>
          </form>

          </Stack>

<Stack
direction= "row">
  <form>
          <input
          className="profilepage-profession"
          type="text"
          placeholder={profession}
          onChange={(e) => setMyProfession(e.target.value)}
          />
          <button
          className= "profilepage-edit-btn">
            <img 
            className= "profilepage-edit-btn" src="https://cdn-images-1.medium.com/max/800/1*qM0PL1osixzpHZCCGOStwg.png" />
          </button>
          </form>

          </Stack>

<Stack
direction= "row">
        <form>
          <input
          className="profilepage-city"
          type="text"
          placeholder={city}
          onChange={(e) => setMyCity(e.target.value)}
          />
          <button
          className= "profilepage-edit-btn">
            <img 
            className= "profilepage-edit-btn" src="https://cdn-images-1.medium.com/max/800/1*qM0PL1osixzpHZCCGOStwg.png" />
          </button>
          </form>
</Stack>

        <form className="profilepage-form">
          <input
            className="profilepage-background"
            type="text"
            placeholder={background}
            onChange={(e) => setMyBio(e.target.value)}
          />
          <br></br>
          <br></br>
          <button
            type="submit">Update My Info</button>

        </form>
      </Stack>
    </div>
  )
}

export default ProfilePage