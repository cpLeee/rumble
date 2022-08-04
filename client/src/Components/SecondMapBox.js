import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl';
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box';


mapboxgl.accessToken = "pk.eyJ1IjoibGVlZXdjaGVuIiwiYSI6ImNsNjZ4bW91NzNmcWQzY3BkY2lhdGxwYWUifQ.fUFr7dGnzUxMLFVhIVUXEQ"; 


function SecondMapBox({mentor}) {    

  const mapContainerRef = useRef(null);
  const [lng, setLng] = useState(mentor.latitude);
  const [lat, setLat] = useState(mentor.latitude);
  const [zoom, setZoom] = useState(2.7);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-122.47697058781874, 37.75464109812357],
      zoom: zoom
    });


    new mapboxgl.Marker().setLngLat([mentor.longitude, mentor.latitude]).addTo(map)

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(3));
      setLat(map.getCenter().lat.toFixed(3));
      setZoom(map.getZoom().toFixed(2.5));
    });




    return () => map.remove();
  }, []); 

  return (
 
    <div className="map-container">
       

        <Card variant="outlined"
         sx={{  boxShadow: '1px 1px 3px #fb526b', borderRadius: '7px' }}
        >
        <Stack direction="column" justifyContent="center" alignItems="center">  
        <img 
        className="chatpage-profile-image"
        src= {mentor.profile_url} />
        <h3 className="chatpage-profile-name">{mentor.name}</h3>
        <h4 className="chatpage-profile-profession">{mentor.profession}</h4>
        <h4 className="chatpage-profile-city">{mentor.city}</h4>

        <div className='map-container' ref={mapContainerRef} />
        </Stack>
        </Card>
    </div>
    
  );



};

export default SecondMapBox

