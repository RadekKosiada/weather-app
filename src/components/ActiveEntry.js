import React from "react";

export default function ActiveEntry(props) {
  console.log(props.selectedEntry);
  const entry = props.selectedEntry;
  return (
    entry ? (
      <div>
      <p>{entry.dt_txt}</p>
      <p>{entry.weather[0].icon}</p>
      <p>{entry.weather[0].main}</p>
      <p>{entry.weather[0].description}</p>
      <p>{entry.main.temp}</p>
    </div>
    ) : null
    
  );
}
