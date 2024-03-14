import React, { useState, useEffect } from "react";
import axios from "axios";
import { getApiKey } from "../api/api";
import ReactAnimatedWeather from "react-animated-weather";

const Forcast = ({ icon, weather: weatherText }) => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState("");

  const defaults = {
    color: "white",
    size: 112,
    animate: true
  };

  const search = (city) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${getApiKey()}`
      )
      .then((response) => {
        setWeather(response.data);
        setQuery("");
        setError("");
      })
      .catch((error) => {
        console.error(error);
        setWeather({});
        setQuery("");
        setError({ message: "Not Found", query });
      });
  };

  
  const checkTime = (i) => {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  };

  useEffect(() => {
    search("Delhi");
  }, []);

  
  return (
    <div className="forecast">

      <div className="today-weather">
      
        <div className="search-box">
      
          <input
            type="text"
            className="search-bar"
            placeholder="Search any city"
            onChange={(e) => {
              setQuery(e.target.value);
              setWeather({});
              setError("");
            }}
            value={query}
          />

          <div className="img-box">
            <img
              src="https://images.avishkaar.cc/workflow/newhp/search-white.png"
              onClick={() => search(query)}
            />
          </div>
        </div>
        <ul>
          {typeof weather.main !== "undefined" ? (
            <div>
              <li className="cityHead">
                <p>
                  {weather.name}, {weather.sys.country}
                </p>
                <img
                  className="temp"
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                />
              </li>
              <li>
                  Temperature{" "}
                  <span className="temp">
                    {console.log("Weather:", weather)}
                    {weather && weather.main && weather.main.temp
                      ? `${Math.round(weather.main.temp)}°C (${weather.weather[0].main})`
                      : "N/A"}
                  </span>
                </li>

              <li>
                Humidity{" "}
                <span className="temp">
                  {Math.round(weather.main.humidity)}%
                </span>
              </li>
              <li>
                Visibility{" "}
                <span className="temp">
                  {Math.round(weather.visibility)} mi
                </span>
              </li>
              <li>
                Wind Speed{" "}
                <span className="temp">
                  {Math.round(weather.wind.speed)} Km/h
                </span>
              </li>
            </div>
          ) : (
            <li>
              {error.query} {error.message}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Forcast;

