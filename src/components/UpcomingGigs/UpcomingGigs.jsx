import React from "react";
import "./UpcomingGigs.css";
// import WestBay from "../images/Logos/WBO.webp"
import Nozze from "../images/other/Nozze.webp"
 
export default function UpcomingGigs() {
  const gotToFirstEvent = () => {
    window.open("https://www.operasj.org/23-24/");
  };
  const goToSecondEvent = () => {
     window.open("https://www.operamodesto.org/2021-2022-season-2/");
  };
  const goToFig = () => {
    window.open("https://www.piedmontopera.org/marriage-of-figaro?utm_campaign=from-bob-balonek");
 };


  return (
    <div className="upcoming__container">
      <h1>UPCOMING</h1>
      <div onClick={goToFig} className="long-banner-div">
        <img   style={{width:"30%", height:'auto'}} src={Nozze} alt="Figaro-banner" />
      </div>
      <div className="twentyTwo-shows">
        <div
          onClick={gotToFirstEvent}
          className="upcoming___show-container split__2022"
        >
          <img
            alt="First Upcoming Event"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1659296557/robertbalonek.com/Logos/Screen_Shot_2022-07-31_at_12.41.41_PM_v5dhbl.png"
          />
          <p>
            OPERA: <span className="bold">Rigoletto</span>
          </p>
          <p>
            ROLE: <span className="bold">Rigoletto</span>
          </p>
          <p>
            DATE: <span className="bold">* February 18, 2024 2:00PM</span>
          </p>
        </div>

        <div
        onClick={goToSecondEvent}
        className="upcoming___show-container split__2022"
      >
        <img
          alt="First Upcoming Event"
          src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1624394360/robertbalonek.com/Logos/OperaModesto_tggc0y.jpg"
        />
        <p>
          OPERA: <span className="bold">Tosca</span>
        </p>
        <p>
          ROLE: <span className="bold">Scarpia</span>
        </p>
        <p>
          DATE: <span className="bold">April 28 2024</span>
        </p>
      </div>

        
        
      </div>
    </div>
  );
}
