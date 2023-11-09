
import { MapPin } from 'lucide-react'


const LocationPin = ({ text } : {text : string}) => (
    <div className="pin">
      <MapPin></MapPin>
      <p className="pin-text">{text}</p>
    </div>
  )
export default LocationPin

