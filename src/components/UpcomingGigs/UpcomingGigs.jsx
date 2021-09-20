import React from "react";
import "./UpcomingGigs.css";
export default function UpcomingGigs() {
  return (
    <div className="upcoming__container">
      <h1>UPCOMING</h1>
      <h2 className="underline">2021</h2>

      <div className="upcoming___show-container">
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
      <h2>2022</h2>
      <div className="twentyTwo-shows">
        <div className="upcoming___show-container">
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
        <hr />
        <div className="upcoming___show-container">
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
      </div>
    </div>
  );
}
