import "./CurrentWeather.css";

const CurrentWeather = ({ data }) => {
  // display current weather details
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="description">{data.weather[0].description}</p>
        </div>
        <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
      </div>
      <div className="bottom">
        <p className="temp">{Math.round(data.main.temp)}°F</p>
        <div className="details">
          <div className="row-parameter">
            <span className="parameter-label top">Details</span>
          </div>
          <div className="row-parameter">
            <span className="parameter-label">Feels Like</span>
            <span className="parameter-value">{Math.round(data.main.feels_like)}°F</span>
          </div>
          <div className="row-parameter">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed}mph</span>
          </div>
          <div className="row-parameter">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="row-parameter">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
