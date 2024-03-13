// import React, { useState, useEffect } from "react";
// import apiKeys from "../api/api";
// import Clock from "react-live-clock";
// import Forcast from "./ForeCast";
// import loader from "../images/WeatherIcons.gif";
// import ReactAnimatedWeather from "react-animated-weather";

// const dateBuilder = (d) => {
//   let months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   let days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];

//   let day = days[d.getDay()];
//   let date = d.getDate();
//   let month = months[d.getMonth()];
//   let year = d.getFullYear();

//   return `${day}, ${date} ${month} ${year}`;
// };

// const defaults = {
//   color: "white",
//   size: 112,
//   animate: true,
// };

// const CurrentLocation = ({ position }) => {
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (pos) => {
//           position(pos.coords);
//         },
//         (err) => {
//           setError(err.message);
//         }
//       );
//     } else {
//       setError("Geolocation not available");
//     }
//   }, [position]);

//   return null;
// };

// const Weather = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [position, setPosition] = useState(null);

//   // const getWeather = async (lat, lon) => {
//   //   const api_call = await fetch(
//   //     `${apiKeys.base}weather?lat=${lat}&lon=${lon}&units=metric&APPID=${apiKeys.key}`
//   //   );
//   //   const data = await api_call.json();
//   //   console.log(data)
//   //   setWeatherData({
//   //     city: data.name,
//   //     temperatureC: Math.round(data.main.temp),
//   //     temperatureF: Math.round(data.main.temp * 1.8 + 32),
//   //     main: data.weather[0].main,
//   //     country: data.sys.country,
//   //   });
//   // };
//   const getWeather = async (lat, lon) => {
//     try {
//       const api_call = await fetch(
//         `${apiKeys.base}weather?lat=${lat}&lon=${lon}&units=metric&APPID=${apiKeys.key}`
        
//       );
//       console.log("api keys",apiKeys)
//       const data = await api_call.json();
//       console.log(data);
  
//       if (data.main && data.weather && data.sys) {
//         setWeatherData({
//           city: data.name || "Unknown",
//           temperatureC: Math.round(data.main.temp) || 0,
//           temperatureF: Math.round(data.main.temp * 1.8 + 32) || 0,
//           main: data.weather[0].main || "Unknown",
//           country: data.sys.country || "Unknown",
//         });
//       } else {
//         console.error("Required weather data is missing in API response");
//         // Set default values or display an error message
//       }
//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//       // Handle error gracefully, e.g., display error message to the user
//     }
//   };
  
  

//   useEffect(() => {
//     if (position) {
//       getWeather(position.latitude, position.longitude);
//     }
//   }, [position]);

//   if (!weatherData) {
//     return (
//       <React.Fragment>
//         <img src={loader} style={{ width: "50%", WebkitUserDrag: "none" }} />
//         <h3 style={{ color: "white", fontSize: "22px", fontWeight: "600" }}>
//           Detecting your location
//         </h3>
//         <h3 style={{ color: "white", marginTop: "10px" }}>
//           Your current location wil be displayed on the App <br></br> & used
//           for calculating Real time weather.
//         </h3>
//         <CurrentLocation position={setPosition} />
//       </React.Fragment>
//     );
//   }

//   return (
//     <React.Fragment>
//       <div className="city">
//         <div className="title">
//           <h2>{weatherData.city}</h2>
//           <h3>{weatherData.country}</h3>
//         </div>
//         <div className="mb-icon">
//           <ReactAnimatedWeather
//             icon={weatherData.icon}
//             color={defaults.color}
//             size={defaults.size}
//             animate={defaults.animate}
//           />
//           <p>{weatherData.main}</p>
//         </div>
//         <div className="date-time">
//           <div className="dmy">
//             <div id="txt"></div>
//             <div className="current-time">
//               <Clock format="HH:mm:ss" interval={1000} ticking={true} />
//             </div>
//             <div className="current-date">{dateBuilder(new Date())}</div>
//           </div>
//           <div className="temperature">
//             <p>
//               {weatherData.temperatureC}°<span>C</span>
//             </p>
//             {/* <span className="slash">/</span>
//             {weatherData.temperatureF} &deg;F */}
//           </div>
//         </div>
//       </div>
//       <Forcast icon={weatherData.icon} weather={weatherData.main} />
//       <CurrentLocation position={setPosition} />
//     </React.Fragment>
//   );
// };

// export default Weather;



import React, { useState, useEffect } from "react";
import { getApiKey } from "../api/api";
import Clock from "react-live-clock";
import Forcast from "./ForeCast";
import loader from "../images/WeatherIcons.gif";
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
        <img src={loader} style={{ width: "50%", WebkitUserDrag: "none" }} />
        <h3 style={{ color: "white", fontSize: "22px", fontWeight: "600" }}>
          Detecting your location
        </h3>
        <h3 style={{ color: "white", marginTop: "10px" }}>
          Your current location will be displayed on the App <br></br> & used
          for calculating Real-time weather.
        </h3>
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
            icon={weatherData.icon} // This line needs to be updated
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
