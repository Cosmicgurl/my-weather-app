import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function updateApp(response) {
    return (
      setWeatherData({
        ready: true,
        temperature: response.data.daily[0].temperature.day,
        wind: response.data.daily[0].wind.speed,
        city: response.data.city,
        country: response.data.country,
        description: response.data.daily[0].condition.description,
        icon: response.data.daily[0].condition.icon,
        iconUrl: response.data.daily[0].condition.icon_url,
      }),
      console.log(response.data)
    );
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="Search"
                placeholder="Enter a city..."
                autoFocus="on"
                className="FormContent"
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
        <h2>
          {weatherData.city} <small>({weatherData.country})</small>{" "}
        </h2>

        <ul>
          <li>Thursday 15:00</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6 lh-1">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Mostly cloudy"
              className="Icon"
            />
            <span className="Temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <strong>˚C</strong>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: 47%</li>
              <li>Windspeed: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `97bffc05t90b9a4d323obc7a7e7acf4e`;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query="${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(updateApp);
    return "Loading..";
  }
}
