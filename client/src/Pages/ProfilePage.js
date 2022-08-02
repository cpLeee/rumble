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
    <div>
  
      <UserProfile
      users= {displayedUsers}
      onUpdateUser= {handleUpdateUser}/>
    </div>
  )
}

export default ProfilePage