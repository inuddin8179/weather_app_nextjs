import React, { useState } from "react";
import InputCard from "./Inputcard";
import Outputcard from "./Outputcard";


interface WeatherData {
  location: {
    name: string;
    country: string;
    localtime: string;
  };
  current: {
    temp_c: number;
  };
}

const WeatherApp: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const handleSearch = async (city: string) => {
    const API_KEY = "64fac041177f469a88b115607240110";
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`
      );
      const data: WeatherData = await response.json(); 
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching the weather data: ", error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <InputCard onSearch={handleSearch} />
      <Outputcard weatherData={weatherData} />
    </div>
  );
};

export default WeatherApp;
