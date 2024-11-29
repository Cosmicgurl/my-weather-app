import React, { useState } from "react";
import axios from "axios";
import Weatherinfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function updateApp(response) {
    console.log(response.data);
    return (
      setWeatherData({
        ready: true,
        coordinates: response.data.coordinates,
        temperature: response.data.temperature.current,
        wind: response.data.wind.speed,
        city: response.data.city,
        country: response.data.country,
        date: new Date(response.data.time * 1000),
        description: response.data.condition.description,
        iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      }),
      console.log(response.data.temperature)
    );
  }
  function Search() {
    const apiKey = `97bffc05t90b9a4d323obc7a7e7acf4e`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query="${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(updateApp);
  }
  function handleSubmit(event) {
    event.preventDefault();
    Search(city);
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="Search"
                placeholder="Enter a city..."
                autoFocus="on"
                className="FormContent"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <Weatherinfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    Search();
    return "Loading..";
  }
}
