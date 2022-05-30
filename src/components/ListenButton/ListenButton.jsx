import React from 'react'
import "./ListenButton.css"


export default function ListenButton(props) {

  const handleClick = () => {
    props.toggleClick()
  }

  return (
    <div onClick={handleClick} className='listen-button__container'>
      <p className='button-text'>{props.buttonText}</p>
      <img style={{height:'50px'}} src={props.button} alt="play" />
    </div>
  )
}
