// module.exports = {
//     key: "350ae46ea3345160be985a68f5aa166e",
//     base: "https://api.openweathermap.org/data/2.5/weather?q={city}&appid={key}",
//   };



// const api = '350ae46ea3345160be985a68f5aa166e'
// const apiKeys = async (city) => {
//     try {
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`);
//         const json = await response.json();
//         return json;
//     } catch (error) {
//         console.error("Error fetching weather data:", error);
//         return null; // or handle the error in a different way
//     }
// }

// export default apiKeys;


// apiKeys.js
const apiKey = "350ae46ea3345160be985a68f5aa166e"; // Your OpenWeatherMap API key

export const getApiKey = () => apiKey;
