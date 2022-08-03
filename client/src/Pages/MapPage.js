import React , {useState} from 'react'
import Mapbox from '../Components/Mapbox';

function MapPage({mentorsArray}) {
  // const {id, name, background, profession, city, profile_url, longitude, latitude} = mentors;
  
    return (
      <div>
        <Mapbox
          mentorsArray= {mentorsArray} />
     </div>
    );
  }

export default MapPage; 