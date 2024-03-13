
// import React, { useState, useEffect } from 'react';

// // Import your components
// import LocationForm from './components/LocationForm';
// import WeatherGraph from './components/WeatherGraph';
// // import NotificationSettings from './components/NotificationSettings';
// import WeatherHistory from './components/WeatherHistory';

// const UserHome = () => {
//   const [savedLocations, setSavedLocations] = useState([]);
//   const [weatherData, setWeatherData] = useState([]);
//   const [notificationSettings, setNotificationSettings] = useState({});
//   const [weatherHistory, setWeatherHistory] = useState([]);

//   // Fetch saved locations from backend on component mount
//   useEffect(() => {
//     // Fetch saved locations from backend and update state
//     // Example: fetchSavedLocations().then(data => setSavedLocations(data));
//   }, []);

//   // Fetch weather data for saved locations from backend
//   useEffect(() => {
//     if (savedLocations.length > 0) {
//       // Fetch weather data for saved locations and update state
//       // Example: fetchWeatherData(savedLocations).then(data => setWeatherData(data));
//     }
//   }, [savedLocations]);

//   // Fetch weather history from backend
//   useEffect(() => {
//     // Fetch weather history from backend and update state
//     // Example: fetchWeatherHistory().then(data => setWeatherHistory(data));
//   }, []);

//   // Handle save location event
//   const handleSaveLocation = (location) => {
//     setSavedLocations([...savedLocations, location]);
//   };

//   // Handle notification settings update
//   const handleNotificationSettingsUpdate = (settings) => {
//     setNotificationSettings(settings);
//   };

//   return (
//     <div>
//       <h1>Weather App</h1>
//       <LocationForm onSaveLocation={handleSaveLocation} />
//       <WeatherGraph weatherData={weatherData} />
//       <NotificationSettings
//         settings={notificationSettings}
//         onUpdate={handleNotificationSettingsUpdate}
//       />
//       <WeatherHistory data={weatherHistory} />
//     </div>
//   );
// };

// export default UserHome;
