import React, { useState } from 'react';
import axios from 'axios';
import '../styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const getWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <>
      <h1> The Simple Weather App</h1>
      <div id="container" >
        <div id="text"> Enter City Here:</div>
        <input id="input" type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter le city"/>
        <button id="button" onClick={getWeather}><FontAwesomeIcon icon={faSearch} /></button>
      </div>
      {weatherData && (
        <div id="content">
          <h1>{weatherData.name}, {weatherData.sys.country}</h1>
          <h2>Temperature: {weatherData.main.temp} °F</h2>
          <h2>Weather: {weatherData.weather[0].main}</h2>
          <h2>Feels like: {weatherData.main.feels_like} °F</h2>
        </div>
      )}
    </>
    
  );
}

export default Weather;
