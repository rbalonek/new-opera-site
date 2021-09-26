import React from "react";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import "./Media.css";

import Saul from "../../components/Audio/Saul Sampler Shorter copy.mp3";
import CarminaBurana from "../../components/Audio/Carmina Burana Sampler.mp3";
import Shaunard from "../../components/Audio/Shaunard.mp3";
import VoiceOverOne from "../../components/Audio/Reel - 5_25_20, 5.08 PM.mp3";
import VoiceOverTwo from "../../components/Audio/60 sec reel2 2nd cut.mp3";

export default function Media() {
  return (
    <div className="media__container">
      <div className="audio-video__split">
        <div className="audio__section">
          <h1>AUDIO</h1>
          <div className="audio__players__container">
            <AudioPlayer
              title="Handel Saul excerpts"
              role="Saul"
              URL={Saul}
              img="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1632620849/robertbalonek.com/BobLiveShots/Ottone_jrpexs.png"
            />
            <AudioPlayer
              title="Carmina Burana excerpts"
              role="Soloist"
              URL={CarminaBurana}
              img="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1632623733/robertbalonek.com/BobLiveShots/IMG_D0052F784D25-1_djgna7.jpg"
            />
            <AudioPlayer
              title="La Boheme"
              role="Shaunard"
              URL={Shaunard}
              img="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601221847/robertbalonek.com/BobLiveShots/IMG_2592.JPG_pqvtap.jpg"
            />
            <h1>VOICE OVER</h1>
            <AudioPlayer
              title="Voice Over Reel"
              role="Voice Over"
              URL={VoiceOverOne}
              img="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145832/robertbalonek.com/Headshots/CoverPg_jfbfqm.jpg"
            />
            <AudioPlayer
              title="Voice Over Reel Two"
              role="Voice Over"
              URL={VoiceOverTwo}
              img="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1632613515/robertbalonek.com/Headshots/hsFace_kbxsok.jpg"
            />
          </div>
        </div>
        <div className="video__section">
          <h1>VIDEO</h1>
          <iframe
            className="media__video"
            title="shaunard"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/SovJfO1mugQ"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <iframe
            className="media__video"
            title="Largo"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0c67QhA8B6o"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  );
}

// <video
//         controls
//         src="https://bit.ly/3nWh78w"
//         poster="posterImage.png"
//       ></video>

// https://www.dropbox.com/s/bbrriqyh5pxs8m2/Saul%20Sampler%20Shorter%20copy.mp3?dl=0
