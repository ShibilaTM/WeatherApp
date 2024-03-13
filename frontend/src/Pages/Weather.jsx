import React, { useState, useEffect } from "react";
import { getApiKey } from "../api/api";
import Clock from "react-live-clock";
import Forcast from "./ForeCast";
import loader from "../images/location.png";
import ReactAnimatedWeather from "react-animated-weather";

const dateBuilder = (d) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
};

const defaults = {
  color: "white",
  size: 112,
  animate: true,
};

const CurrentLocation = ({ setPosition }) => {
  useEffect(() => {
    const success = (pos) => {
      setPosition({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    };

    const error = (err) => {
      console.error("Error getting location:", err);
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }, [setPosition]);

  return null;
};

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [position, setPosition] = useState(null);

  // useEffect(() => {
  //   if (position) {
  //     const apiKey = getApiKey();
  //     const { latitude, longitude } = position;

  //     const getWeather = async () => {
  //       try {
  //         const response = await fetch(
  //           `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
  //         );
  //         const data = await response.json();
  //         console.log("Weather data:", data);
  //         setWeatherData(data);
  //       } catch (error) {
  //         console.error("Error fetching weather data:", error);
  //       }
  //     };

  //     getWeather();
  //   }
  // }, [position]);

  useEffect(() => {
    if (position) {
      const apiKey = getApiKey();
      const { latitude, longitude } = position;
  
      const getWeather = async () => {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
          );
          const data = await response.json();
          console.log("Weather data:", data);
  
          // Log the main property to ensure it's correct
          console.log("Main:", data.weather[0].main);
  
         // Inside the useEffect hook of the Weather component
// After setting the weather data, set the icon property
let icon = "CLEAR_DAY"; // Default icon
switch (data.weather[0].main) {
  case "Haze":
    icon = "CLEAR_DAY";
    break;
  case "Clouds":
    icon = "CLOUDY";
    break;
  case "Rain":
    icon = "RAIN";
    break;
  case "Snow":
    icon = "SNOW";
    break;
  case "Dust":
    icon = "WIND";
    break;
  case "Drizzle":
    icon = "SLEET";
    break;
  case "Fog":
  case "Smoke":
    icon = "FOG";
    break;
  case "Tornado":
    icon = "WIND";
    break;
  default:
    icon = "CLEAR_DAY";
}

// Set the icon property in the weather data
data.icon = icon;

setWeatherData(data);

        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      };
  
      getWeather();
    }
  }, [position]);
  
  

  if (!weatherData) {
    return (
<React.Fragment>
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <img src={loader} style={{ width: "50%", WebkitUserDrag: "none" }} />
    <h3 style={{ color: "white", fontSize: "22px", fontWeight: "600" }}>
      Detecting your location
    </h3>
    <h3 style={{ color: "white", marginTop: "10px" }}>
      Your current location will be displayed on the App <br /> & used
      for calculating Real-time weather.
    </h3>
  </div>
  <CurrentLocation setPosition={setPosition} />
</React.Fragment>

    );
  }

  return (
    <React.Fragment>
      <div className="city">
        <div className="title">
          <h2>{weatherData.name}</h2>
          <h3>{weatherData.sys.country}</h3>
        </div>
        <div className="mb-icon">
          {/* You need to set the icon property based on the weather data */}
          
              <ReactAnimatedWeather
                icon={weatherData.icon} // Update to use weatherData.icon
                color={defaults.color}
                size={defaults.size}
                animate={defaults.animate}
              />

          <p>{weatherData.weather[0].main}</p>
        </div>
        <div className="date-time">
          <div className="dmy">
            <div id="txt"></div>
            <div className="current-time">
              <Clock format="HH:mm:ss" interval={1000} ticking={true} />
            </div>
            <div className="current-date">{dateBuilder(new Date())}</div>
          </div>
          <div className="temperature">
            <p>
              {Math.round(weatherData.main.temp)}°<span>C</span>
            </p>
          </div>
        </div>
      </div>
      <Forcast icon={weatherData.icon} weather={weatherData.weather[0].main} />
      <CurrentLocation setPosition={setPosition} />
    </React.Fragment>
  );
};

export default Weather;
