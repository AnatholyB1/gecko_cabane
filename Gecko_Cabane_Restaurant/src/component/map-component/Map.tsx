import GoogleMapReact , {} from 'google-map-react'
import LocationPin from './Location-Pin';




const Map = ({ location, zoomLevel, text } :{location?: GoogleMapReact.Coords,zoomLevel? :number, text : string }) => (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Restaurant</h2>
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            text={text}
          />
        </GoogleMapReact>
      </div>
    </div>
  )

export default Map;