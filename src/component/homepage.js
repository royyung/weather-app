import React, { useEffect, useContext } from 'react';
import { LocationContext } from '../context/location';
import Weather from './weather';
import LoadingSpinner from './loading-spanner';
import ErrorMessage from './error-message';

function Homepage() {
  const { geoLocation, geoError, geoLoading, getLocation } = useContext(LocationContext);

  useEffect(() => {
    getLocation();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      {geoLoading && <LoadingSpinner />} 
      {geoLocation && <Weather />}
      {!geoLoading && geoError && <ErrorMessage err={geoError} />}
    </React.Fragment>
  )
}

export default Homepage;