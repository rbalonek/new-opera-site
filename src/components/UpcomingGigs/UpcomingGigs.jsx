import React from "react";
import "./UpcomingGigs.css";
// import WestBay from "../images/Logos/WBO.webp"
// import Nozze from "../images/other/Nozze.webp"
 
export default function UpcomingGigs() {
  const gotToFirstEvent = () => {
    window.open("https://www.operaonthejames.org/");
  };
  const goToSecondEvent = () => {
     window.open("https://www.auburnsymphony.com/");
  };
  const goToMainEvent = () => {
    window.open("https://www.operamodesto.org/");
 };


  return (
    <div className="upcoming__container">
      <h1>UPCOMING</h1>
      <div onClick={goToMainEvent} className="long-banner-div">
        <img style={{ width: "15%", height: 'auto' }} src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1624394360/robertbalonek.com/Logos/OperaModesto_tggc0y.jpg" alt="Figaro-banner" />
        <div style={{display:'flex', flexDirection:'column'}}>
        <p>
        OPERA: <span className="bold">Le Nozze di Figaro</span>
        </p>
        <p>
        ROLE: <span className="bold">Count Almaviva</span>
        </p>
        <p>
        DATE: <span className="bold">April 28 2024</span>
          </p>
          <p>
        Company: <span className="bold">September 2024</span>
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

        <div
        onClick={goToSecondEvent}
        className="upcoming___show-container split__2022"
      >
        <img
          alt="First Upcoming Event"
          src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1659297756/robertbalonek.com/Logos/Screen_Shot_2022-07-31_at_1.01.59_PM_tz3qia.png"
        />
        <p>
        OPERA: <span className="bold">Pagliacci</span>
      </p>
      <p>
        ROLE: <span className="bold">Tonio</span>
      </p>
      <p>
        DATE: <span className="bold">March 8th 6PM & March 9th 3PM 2025</span>
      </p>
      </div>

        
        
      </div>
    </div>
  );
}
