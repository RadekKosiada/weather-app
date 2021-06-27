import React from "react";
import displayTime from "../helpers/date";
import displayTemp from "../helpers/temp";
import displayWeekDay from "../helpers/weekDay";

export default function ActiveEntry(props) {
  console.log(props.selectedEntry);
  const entry = props.selectedEntry;
  return (
    entry ? (
      <div>
      <p>{displayTime(entry.dt_txt)}</p>
      <p>{displayWeekDay(entry.dt_txt)}</p>
      <p>{entry.weather[0].icon}</p>
      <p>{entry.weather[0].main}</p>
      <p>{entry.weather[0].description}</p>
      <p>{displayTemp(entry.main.temp)}</p>
    </div>
    ) : null
    
  );
}
