import React from "react";
import "./About.css";

import { Helmet } from "react-helmet";

export default function About() {
  return (
    <div className="about__container">
    <Helmet>
    <title>About Robert Balonek - Bay Area Baritone</title>
    <meta name="description" content="Learn more about Robert Balonek, a Bay Area Baritone specializing in Verdi Baritone roles, Rigoletto, Iago, Scarpia" />
        <meta name="keywords" content="Robert Balonek, Bay Area Baritone, Verdi Baritone, Baritone, Opera, Classical Singer, Figaro, Oratorio, Scarpia, Iago, Rigoletto" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Robert Balonek" />
        <meta name="publisher" content="Robert Balonek " />
        <link rel="canonical" href="https://www.robertbalonek.com/about" />
  </Helmet>
      <div className="about__split">
        <div className="about__copy">
          <h1>What about Bob?</h1>
          <br />
          <p>
          Praised by the NY Times as having a “Commanding, steely baritone and a direct, crystal-clear delivery” and by the Winston-Salem journal, “Balonek, who might well be the most acrobatic opera singer I have ever seen. His antics are dazzling, and his voice is, too.”
          </p>
          <p style={{ color: "red" }}>
          Robert is extremely versatile in his acting, dancing, and singing. He has performed everything from bass-baritone Oratorio such as the Creation Mass (Haydn), Saul (Handel), Carmina Burana (Orff), to lyric baritone roles such as Silvio (Pagliacci) and Figaro (Il Barbiere di Siviglia) to Verdi’s Rigoletto, Ford (Falstaff) and Scarpia (Tosca) throughout the US.
            
          </p>
          <p>
          This season, he is the title role in Opera San Jose’s first Sunday Matinee of Rigoletto, Father Capulet in Opera San Jose’s Romeo Et Juliette, and also as Figaro in Piedmont Opera’s Le Nozze di Figaro, the Count in Modesto Opera's Le Nozze di Figaro, Marcello in Opera on the James' Boheme, Tonio in Auburn symphony's Pagliacci, and Iago in West Bay Opera's Otello. 
          </p>
          <p style={{ color: "red" }}>
          Recent performances include the title roles in Rigoletto (Opera San Jose / BOONJ), The Flying Dutchman ( West Bay Opera ) Britten’s Owen Wingrave (LOTNY),Barber of Seville ( OOTJ,BMO, Mendocino Music Fest), and Gianni Schicchi ( Purchase PAC ).

          </p>

          <p>
          He has also performed with Opera Modesto ( Marcello, La Boheme ) ,Opera San Jose ( Angelotti, Tosca & Father Capulet, Romeo Et Juliette),  American Classical Orchestra (Charon in Handel’s Alceste & Blondel in Handel’s Richard Core de Lion ), SDSO (Max / Captain, Candide), NYCO, Piedmont Opera, & SDSO (Schaunard, La Boheme), NYOC (Guglielmo, Cosi fan Tutte) NYVP ( Silvio, Pagliacci) Utopia Opera (Ford, Falstaff).

          Concert work includes Canterbury Choral Society: Saul (Handel), Historicus in Oratorio di San Francesco  (Ariani), and Soloist in Sancta Civitas & Dona Nobis Pacem (Vaughn Williams). Queens Symphony: Narrator in & Haydn's Creation Mass and soloist in Handel’s Messiah
          </p>
          <p style={{ color: "white" }}>
        Robert is currently performing locally in the Bay Area currently residing in Santa Rosa, California. He often sings in Opera Modesto, Opera San Jose, Lake Tahoe, Sacramento, and the surrounding Bay Area. 
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
      <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.albanyrecords.com/mm5/merchant.mvc?Screen=PROD&Product_Code=TROY1106-07&Store_Code=AR&search=balonek&offset=&filter_cat=2&PowerSearch_Begin_Only=&sort=&range_low=&range_high="
            >
              <span style={{ color: "red" }}> Albany Records: Lee Hoiby's Tempest </span>
            </a>
            <br />
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.albanyrecords.com/mm5/merchant.mvc?Screen=PROD&Product_Code=TROY1306&Store_Code=AR&search=balonek&offset=&filter_cat=2&PowerSearch_Begin_Only=&sort=&range_low=&range_high="
            >
              <span style={{ color: "red" }}>Albany Records: Raphael Lucas' Confession</span>
      </a>
      
    </div>
  );
}
