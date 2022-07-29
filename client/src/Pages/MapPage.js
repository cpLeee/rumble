import React , {useState} from 'react'
import Mapbox from '../Components/Mapbox';

function MapPage({mentors}) {
  const {id, name, background, profession, city, profile_url, longitude, latitude} = mentors;
  
    return (
      <div>
        <Mapbox
          mentors= {mentors} />
     </div>
    );
  }

export default MapPage; 