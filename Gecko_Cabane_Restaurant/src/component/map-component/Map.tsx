import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';




const containerStyle = {
  width: '100%',
  height: '100%',
};



const center   = {
  lat: 8.06164275698826,
  lng: 98.91564013693201
};


const Map: React.FC = () => {
  return (
    <LoadScript
      googleMapsApiKey= {import.meta.env.VITE_API_GOOGLE_KEY }
      googleMapsClientId='99c8089849bac720'
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={20}
      >
      
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)