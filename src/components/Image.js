import React from 'react'

export default function Image(props) {
  return (
    <div>
      <img src={props.src} alt={props.alt} />
    </div>
  )
}
