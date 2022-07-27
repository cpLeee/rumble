import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import Card from '@mui/material/Card';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


function MentorCard({mentor}) {
    const {id, name, background, profession, city, profile_url, favorites, updateFaves} = mentor; 

    const heartOutline= "https://cdn-images-1.medium.com/max/1600/1*rIespoBHGv_E1nXTpfRT2w.png"

    const heartFull= "https://cdn-images-1.medium.com/max/1600/1*zXDqSZfNO4gS9qjT9wyyNg.png"

    const [heart, setHeart] = useState();

    const handleLike = () => {
      updateFaves(id, heart)
      setHeart(!heart)
    }


  return (
    <div className="mentorcards">
      <Box
      sx={{ display: 'inline-block', width: '300px', height: 'auto', boxShadow: '1px 1px 3px #fb526b', marginBottom: '15px', marginTop: '-45px', borderRadius: '7px'}}>

        <Card
        variant="outlined"
        >
          
            <img
            className="mentorcard-image"
            src={profile_url}
            />
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

            <img
								onClick={handleLike}
								className='mentorcard-likes'
								src={heart ? heartFull : heartOutline}
							/>

            
</Stack>
            
        </Card>
      </Box>
    </div>
  )
}

export default MentorCard
