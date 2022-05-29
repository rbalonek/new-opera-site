import React from "react";
import "./AudioPlayer.css";

import ReactAudioPlayer from "react-audio-player";

export default function AudioPlayer(props) {
  return (
    <div className="audio-player__container">
      <div className="audio-player__info">
        <h2 className="audio-player__title">{props.title}</h2>
        <p className="audio-player__role">Role: {props.role}</p>
        <div className="audio-player__bottom">
          <img
            className="audio-player__img"
            src={props.img}
            alt={props.title}
          />
          <div className="audio-player__controls">
            <ReactAudioPlayer
             className="player"
              src={props.URL}
              controls
            />
          </div>
        </div>
      </div>
    </div>
  );
}


