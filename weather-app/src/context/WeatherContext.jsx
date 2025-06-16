import { createContext, useState } from "react";

export const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "6e8faca8f436a42cd8cb9f15e3aebf41";

  const fetchWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <WeatherContext.Provider
      value={{ city, loading, error, weather, setCity, fetchWeather }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherProvider;
