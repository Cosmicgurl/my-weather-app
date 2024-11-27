import React, { useState } from "react";
import axios from "axios";
import Weatherinfo from "./Weatherinfo";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function updateApp(response) {
    return (
      setWeatherData({
        ready: true,
        temperature: response.data.daily[0].temperature.day,
        wind: response.data.daily[0].wind.speed,
        city: response.data.city,
        country: response.data.country,
        date: new Date(response.data.daily[0].time * 1000),
        description: response.data.daily[0].condition.description,
        iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.daily[0].condition.icon}.png`,
      }),
      console.log(response.data)
    );
  }
  function Search() {
    const apiKey = `97bffc05t90b9a4d323obc7a7e7acf4e`;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query="${city}&key=${apiKey}&units=metric`;
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
      </div>
    );
  } else {
    Search();
    return "Loading..";
  }
}
