import React from "react";
import displayTime from "../helpers/time";
import displayTemp from "../helpers/temp";
import iconSun from "../icons/weather-sun.svg";
import iconCloudy from "../icons/weather-cloud.svg";

export default function SingleEntries(props) {
  console.log(props.weatherEntriesArray);

  function handleClick(event) {
    console.log("id: ", event.target.id);
    props.getSelectedEntry(event.target.id);
  }

  return props.weatherEntriesArray ? (
    <div>
      {props.weatherEntriesArray.map((entry, index) => {
        return (
          <div
            key={index}
            id={index}
            className="weather-entry"
            onClick={handleClick}
          >
            <p className="weather-entry-time">{displayTime(entry.dt_txt)}</p>
            <p>{entry.weather[0].icon}</p>
            <img
              src={entry.weather[0].main === "Clear" ? iconSun : iconCloudy}
              alt={
                entry.weather[0].main === "Clear"
                  ? "sun icon"
                  : "sun behind cloud icon"
              }
            />
            <p>{entry.weather[0].description}</p>
            <p className="weather-entry-temp">{displayTemp(entry.main.temp)}</p>
          </div>
        );
      })}
    </div>
  ) : null;
}
