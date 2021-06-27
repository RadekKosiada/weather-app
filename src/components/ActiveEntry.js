import React from "react";
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
        <div className="active-entry-main">
          <p>{entry.weather[0].main}</p> 
          {/* 12° / 2° is just a placeholder for now*/}
          <p>12° / 2°</p>
        </div>

        <p className="active-entry-temp">{displayTemp(entry.main.temp)}°</p>
      </div>
      <div className="">
        <p className="active-entry-location">Munich</p>
        <p className="active-entry-weekday">{displayWeekDay(entry.dt_txt)}</p>
        <p className="active-entry-date">
          {displayDate(entry.dt_txt)}. {displayMonth(entry.dt_txt)}
        </p>
      </div>
    </div>
  ) : null;
}
