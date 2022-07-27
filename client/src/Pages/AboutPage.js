import React from 'react'
import { Stack } from '@mui/material'

function AboutPage() {
  return (
    <body className="about-page">
      <Stack
      alignItems="center"
      justifyContent="center"
      spacing={-3.3}>
        <img 
        className='aboutpage-rumble'
        src="https://cdn-images-1.medium.com/max/1600/1*bAuM2uAilg_fu867SIbtNA.png" />
      <img
        className='aboutpage-image'
        src='https://cdn-images-1.medium.com/max/1600/1*akPJaWYgWMCY13zXgbJRsA.png' />
      </Stack>
    </body>
  )
}

export default AboutPage