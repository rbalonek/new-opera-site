import React from "react";
import "./NavBar.css";
import { useHistory } from "react-router-dom";

export default function NavBar() {
  let history = useHistory();
  return (
    <div className="nav__container">
      <p onClick={() => history.push("/")}>Home</p>
      <p onClick={() => history.push("/about")}>About</p>
      <p onClick={() => history.push("/engagements")}>Engagements</p>
      <p onClick={() => history.push("/media")}>Media</p>
      <p onClick={() => history.push("/gallery")}>Gallery</p>
      <p onClick={() => history.push("/contact")}>Contact</p>
    </div>
  );
}
