import React, { useEffect } from "react";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import "./Media.css";
import ReactPixel from "react-facebook-pixel";

import Saul from "../../components/Audio/Saul Sampler Shorter copy.mp3";
import CarminaBurana from "../../components/Audio/Carmina Burana Sampler.mp3";
import Shaunard from "../../components/Audio/Shaunard.mp3";
import Haydn from "../../components/Audio/Haydn Creation Sample.mp3";
import VoiceOverOne from "../../components/Audio/Reel - 5_25_20, 5.08 PM.mp3";
import VoiceOverTwo from "../../components/Audio/60 sec reel2 2nd cut.mp3";

export default function Media(props) {
  useEffect(() => {
    ReactPixel.track("ViewContent", "data");
  }, []);
  return (
    <div className="media__container">
      <div className="audio-video__split">
        <div className="audio__section">
          <h1>AUDIO</h1>
          <div className="audio__players__container">
            <AudioPlayer
              Event={props.Event}
              title="Handel Saul excerpts"
              role="Saul"
              URL={Saul}
              img="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1632620849/robertbalonek.com/BobLiveShots/Ottone_jrpexs.png"
            />
            <AudioPlayer
              Event={props.Event}
              title="Carmina Burana excerpts"
              role="Soloist"
              URL={CarminaBurana}
              img="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1632623733/robertbalonek.com/BobLiveShots/IMG_D0052F784D25-1_djgna7.jpg"
            />
            <AudioPlayer
              Event={props.Event}
              title="La Boheme"
              role="Shaunard"
              URL={Shaunard}
              img="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601221847/robertbalonek.com/BobLiveShots/IMG_2592.JPG_pqvtap.jpg"
            />
            <AudioPlayer
              Event={props.Event}
              title="Haydn Creation"
              role="Soloist"
              URL={Haydn}
              img="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145841/robertbalonek.com/Headshots/Too_Much-_ay3b0k.jpg"
            />
            <h1>VOICE OVER</h1>
            <AudioPlayer
              Event={props.Event}
              title="Voice Over Reel"
              role="Voice Over"
              URL={VoiceOverOne}
              img="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145832/robertbalonek.com/Headshots/CoverPg_jfbfqm.jpg"
            />
            <AudioPlayer
              Event={props.Event}
              title="   Voice Over Reel Two"
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
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qVYLPdaeP8c"
            title="Figaro Sampler"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen />
          
            <iframe
            className="media__video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/nPHHkh9TjHk"
              title="Pari Siamo"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen />
          
              <iframe
              className="media__video"
              title="Cortigiani"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/TW-8fsal8Rk"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
         
          <iframe
            // onClick={() => console.log("Clicked")}
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
            title="shaunard"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Z1QB8nAEOBM"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <iframe
            className="media__video"
            title="Blondel"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/l4a5MMiztuw"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  );
}
