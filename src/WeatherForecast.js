import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-weekday"> Thu </div>
          <div className="WeatherForecast-icon">
            <span>
              <img
                src={props.data.iconUrl}
                alt="Mostly cloudy"
                className="forecastIcon"
              />
            </span>{" "}
          </div>
          <div className="WeatherForecast-temp">
            <div className="WeatherForecast-temp-max">
              19
              <span className="WeatherForecast-temp-min"> 10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
