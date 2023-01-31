import "./CurrentWeather.css";

const CurrentWeather = () => {
  // display current weather details
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Static</p>
          <p className="description">Description</p>
        </div>
        <img alt="weather" className="weather-icon" src="icons/sunny.png" />
      </div>
      <div className="bottom">
        <p className="temp">18°F</p>
        <div className="details">
            <div className="row-parameter">
                <span className="parameter-label top">Details</span>
            </div> 
            <div className="row-parameter">
                <span className="parameter-label">Feels Like</span>
                <span className="parameter-value">20°F</span>
            </div>
            <div className="row-parameter">
                <span className="parameter-label">Wind</span>
                <span className="parameter-value">20mph</span>
            </div>
            <div className="row-parameter">
                <span className="parameter-label">Humidity</span>
                <span className="parameter-value">100%</span>
            </div>
            <div className="row-parameter">
                <span className="parameter-label">Pressure</span>
                <span className="parameter-value">20 hPa</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
