import React from "react";

export default function SingleEntries(props) {
  console.log(props.weatherEntriesArray);
  
  function handleClick(event) {
    console.log('id: ', event.target.id);
    props.getSelectedEntry(event.target.id);
  }
  
  return (
    props.weatherEntriesArray ? (
    <div>
      {props.weatherEntriesArray.map((entry, index) => {
        return (
          <div key={index} id={index} className="weather-entry" onClick={handleClick}>
            <p>{entry.dt_txt}</p>
            <p>{entry.weather[0].icon}</p>
            <p>{entry.weather[0].main}</p>
            <p>{entry.weather[0].description}</p>
            <p>{entry.main.temp}</p>
          </div>
        );
      })}
    </div>) : null
  );
}
