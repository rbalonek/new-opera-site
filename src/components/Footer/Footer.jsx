import React from "react";
import "./Footer.css";

import Facebook from "../../components/images/socials/Facebook-icon.webp";
import Insta from "../../components/images/socials/instagram-icon.png";
// import Twitter from "../../components/images/socials/twitter-icon.webp";

export default function Footer() {
  return (
    <div className="footer__container">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/RBalonek/"
      >
        <img className="footer__social-icons" src={Facebook} alt="facebook" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.robertbalonek.dev"
      >
        <p className="footer_copywrite">© 2013 by Robert Balonek</p>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://instagram.com/bobbybaritono"
      >
        <img className="footer__social-icons" src={Insta} alt="insta" />
      </a>
    </div>
  );
}
