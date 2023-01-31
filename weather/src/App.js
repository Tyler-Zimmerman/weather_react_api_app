import "./App.css";
import CurrentWeather from "./components/current_weather/CurrentWeather";
import Search from "./components/search/Search";
import { API_KEY, WEATHER_API_URL } from "./components/search/api";
import { useState } from "react";
import Forecast from "./components/forecast/Forecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" "); //splitting the lat/lon values

    //checks API for data value call(s) w/ fetches from https://openweathermap.org/current
    // pulling const from api.js
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`
    );

    const forecastWeatherFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`
    );

    Promise.all([currentWeatherFetch, forecastWeatherFetch]).then(
      async (response) => {
        const weatherResponse = await response[0].json(); //map response index 1
        const forecastResponse = await response[1].json(); //map response index 2

        setCurrentWeather({ city: searchData.label, ...weatherResponse }); //extend to see city
        setForecast({ city: searchData.label, ...forecastResponse }); //spread label to create new obj.
      }
    );
    //.catch((err) => console.log(err));
  };

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
