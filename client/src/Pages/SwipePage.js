import React from 'react'
import MentorList from '../Components/MentorList'
import Box from '@mui/material/Box';


function SwipePage({mentors}) {
  return (
    <div>
        <MentorList 
        mentors= {mentors}/>
    </div>
    
  )
}

export default SwipePage