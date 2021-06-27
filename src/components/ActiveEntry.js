import React from "react";
import displayTime from "../helpers/date";

export default function ActiveEntry(props) {
  console.log(props.selectedEntry);
  const entry = props.selectedEntry;
  return (
    entry ? (
      <div>
      <p>{displayTime(entry.dt_txt)}</p>
      <p>{entry.weather[0].icon}</p>
      <p>{entry.weather[0].main}</p>
      <p>{entry.weather[0].description}</p>
      <p>{entry.main.temp}</p>
    </div>
    ) : null
    
  );
}
