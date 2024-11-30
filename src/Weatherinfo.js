import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function Weatherinfo(props) {
  return (
    <div>
      <h2>
        {props.data.city} <small>({props.data.country})</small>{" "}
      </h2>

      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="current col-6 lh-1">
          <img
            src={props.data.iconUrl}
            alt="Mostly cloudy"
            className="Icon"
          />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 47%</li>
            <li>Windspeed: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
