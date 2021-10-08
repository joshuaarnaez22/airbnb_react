import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import React, { useState, useRef, useCallback } from 'react'
import MapGL,{Marker,Popup} from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'
import * as geolib from 'geolib';
const Map = ({data}) => {
      const mapRef = useRef();
      const [marker, selectedMarker] = useState({})
      const coordinate = data?.map(result => ({
        longitude: result.long,
        latitude : result.lat
    }))
    const center = geolib.getCenter(coordinate) 
    const [viewport, setViewport] = useState({
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 8,
        height:"100%",
        transitionDuration: 3000
      });


    return (
        <div className="h-full">
   <MapGL
        ref={mapRef}
        {...viewport}
        mapStyle="mapbox://styles/josh-123-123/ckuiahj0uf2ye17pjwo92v3ik"
        width="100%"
        height="100%"
        onViewportChange={(viewport) => setViewport(viewport)}
        mapboxApiAccessToken={process.env.maxbox_key}
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

        <Geocoder
          mapRef={mapRef}
          onViewportChange={(viewport) => setViewport(viewport)}
          mapboxApiAccessToken={process.env.maxbox_key}
          position="top-left"
        />
      </MapGL>
        </div>
    )
}

export default Map
