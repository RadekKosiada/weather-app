import React from "react";
import iconSun from "../icons/weather-sun.svg";
import iconCloudy from "../icons/weather-cloud.svg";

export default function Image(props) {
  console.log(props);
  return (
    <div>
      <img
        src={props.src}
        alt={props.alt}
      />
    </div>
  );
}
