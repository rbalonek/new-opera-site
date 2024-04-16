import React from "react";
import "./UpcomingGigs.css";
// import WestBay from "../images/Logos/WBO.webp"
import Nozze from "../images/other/Nozze.webp"
 
export default function UpcomingGigs() {
  const gotToFirstEvent = () => {
    window.open("https://www.operamodesto.org/");
  };
  const goToSecondEvent = () => {
     window.open("https://www.operaonthejames.org/");
  };
  const goToTosca = () => {
    window.open("https://tickets.galloarts.org/9518/9540");
 };


  return (
    <div className="upcoming__container">
      <h1>UPCOMING</h1>
      <div onClick={goToTosca} className="long-banner-div">
        <img style={{ width: "15%", height: 'auto' }} src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1624394360/robertbalonek.com/Logos/OperaModesto_tggc0y.jpg" alt="Figaro-banner" />
        <div style={{display:'flex', flexDirection:'column'}}>
        <p>
        OPERA: <span className="bold">Tosca</span>
        </p>
        <p>
        ROLE: <span className="bold">Scarpia</span>
        </p>
        <p>
        DATE: <span className="bold">April 28 2024</span>
          </p>
          <p>
        Company: <span className="bold">Opera Modesto</span>
        </p>
        </div>
      </div>
      <div className="twentyTwo-shows">
        <div
          onClick={gotToFirstEvent}
          className="upcoming___show-container split__2022"
        >
          <img
            alt="First Upcoming Event"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1624394360/robertbalonek.com/Logos/OperaModesto_tggc0y.jpg"
          />
          <p>
            OPERA: <span className="bold">Le Nozze di Figaro</span>
          </p>
          <p>
            ROLE: <span className="bold">Count Almaviva</span>
          </p>
          <p>
            DATE: <span className="bold">September 2024</span>
          </p>
        </div>

        <div
        onClick={goToSecondEvent}
        className="upcoming___show-container split__2022"
      >
        <img
          alt="First Upcoming Event"
          src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1624389679/robertbalonek.com/Performances/OOTJ%20Figaro/OOTJ_l2gjb0.webp"
        />
        <p>
          OPERA: <span className="bold">La Boheme</span>
        </p>
        <p>
          ROLE: <span className="bold">Marcello</span>
        </p>
        <p>
          DATE: <span className="bold">November 2024</span>
        </p>
      </div>

        
        
      </div>
    </div>
  );
}
