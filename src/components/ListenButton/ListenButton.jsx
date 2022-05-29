import React from 'react'
import "./ListenButton.css"

export default function ListenButton(props) {
  return (
    <div onClick={props.toggleClick} className='listen-button__container'>
      <h4>Lisen</h4>
    </div>
  )
}
