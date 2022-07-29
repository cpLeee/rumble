import React from 'react'; 
import {useState} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import '../App.css'

function Mapbox({mentors}) {
const {id, name, background, profession, city, profile_url, longitude, latitude} = mentors;



let [viewport, setViewport] = useState({
    latitude: 37.75464109812357, 
    longitude: -122.47697058781874, 
    zoom: 8, 
    width: '800px',
    height: '500px'
});

    return (
        <div>
            <img 
            className="mapbox-quote" 
            src="https://cdn-images-1.medium.com/max/800/1*LPDFBT8grePFMd_1K5SQ4A.png" />

        <ReactMapGL
            mapboxApiAccessToken={"pk.eyJ1IjoibGVlZXdjaGVuIiwiYSI6ImNsNjZ4bW91NzNmcWQzY3BkY2lhdGxwYWUifQ.fUFr7dGnzUxMLFVhIVUXEQ"}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            {...viewport}
            // onViewportChange={(newView) => setViewport(newView)}
            onViewportChange={viewport => {
                setViewport(viewport);
            }}
        >

            {mentors.map(mentor => {
             
                <Marker
                    key={mentor.id}
                    latitude={mentor.latitude}
                    longitude={mentor.longitude}>

                    <button className='mapbox-button'>
                        <img src="https://cdn-images-1.medium.com/max/800/0*NGplrv1NqneaATAz.png" />
                    </button>
                </Marker>
            })}

        </ReactMapGL>
    </div>
    )
}

export default Mapbox