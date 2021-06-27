import React from "react";
import displayTime from "../helpers/time";
import displayTemp from "../helpers/temp";
import displayWeekDay from "../helpers/weekDay";
import displayDate from "../helpers/date";
import displayMonth from "../helpers/month";
import iconSun from "../icons/weather-sun.svg";
import iconCloudy from "../icons/weather-cloud.svg";

export default function ActiveEntry(props) {
  console.log(props.selectedEntry);
  const entry = props.selectedEntry;
  return entry ? (
    <div className="active-entry-container">
      <img
        src={entry.weather[0].main === "Clear" ? iconSun : iconCloudy}
        alt={
          entry.weather[0].main === "Clear"
            ? "sun icon"
            : "sun behind cloud icon"
        }
      />
      <div>
        <p className="active-entry-main">{entry.weather[0].main}</p>
        <p className="active-entry-temp">{displayTemp(entry.main.temp)}°</p>
        <p className="active-entry-description">
          {entry.weather[0].description}
        </p>
      </div>
      <div>
        <p>{displayTime(entry.dt_txt)}</p>
        <p className="active-entry-weekday">{displayWeekDay(entry.dt_txt)}</p>
        <p className="active-entry-date">{displayDate(entry.dt_txt)}. {displayMonth(entry.dt_txt)}</p>
      </div>
    </div>
  ) : null;
}
