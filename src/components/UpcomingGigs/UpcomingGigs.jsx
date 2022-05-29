import React from "react";
import "./UpcomingGigs.css";

export default function UpcomingGigs() {
  const goToBarber = () => {
   
    window.open("https://www.operaonthejames.org/shows");
  };
  const goToRig = () => {
   
    window.open("https://www.bohemeopera.org/main-stage");
  };
  const goToMarcello = () => {
   
    window.open("https://www.operamodesto.org/");
  };
  const goToErnesto = () => {
   
    window.open("https://nycopera.com/shows/finzi/");
  };

  return (
    <div className="upcoming__container">
      <h1>UPCOMING</h1>
      <h2 className="underline">2021</h2>

      <div onClick={goToBarber} className="upcoming___show-container">
        <img
          alt="ootj"
          src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1624389679/robertbalonek.com/Performances/OOTJ%20Figaro/OOTJ_l2gjb0.webp"
        />
        <p>
          OPERA: <span className="bold">Il Barbiere de Seviglia</span>
        </p>
        <p>
          ROLE: <span className="bold">Figaro</span>
        </p>
        <p>
          DATE: <span className="bold">Nov 12-14</span>
        </p>
      </div>
      <h2 className="underline">2022</h2>
      <div className="twentyTwo-shows">
        <div
          onClick={goToRig}
          className="upcoming___show-container split__2022"
        >
          <img
            alt="bohemeNJ"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145907/robertbalonek.com/Logos/p3789966395-11_g5a6um.jpg"
          />
          <p>
            OPERA: <span className="bold">Rigoletto</span>
          </p>
          <p>
            ROLE: <span className="bold">Rigoletto</span>
          </p>
          <p>
            DATE: <span className="bold">March 18-20</span>
          </p>
        </div>

        <div
          onClick={goToMarcello}
          className="upcoming___show-container split__2022"
        >
          <img
            alt="ootj"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1624394360/robertbalonek.com/Logos/OperaModesto_tggc0y.jpg"
          />
          <p>
            OPERA: <span className="bold">La Boheme</span>
          </p>
          <p>
            ROLE: <span className="bold">Marcello</span>
          </p>
          <p>
            DATE: <span className="bold">April 29- May 1st</span>
          </p>
        </div>
        <div
          onClick={goToErnesto}
          className="upcoming___show-container split__2022"
        >
          <img
            alt="NYCO"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601215498/robertbalonek.com/Logos/NYCOpera_szn6kj.png"
          />
          <p>
            OPERA: <span className="bold">Garden of Finzi-Continis</span>
          </p>
          <p>
            ROLE: <span className="bold">Ernesto</span>
          </p>
          <p>
            DATE: <span className="bold">Jan 19- 30th</span>
          </p>
        </div>
      </div>
    </div>
  );
}
