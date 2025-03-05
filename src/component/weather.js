import React, { useContext, useEffect, useState } from 'react';
import { HttpStatusCode } from 'axios';

import { LocationContext } from '../context/location';
import { getCurrentWeather } from '../services/weather';
import '../styles/weather.css';
import LoadingSpinner from './loading-spanner';
import ErrorMessage from './error-message';

function Weather() {
  const { geoLocation } = useContext(LocationContext);
  
  const [temperature, setTemperature] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getWeatherService = async () => {
    try {
      const res = await getCurrentWeather(geoLocation.latitude, geoLocation.longitude);
      if (res.status === HttpStatusCode.Ok) {
        const { data } = res;
        setTemperature(`${data.current.temperature_2m}${data.current_units.temperature_2m}`);
        setLoading(false);
      }
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    getWeatherService();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>  
      {loading && <LoadingSpinner />}

      {temperature &&  
        <div className="weatherCard">
          <h2>Weather based on your current location</h2>
          <div className="temperature">{temperature}</div>
        </div>
      }

      {!temperature && error && <ErrorMessage err={error} />}
    </React.Fragment>
  )
}

export default Weather;