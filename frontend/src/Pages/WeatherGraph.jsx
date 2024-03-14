import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import { getApiKey } from "../api/api";
import './UserHome.css'

const WeatherGraph = ({ user }) => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    
    if (user && user.location) {
      fetchWeatherData(user.location);
    } else {
      
      fetchWeatherData("Delhi");
    }
  }, [user]);

  const fetchWeatherData = async (location) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${getApiKey()}`
      );
      const data = response.data;
      setWeatherData(data.list);
      createChart(data.list);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const createChart = (weatherList) => {
    const labels = weatherList.map((weather) => weather.dt_txt);
    const temperatures = weatherList.map((weather) => weather.main.temp);

    const ctx = document.getElementById("weatherChart").getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Temperature (°C)",
            data: temperatures,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      },
    });
  };

  return (
    <div className="UserHome">
      <h2>Weather Graph</h2>
      <canvas id="weatherChart" width="400" height="200"></canvas>
    </div>
  );
};

export default WeatherGraph;
