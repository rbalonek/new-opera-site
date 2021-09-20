import React, { useState } from "react";
import "./NavBar.css";
import { useHistory } from "react-router-dom";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

export default function NavBar() {
  const [toggle, setToggle] = useState(false);
  let history = useHistory();
  const handleClickToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div className="hamburger__menu">
        <HamburgerMenu handleClickToggle={handleClickToggle} />
      </div>
      {toggle && (
        <div className="hamburger__menu__open">
          <p
            onClick={() => {
              history.push("/");
              // setToggle(!toggle);
            }}
          >
            Home
          </p>
          <p
            onClick={() => {
              history.push("/about");
              // setToggle(!toggle);
            }}
          >
            About
          </p>
          <p
            onClick={() => {
              history.push("/engagements");
              // setToggle(!toggle);
            }}
          >
            Engagements
          </p>
          <p
            onClick={() => {
              history.push("/media");
              // setToggle(!toggle);
            }}
          >
            Media
          </p>
          <p
            onClick={() => {
              history.push("/gallery");
              // setToggle(!toggle);
            }}
          >
            Gallery
          </p>
          <p
            onClick={() => {
              history.push("/contact");
              // setToggle(!toggle);
            }}
          >
            Contact
          </p>
        </div>
      )}

      <div className="nav__container">
        <p onClick={() => history.push("/")}>Home</p>
        <p onClick={() => history.push("/about")}>About</p>
        <p onClick={() => history.push("/engagements")}>Engagements</p>
        <p onClick={() => history.push("/media")}>Media</p>
        <p onClick={() => history.push("/gallery")}>Gallery</p>
        <p onClick={() => history.push("/contact")}>Contact</p>
      </div>
    </div>
  );
}
