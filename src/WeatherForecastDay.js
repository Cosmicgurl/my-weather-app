import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}`;
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast-weekday"> {day()} </div>
      <div className="WeatherForecast-icon">
        <span>
          <img
            src={props.data.condition.icon_url}
            alt="Mostly cloudy"
            className="forecastIcon"
          />
        </span>{" "}
      </div>
      <div className="WeatherForecast-temp">
        <div className="WeatherForecast-temp-max">
          {maxTemp()}˚
          <span className="WeatherForecast-temp-min">
            {" "}
            {Math.round(props.data.temperature.minimum)}˚
          </span>
        </div>
      </div>
    </div>
  );
}
