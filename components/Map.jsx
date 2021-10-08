import React, { useState } from 'react'
import ReactMapGL,{Marker,Popup} from 'react-map-gl';
import * as geolib from 'geolib';
const Map = ({data}) => {
     const coordinate = data?.map(result => ({
         longitude: result.long,
         latitude : result.lat
     })) 
     const center = geolib.getCenter(coordinate)
     const [viewport, setViewport] = useState({
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
        width:"100%",
        height:"100%",
      });
      const [marker, selectedMarker] = useState({})
    return (
        <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/josh-123-123/ckuiahj0uf2ye17pjwo92v3ik"
        mapboxApiAccessToken={process.env.maxbox_key}
        onViewportChange={(viewport) => setViewport(viewport)}
      >
       {coordinate.map(({longitude,latitude}, i) => (
           <div key={i}>
            <Marker  longitude={longitude} latitude={latitude}  offsetLeft={-20} offsetTop={-10}>
            <p role="img" aria-label="push-pin" onClick={() =>selectedMarker({longitude,latitude})}  className="cursor-pointer text-2xl animate-bounce">📌</p>
            </Marker>
            {marker.longitude === longitude && marker.latitude === latitude ?
            (<Popup
          latitude={latitude}
          longitude={longitude}
          closeButton={true}
          closeOnClick={false}
          onClose={() => selectedMarker({})}
          >
              <div className="text-sm"> 
              <p>🌐 Latitude : {latitude}</p>
              <p>🌐 Longitude : {longitude}</p>
              </div>
              
        </Popup>)
            : false
            }
           </div>
       ))}
      </ReactMapGL>
    )
}

export default Map
