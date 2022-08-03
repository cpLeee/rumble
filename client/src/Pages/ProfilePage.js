import React from 'react'
import {useState, useEffect} from 'react'
import Stack from '@mui/material/Stack'
import EditDetails from '../Components/EditDetails'
import UserProfile from '../Components/UserProfile'

function ProfilePage({user}) {


  const [users, setUsers] = useState([])


  useEffect(() => {
    fetch("http://localhost:4000/users/")
      .then((resp) => resp.json())
      .then((usersArray) => {
        setUsers(usersArray);
      });
  }, []);


  function handleUpdateUser(updatedUser) {
    const updatedUsersArray = users.map((user) => {
      if (user.id === updatedUser.id) {
        return updatedUser;
      } else {
        return user;
      }
    });
    setUsers(updatedUsersArray);
  }

  const displayedUsers = users.filter((user) => {
    return user.id === 1 //current user. 
  });

  return (
    <body className="profilepage">
   
      <Stack
        className="profilepage-stack"
        direction="column"
        alignItems="center" 
        spacing={1}
        style={{ minHeight:'89vh'}}
      >
      <img 
      className= "profilepage-myaccount"
      src="https://cdn-images-1.medium.com/max/800/1*c4xYK6qI36SWyXwvhNjtYA.png" />
      <UserProfile
      users= {displayedUsers}
      onUpdateUser= {handleUpdateUser}/>
      </Stack>
   
    </body>
  )
}

export default ProfilePage