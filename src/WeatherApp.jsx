import React, { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Nabha",
    feelslike: 12,
    temp: 32,
    tempMin: 23,
    tempMax: 30,
    humidity: 46,
    weather: <i>clear sky</i>,
  });
  let updateInfo=(newinfo)=>{
    setWeatherInfo(newinfo);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App by AD</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo} />
    </div>
  );
}
