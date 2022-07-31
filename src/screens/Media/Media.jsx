import React from "react";
import "./Media.css";

export default function Media(props) {
  return (
    <div className="media__container">
      
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
            src="https://www.youtube.com/embed/xGY1YaYIpJs"
            title="Marcello Sampler"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen />
        <iframe
            className="media__video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/7g02G42qkoQ"
              title="Pari Siamo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />
         
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
  );
}