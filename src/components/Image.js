import React from 'react';

export default function Image(props) {
  return (
    <div className="image-container">
      <img src={props.src} alt={props.alt} />
    </div>
  )
}
