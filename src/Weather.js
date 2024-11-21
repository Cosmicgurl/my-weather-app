import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h2>Munich</h2>
      <ul>
        <li>Thursday 15:00</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6 lh-1">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly cloudy"
            className="Icon"
          />
          <span className="Temperature">3</span>
          <strong>˚C</strong>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 47%</li>
            <li>Wind: 5km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
