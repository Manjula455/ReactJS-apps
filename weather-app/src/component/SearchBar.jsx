import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

function SearchBar() {
  const { city, setCity, fetchWeather } = useContext(WeatherContext);
  return (
    <div>
      <input
        type="text"
        value={city}
        placeholder="enter the city"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>
    </div>
  );
}

export default SearchBar;
