import { createContext, useState } from 'react';

export const LocationContext = createContext();

const LocationContextProvider = ({ children }) => {
  const [geoLocation, setGeoLocation] = useState(null);
  const [geoError, setGeoError] = useState(null);
  const [geoLoading, setGeoLoading] = useState(true);

  const success = (pos) => {
    const crd = pos.coords;
    
    setGeoLocation({
      latitude: crd.latitude,
      longitude: crd.longitude
    });
    setGeoLoading(false);
  }
  
  function error(err) {
    const { code, message } = err;
    setGeoError({
      code, message
    });
    setGeoLoading(false);
  }
  
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(success, error, { timeout: 5000 });
  }

  return (
    <LocationContext.Provider value={{ geoLocation, geoError, geoLoading, getLocation }}>
      {children}
    </LocationContext.Provider>
  )
}

export default LocationContextProvider;