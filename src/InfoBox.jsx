import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1707295369365-cf16a8422a08?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xlYXIlMjBza3l8ZW58MHx8MHx8fDA%3D";
  // let info={
  //     city:"Nabha",
  //     feelslike:12,
  //     temp:32,
  //     tempMin:23,
  //     tempMax:30,
  //     humidity:46,
  //     weather:<i>clear sky</i>
  // }
  const HOT_URL =
    "https://images.unsplash.com/photo-1508957454729-17eb89cd4b67?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1707295369365-cf16a8422a08?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xlYXIlMjBza3l8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";
  return (
    <div className="InfoBox">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} 
        image={info.humidity>80 ? RAIN_URL : info.temp>28 ? HOT_URL : COLD_URL}
         title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} {info.humidity>80 ? <ThunderstormIcon/> : info.temp>28 ? <WbSunnyIcon/> : <AcUnitIcon/>}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <div>Temperature :{info.temp}&deg;C</div>
            <div>Humidity :{info.humidity}</div>
            <div>Min Temp :{info.tempMin}&deg;C</div>
            <div>Max Temp :{info.tempMax}&deg;C</div>
            <div>
              The weather can be described as {info.weather} which feels like :
              {info.feelslike}&deg;C
            </div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
