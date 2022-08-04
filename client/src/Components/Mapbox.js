import React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';



function Mapbox({ mentorsArray }) {
    // console.log(mentorsArray[1].latitude)

    let [viewport, setViewport] = useState({
        latitude: 37.75464109812357,
        longitude: -122.47697058781874,
        zoom: 8,
        width: '700px',
        height: '450px'
    });

    return (
        <div>
            <img
                className="mapbox-quote"
                src="https://cdn-images-1.medium.com/max/800/1*LPDFBT8grePFMd_1K5SQ4A.png" />

            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={"pk.eyJ1IjoibGVlZXdjaGVuIiwiYSI6ImNsNjZ4bW91NzNmcWQzY3BkY2lhdGxwYWUifQ.fUFr7dGnzUxMLFVhIVUXEQ"}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                onViewportChange={viewport => {
                    setViewport(viewport);
                }}
            >
                {mentorsArray.map((mentor) => {
                    <div>
                        <Marker
                            key= {mentor.id}
                            latitude= {mentor.latitude}
                            longitude= {mentor.longitude}
                        >
                            <button>
                                <img
                                    className="mapbox-button"
                                    src="https://cdn-images-1.medium.com/max/800/0*NGplrv1NqneaATAz.png" />
                            </button>

                        </Marker>
                    </div>
                })}
            </ReactMapGL>
        </div>

    )
}

export default Mapbox