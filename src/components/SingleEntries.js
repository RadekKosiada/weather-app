import React from "react";

export default function SingleEntries(props) {
  console.log(props.weatherEntriesArray);
  return (
    <div>
      {props.weatherEntriesArray.map((entry, index) => {
        return (
          <div key={index} className="weather-entry">
            <p>{entry.dt_txt}</p>
            <p>{entry.weather[0].icon}</p>
            <p>{entry.weather[0].description}</p>
            <p>{entry.main.temp}</p>
          </div>
        );
      })}
    </div>
  );
}
