import React, { useEffect } from "react";
import useGaTracker from "../../useGaTracker";
import "./About.css";
import ReactPixel from "react-facebook-pixel";

export default function About() {
  useGaTracker();

  useEffect(() => {
    ReactPixel.track("ViewContent", "data");
  }, []);
  return (
    <div className="about__container">
      <div className="about__split">
        <div className="about__copy">
          <h1>What about Bob?</h1>
          <br />
          <p>
            Hailing from Rochester NY, Robert always had a love for music. While
            learning music theory, jazz and musical theater in high school, he
            knew that his life would be surrounded by music.
          </p>
          <p style={{ color: "red" }}>
            Robert went to SUNY Purchase College in Westchester where he started
            training with his first teacher, Jacque Trussel.﻿ During this time
            he performed The title roles in Le Nozze di Figaro, and Gianni
            Schicchi. He also performed Ottone in Poppea, both Ferdinand and
            Prospero in the NY Premiere of Lee Hoiby's The Tempest, as well as
            the world Premiere of Raphaël Lucas' Confession. Before leaving
            Purchase, he recorded both The Tempest and Confession with Albany
            Records. The recordings can be found here:
            <br />
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.albanyrecords.com/mm5/merchant.mvc?Screen=PROD&Product_Code=TROY1106-07&Store_Code=AR&search=balonek&offset=&filter_cat=2&PowerSearch_Begin_Only=&sort=&range_low=&range_high="
            >
              <span style={{ color: "red" }}> Tempest </span>
            </a>
            <br />
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.albanyrecords.com/mm5/merchant.mvc?Screen=PROD&Product_Code=TROY1306&Store_Code=AR&search=balonek&offset=&filter_cat=2&PowerSearch_Begin_Only=&sort=&range_low=&range_high="
            >
              <span style={{ color: "red" }}>Confession</span>
            </a>
          </p>
          <p>
            After Purchase, Robert moved to Manhattan where he received a
            professional studies diploma from Mannes School of Music under the
            tutelage of Bonnie Hammilton. During his two years there, Robert
            performed Guglielmo in Cosi Fan Tutte as well as ​Ford in Falstaff.
            He also performed with the Mannes Baroque Ensemble as the bass
            soloist for the Bach's St. Matthew Passion as well as the Fauré
            Requiem soloist for the Westchester Choral Society. ﻿
          </p>
          <p style={{ color: "red" }}>
            After College, Robert has been in collaboration with many new
            composers such as Zachary Johnson (Boston Tea Party Opera) Gerald
            Cohen (Steal A Pencil For Me), Mohammed Fairouz (Furia), and Stefnia
            DeKenessey (Bonfires of the Vanity).
          </p>

          <p>
            Due to Covid19, Robert's Carnegie Hall debut of the Five Mystycal
            Songs (Vaughan Williams) was cancelled. He is looking forward to
            completing his 2021-2022 season when the dates are solidified.
          </p>
        </div>
        <div className="about__image-holder">
          <img
            className="about__image"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145850/robertbalonek.com/Headshots/IMG_9758_copy_bugay5.jpg"
            alt="headshot-about"
          />
        </div>
      </div>
    </div>
  );
}
