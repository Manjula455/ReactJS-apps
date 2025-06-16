import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WeatherProvider from "./context/WeatherContext";
import SearchBar from "./component/SearchBar";
import WeatherInfo from "./component/WeatherInfo";
import StatusMessage from "./component/StatusMessage";

function App() {
  return (
    <WeatherProvider>
      <h1>🌤 Weather App</h1>
      <SearchBar />
      <WeatherInfo />
      <StatusMessage />
    </WeatherProvider>
  );
}

export default App;
