import React from "react";
import "./HamburgerMenu.css";

export default function HamburgerMenu(props) {
  return (
    <div>
      <label for="check">
        <input onClick={props.handleClickToggle} type="checkbox" id="check" />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
  );
}
