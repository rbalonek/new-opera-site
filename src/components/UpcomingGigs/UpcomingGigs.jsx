import React from "react";
import "./UpcomingGigs.css";

export default function UpcomingGigs() {
  const goToCount = () => {
    window.open("https://www.operasj.org/the-marriage-of-figaro-ticketpage/");
  };
  const goToEdgar = () => {
     window.open("https://www.operamodesto.org/2021-2022-season-2/");
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
            OPERA: <span className="bold">Le Nozze di Figaro</span>
          </p>
          <p>
            ROLE: <span className="bold">Count (Cover)</span>
          </p>
          <p>
            DATE: <span className="bold">September 10-25th 2022</span>
          </p>
        </div>

        <div
          onClick={goToEdgar}
          className="upcoming___show-container split__2022"
        >
          <img
            alt="ootj"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1624394360/robertbalonek.com/Logos/OperaModesto_tggc0y.jpg"
          />
          <p>
            OPERA: <span className="bold">The Tell Tale Heart</span>
          </p>
          <p>
            ROLE: <span className="bold">Edgar</span>
          </p>
          <p>
            DATE: <span className="bold">January 14-20 2023</span>
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
