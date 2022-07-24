import React, { useEffect } from 'react'

function MentorCard({mentor}) {
    const {id, name, background, profession, city, profile_url} = mentor; 

  return (
    <div>
        <li>
            <img src={profile_url} />
            <h3>{name}</h3>
            <h4>{profession}</h4>
            <h4>{city}</h4>
            <p>{background}</p>
        </li>
    </div>
  )
}

export default MentorCard
