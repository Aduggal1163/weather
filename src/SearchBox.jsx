import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";
import "/src/SearchBox.css";
export default function SearchBox({updateInfo}) {
  let [city, setCity] = useState("");
  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let API_KEY = "c4915b0048c66a0cca57598d12071d45";
  let getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    let result = {
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
  };
  let handleChange = (event) => {
    setCity(event.target.value);
  };
  let handleSubmit = async(event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
    let newinfo=await getWeatherInfo();
    updateInfo(newinfo);
  };
  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="City"
          label="City"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit" endIcon={<SendIcon />}>
          Search
        </Button>
      </form>
    </div>
  );
}
