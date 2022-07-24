import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


function MentorCard({mentor}) {
    const {id, name, background, profession, city, profile_url} = mentor; 

  return (
    <div>
      <Box
      sx={{ display: 'inline-block', width: '300px', height: 'auto' }}>
        <Card
        variant="outlined">
            <img
            className="mentorcard-image"
            src={profile_url} />
            <h4
            className="mentorcard-name">{name}</h4>
            <h5
            className="mentorcard-profession">{profession}</h5>
            <h5 className="mentorcard-city">{city}</h5>
            <p className="mentorcard-background">{background}</p>
            <EmailOutlinedIcon></EmailOutlinedIcon>
            <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
            
        </Card>
      </Box>
    </div>
  )
}

export default MentorCard
