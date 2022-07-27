import React from 'react'
import MentorList from '../Components/MentorList'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack'


function SwipePage({mentors}) {
  return (
    <body className="swipepage">
    
    <Stack direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={-11}
      >
        <img
        className='swipepage-match'
        src="https://cdn-images-1.medium.com/max/800/1*CZrljjzyVCsEqrnWoDIyQw.png" />
        <MentorList 
        mentors= {mentors}/>
        </Stack>
    
    </body>
    
  )
}

export default SwipePage