import React from 'react'
import MentorList from '../Components/MentorList'


function SwipePage({mentors}) {
  return (
    <div>
      <MentorList 
      mentors= {mentors}/>
    </div>
  )
}

export default SwipePage