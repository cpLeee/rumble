import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import Card from '@mui/material/Card';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


function MentorCard({mentor}) {
    const {id, name, background, profession, city, profile_url} = mentor; 

  return (
    <div className="mentorcards">
      <Box
      sx={{ display: 'inline-block', width: '300px', height: 'auto', boxShadow: '1px 1px 3px #fb526b', marginBottom: '15px', borderRadius: '7px'}}>
        <Card
        variant="outlined"
        >
            <img
            className="mentorcard-image"
            src={profile_url} />
            <h4
            className="mentorcard-name">{name}</h4>
            <h5
            className="mentorcard-profession">{profession}</h5>
            <h5 className="mentorcard-city">{city}</h5>
            <p className="mentorcard-background">{background}</p>

<Stack
direction="row"
justifyContent="center"
alignItems="center" >
            <EmailOutlinedIcon
            sx={{marginRight: '15px' }}></EmailOutlinedIcon>
            <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
</Stack>
            
        </Card>
      </Box>
    </div>
  )
}

export default MentorCard
