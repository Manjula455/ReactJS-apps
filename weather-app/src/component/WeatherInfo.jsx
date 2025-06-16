import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

function WeatherInfo() {
  const { weather } = useContext(WeatherContext);
  if (!weather) return null;
  return (
    <div>
      <h1>{weather.name}</h1>
      <p>🌡{weather.main.temp}°C</p>
      <p>💨 {weather.wind.speed} m/s</p>
      <p>🌥 {weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherInfo;
