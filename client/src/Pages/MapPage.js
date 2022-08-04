import Mapbox from '../Components/Mapbox';
import React, { useState } from 'react'
import SecondMapBox from '../Components/SecondMapBox'
import Stack from '@mui/material/Stack'

function MapPage({mentorsArray}) {
  const [current, setCurrent] = useState(0)
  const length = mentorsArray.length;
  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const previousImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(mentorsArray) || mentorsArray.length <= 0) {
    return null;
  }

  return (
    <body className="chatpage">
    <Stack direction="column" justifyContent="center" alignItems="center"
    sx={{marginBottom: '-10px', marginTop: '10px'}}>
    
    <img
        className="second-mapbox-quote"
        src="https://cdn-images-1.medium.com/max/1600/1*GoiGM1iQZzdB5LbCR1u7eA.png" />

       <section className="slider2">
  
        <img
          className='mentorcard-left-arrow'
          src="https://cdn-images-1.medium.com/max/800/1*UC5JK7wWPzUW6DFov8WrEA.png"
          onClick={previousImage}
        />

        {mentorsArray.map((mentor, index) => {

          return (
            <div className={index === current ? 'mentor active' : 'mentor'} key={index}>
              {index === current && (<SecondMapBox
                key={mentor.id}
                mentor={mentor}
              />)}

            </div>
          )
        })}
        < img
          className="mentorcard-right-arrow"
          src="https://cdn-images-1.medium.com/max/800/1*YQEIDVTv2oWP2d_USO-P9Q.png"
          onClick={nextImage} />
    </section>
    </Stack>
    </body>
  );

}

export default MapPage; 