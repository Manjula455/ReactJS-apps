import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

function StatusMessage() {
  const { loading, error } = useContext(WeatherContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return null;
}

export default StatusMessage;
