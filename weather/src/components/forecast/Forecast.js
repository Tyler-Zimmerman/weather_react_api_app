import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./Forecast.css";

const WEEK_DAYS = [
  // array for displaying days in a week
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const daysInWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(daysInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, daysInWeek)
  );

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="minMax">
                    {Math.round(item.main.temp_min)}°F /{" "}
                    {Math.round(item.main.temp_max)}°F
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Pressure:</label>
                  <label>{item.main.pressure} hPa</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity:</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Clouds:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind Speed:</label>
                  <label>{item.wind.speed}mph</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Sea Level:</label>
                  <label>{item.main.sea_level}ft.</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Feels Like:</label>
                  <label>{Math.round(item.main.feels_like)}°F</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;