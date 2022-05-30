import React from "react";
import "./Media.css";

export default function Media(props) {
  
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
            <AudioPlayer
              
              title="Haydn Creation"
              role="Soloist"
              URL={Haydn}
              img="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145841/robertbalonek.com/Headshots/Too_Much-_ay3b0k.jpg"
            />
            <h1>VOICE OVER</h1>
            <AudioPlayer
          
              title="Voice Over Reel"
              role="Voice Over"
              URL={VoiceOverOne}
              img="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145832/robertbalonek.com/Headshots/CoverPg_jfbfqm.jpg"
            />
            <AudioPlayer
              
              title="   Voice Over Reel Two"
              role="Voice Over"
              URL={VoiceOverTwo}
              img="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1632613515/robertbalonek.com/Headshots/hsFace_kbxsok.jpg"
            />
          </div>
        </div>

        <div className="video__section">

          <iframe
          className="media__video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qVYLPdaeP8c"
            title="Figaro Sampler"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen />
          
            <iframe
            className="media__video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/nPHHkh9TjHk"
              title="Pari Siamo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

              allowFullScreen />
             <iframe
              className="media__video"
              title="Cortigiani"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/TW-8fsal8Rk"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
         
          <iframe
            // onClick={() => console.log("Clicked")}
            className="media__video"
            title="shaunard"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/SovJfO1mugQ"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          
          <iframe
            className="media__video"
            title="shaunard"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Z1QB8nAEOBM"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <iframe
            className="media__video"
            title="Blondel"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/l4a5MMiztuw"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          </div>  
      </div>
    </div>
  );
}
