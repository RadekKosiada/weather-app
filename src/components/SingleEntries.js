import React from "react";
import displayTime from "../helpers/time";
import displayTemp from "../helpers/temp";
import iconSun from "../icons/weather-sun.svg";
import iconCloudy from "../icons/weather-cloud.svg";

export default function SingleEntries(props) {
  
  function handleClick(event) {
    props.getSelectedEntry(event.target.id);
  }

  return props.weatherEntriesArray ? (
    <div className="weather-entries-container">
      {props.weatherEntriesArray.map((entry, index) => {
        return (
          <div
            key={index}
            id={index}
            className={`weather-entry ${
              Number(props.selectedId) === Number(index) ? "active" : ""
            }`}
            onClick={handleClick}
          >
            <p className="weather-entry-time">{displayTime(entry.dt_txt)}</p>
            <img
              src={entry.weather[0].main === "Clear" ? iconSun : iconCloudy}
              alt={
                entry.weather[0].main === "Clear"
                  ? "sun icon"
                  : "sun behind cloud icon"
              }
            />
            <p className="weather-entry-temp">
              {displayTemp(entry.main.temp)}°
            </p>
          </div>
        );
      })}
    </div>
  ) : null;
}
