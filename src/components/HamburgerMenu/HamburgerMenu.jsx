import React from "react";
import "./HamburgerMenu.css";

export default function HamburgerMenu(props) {
  return (
    <div>
      <h1 className="hamburger-icon" onClick={props.handleClickToggle}>
        =
      </h1>
    </div>
  );
}
