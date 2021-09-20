import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

import { Fade } from "react-awesome-reveal";

export default function Header() {
  return (
    <div className="header__container">
      <div className="header__logo__container">
        <Fade triggerOnce={true} duration={3000} direction={"left"}>
          <h1 className="header__logo-title">Robert Balonek</h1>
          <h3 className="header__logo-fach">BARITONE</h3>
        </Fade>
      </div>
      <div className="navBar__holder">
        <Fade triggerOnce={true} delay={2000}>
          <NavBar />
        </Fade>
      </div>
    </div>
  );
}
