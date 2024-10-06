import React from "react";
import "./Media.css";
import { Helmet } from "react-helmet";

export default function Media(props) {
  return (
    <div className="media__container">
    <Helmet>
    <title>Media - Robert Balonek - Bay Area Baritone</title>
    <meta name="description" content="Learn more about Robert Balonek, a Bay Area Baritone specializing in Verdi Baritone roles, Rigoletto, Iago, Scarpia" />
        <meta name="keywords" content="Robert Balonek, Bay Area Baritone, Verdi Baritone, Baritone, Opera, Classical Singer, Figaro, Oratorio, Scarpia, Iago, Rigoletto" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Robert Balonek" />
        <meta name="publisher" content="Robert Balonek " />
        <link rel="canonical" href="https://www.robertbalonek.com/media" />
  </Helmet>
      
        <div className="video__section">
       
        <iframe
        className="media__video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ZPc-H7vKVC0?enablejsapi=1" 
        title="Scarpia - Te Deum"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen />
     
      
        
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