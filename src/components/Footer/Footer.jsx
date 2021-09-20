import React from "react";
import "./Footer.css";

import Facebook from "../../components/images/socials/Facebook-icon.webp";
import Insta from "../../components/images/socials/instagram-icon.png";
// import Twitter from "../../components/images/socials/twitter-icon.webp";

export default function Footer() {
  return (
    <div className="footer__container">
      <img className="footer__social-icons" src={Facebook} alt="facebook" />
      <p className="footer_copywrite">© 2013 by Robert Balonek</p>
      <img className="footer__social-icons" src={Insta} alt="facebook" />
    </div>
  );
}
