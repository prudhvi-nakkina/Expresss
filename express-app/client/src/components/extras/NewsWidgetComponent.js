import React from 'react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';

const Weatherwidget  = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '62b0e6cabe88c9761464e90cf08b19f9',
    lat: '48.137154',
    lon: '11.576124',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Boston"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  );
}


export default Weatherwidget;
