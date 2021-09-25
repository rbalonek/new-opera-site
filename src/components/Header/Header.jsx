import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

import { Fade } from "react-awesome-reveal";

export default function Header() {
  function myFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      document.getElementById("header__container").className =
        "header__container-smaller";
      document.getElementById("name").className = "header__logo-title-smaller";
      document.getElementById("fach").className = "header__logo-fach-smaller ";
      document.getElementById("nav-holder").className =
        "navBar__holder-smaller";
    } else {
      document.getElementById("header__container").className =
        "header__container";
      document.getElementById("name").className = "header__logo-title";
      document.getElementById("fach").className = "header__logo-fach ";
      document.getElementById("nav-holder").className = "navBar__holder";
    }
  }
  window.onscroll = function () {
    myFunction();
  };

  return (
    <div id="header__container" className="header__container">
      <div className="header__logo__container">
        <Fade triggerOnce={true} duration={3000} direction={"left"}>
          <h1 id="name" className="header__logo-title">
            Robert Balonek
          </h1>
          <h3 id="fach" className="header__logo-fach">
            BARITONE
          </h3>
        </Fade>
      </div>
      <div id="nav-holder" className="navBar__holder">
        <Fade triggerOnce={true} delay={2000}>
          <NavBar />
        </Fade>
      </div>
    </div>
  );
}
