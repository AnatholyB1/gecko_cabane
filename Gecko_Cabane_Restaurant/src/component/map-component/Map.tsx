import React, { useState }  from 'react'
import { GoogleMap, LoadScript , Marker, InfoWindow } from '@react-google-maps/api';




const containerStyle = {
  width: '100%',
  height: '100%',
};



const center   = {
  lat: 8.06164275698826,
  lng: 98.91564013693201
};


const Map: React.FC = () => {
  const [selected, setSelected] = useState(true);
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
         <Marker 
          position={{lat: 8.06164275698826, lng: 98.91564013693201}} 
          onClick={() => setSelected(true)}
          title='GECKO CABANE RESTAURANT'
        />
        {selected && (
          <InfoWindow
            position={{lat: 8.06164275698826, lng: 98.91564013693201}}
            aria-label="GECKO CABANE RESTAURANT"
            onCloseClick={() => setSelected(false)}
          >
            <div>
              <h4>Restaurant Name</h4> {/* replace with the name of the restaurant */}
              <p>Restaurant details</p> {/* replace with the details of the restaurant */}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)