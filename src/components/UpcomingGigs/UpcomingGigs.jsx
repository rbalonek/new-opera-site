import React from "react";
import "./UpcomingGigs.css";
import WestBay from "../images/Logos/WBO.webp"
 
export default function UpcomingGigs() {
  const gotToFirstEvent = () => {
    window.open("https://www.operasj.org/23-24/");
  };
  // const goToSecondEvent = () => {
  //    window.open("https://www.wbopera.org/tickets");
  // };

//   <div
//   onClick={goToSecondEvent}
//   className="upcoming___show-container split__2022"
// >
//   <img
//     alt="Second Upcoming Event"
//     src={WestBay}
//   />
//   <p>
//     OPERA: <span className="bold">Der Fliegende Holländer</span>
//   </p>
//   <p>
//     ROLE: <span className="bold">Dutchman</span>
//   </p>
//   <p>
//     DATE: <span className="bold">May 26- June 4th 2023</span>
//   </p>
//   </div>
  
  const goToThirdEvent = () => {
    window.open("https://mendocinomusic.org/event/festival-orchestra-2-2023/");
  };

  return (
    <div className="upcoming__container">
      <h1>UPCOMING</h1>
    
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
            OPERA: <span className="bold">Roméo et Juliette</span>
          </p>
          <p>
            ROLE: <span className="bold">Count Capulet</span>
          </p>
          <p>
            DATE: <span className="bold">September 2023</span>
          </p>
        </div>

       

        <div
          onClick={goToThirdEvent}
          className="upcoming___show-container split__2022"
        >
          <img
            alt="Third Upcoming Event"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1685230486/MMF-Logo-black-gold_200x146_lqmktr.png"
          />
          <p>
            OPERA: <span className="bold">Barber Of Seville</span>
          </p>
          <p>
            ROLE: <span className="bold">Figaro</span>
          </p>
          <p>
            DATE: <span className="bold">July 21, 7:30 PM  2023</span>
          </p>
        </div>
        
      </div>
    </div>
  );
}
