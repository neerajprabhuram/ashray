import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'

const MapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  })

  if (!isLoaded) return <div>Loading...</div>

  const center = { lat: 8.45936671496608, lng: 77.64368658832156 }

  return (
    <GoogleMap
      zoom={9}
      center={center}
      mapContainerStyle={{ width: '100%', height: '100%' }}
      options={{ disableDefaultUI: true, clickableIcons: false }}
    >
      <Marker position={center} />
    </GoogleMap>
  )
}

export default MapComponent
