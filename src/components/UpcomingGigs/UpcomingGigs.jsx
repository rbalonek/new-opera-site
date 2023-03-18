import React from "react";
import "./UpcomingGigs.css";
import WestBay from "../images/Logos/WBO.webp"
 
export default function UpcomingGigs() {
  const goToCount = () => {
    window.open("https://secure.operasj.org/overview/tosca");
  };
  const goToEdgar = () => {
     window.open("https://www.wbopera.org/tickets");
  };
  const goToBethoven = () => {
    window.open("https://www.auburnsymphony.com/concerts/mothers-day-season-finale-2023-ode-to-joy/");
  };

  return (
    <div className="upcoming__container">
      <h1>UPCOMING</h1>
    
      <div className="twentyTwo-shows">
        <div
          onClick={goToCount}
          className="upcoming___show-container split__2022"
        >
          <img
            alt="sanJoseOpera"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1659296557/robertbalonek.com/Logos/Screen_Shot_2022-07-31_at_12.41.41_PM_v5dhbl.png"
          />
          <p>
            OPERA: <span className="bold">Tosca</span>
          </p>
          <p>
            ROLE: <span className="bold">Angelotti (Scarpia Cover)</span>
          </p>
          <p>
            DATE: <span className="bold">April 15-30th 2023</span>
          </p>
        </div>

        <div
          onClick={goToEdgar}
          className="upcoming___show-container split__2022"
        >
          <img
            alt="West Bay Opera"
            src={WestBay}
          />
          <p>
            OPERA: <span className="bold">Der Fliegende Holländer</span>
          </p>
          <p>
            ROLE: <span className="bold">Dutchman</span>
          </p>
          <p>
            DATE: <span className="bold">May 26- June 4th 2023</span>
          </p>
        </div>

        <div
          onClick={goToBethoven}
          className="upcoming___show-container split__2022"
        >
          <img
            alt="beethoven"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1659297756/robertbalonek.com/Logos/Screen_Shot_2022-07-31_at_1.01.59_PM_tz3qia.png"
          />
          <p>
            OPERA: <span className="bold">Beethoven 9th</span>
          </p>
          <p>
            ROLE: <span className="bold">Soloist</span>
          </p>
          <p>
            DATE: <span className="bold">May 14 2023</span>
          </p>
        </div>
        
      </div>
    </div>
  );
}
