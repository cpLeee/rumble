import React from 'react'
import {Link} from 'react-router-dom'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button';

function HomePage() {
  return (
    <div>
    <Stack
        className="homepage-stack"
        direction="row"
        justifyContent="left"
        alignItems="center" 
        spacing={2}
        style={{ minHeight: '50vh'}}
        >
        <img 
        className= "homepage-image"
        src="https://cdn-images-1.medium.com/max/800/1*t9B-hjOVAgKi4Dgfj7o3RQ.png" />
        <h2>Switching careers, or looking for guidance
            <br></br>within your field? Meet your next mentor and
            <br></br>let's rumble<br></br>
    
            <Button
            variant="contained"
            sx={{color: '#ffffff', backgroundColor: '#fb526b', borderRadius: 4, paddingBottom: '2px', paddingTop: '2px', marginTop: '5px'}}
            className='homepage-second'>Sign Up</Button>
        </h2>
    </Stack>
       
  
        
    
    
    </div>
  )
}

export default HomePage