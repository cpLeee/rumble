import React from 'react'
import User from './User'

function UserProfile({onUpdateUser, users}) {
 
  return (
        <ul className="cards">
          {users.map((user) => {
            return (
              <User
                key={user.id}
                user={user}
                onUpdateUser={onUpdateUser}
              />
            );
          })}
        </ul>
      );
}

export default UserProfile