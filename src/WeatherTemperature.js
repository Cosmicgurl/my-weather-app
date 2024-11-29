import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <span>
        <span className="Temperature">{Math.round(props.celsius)}</span>
        <strong className="unit">
          ˚C |{" "}
          <a
            href="/"
            onClick={showFahrenheit}
          >
            ˚F
          </a>{" "}
        </strong>
      </span>
    );
  } else {
    return (
      <span>
        <span className="Temperature">{Math.round(fahrenheit())}</span>
        <strong className="unit">
          <a
            href="/"
            onClick={showCelsius}
          >
            ˚C
          </a>{" "}
          | ˚F
        </strong>
      </span>
    );
  }
}
