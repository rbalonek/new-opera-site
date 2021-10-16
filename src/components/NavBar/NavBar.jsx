import React, { useState } from "react";
import "./NavBar.css";
import { useHistory } from "react-router-dom";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

export default function NavBar(props) {
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
          <p className="hamaburger-menu__x" onClick={handleClickToggle}>
            X
          </p>
          <div className="hamburger-menu__links">
            <p
              onClick={() => {
                history.push("/");
                window.scroll(0, 0);
                setToggle(!toggle);
              }}
            >
              Home
            </p>
            <p
              onClick={() => {
                history.push("/about");
                window.scroll(0, 0);
                setToggle(!toggle);
              }}
            >
              About
            </p>
            <p
              onClick={() => {
                history.push("/engagements");
                window.scroll(0, 0);
                setToggle(!toggle);
              }}
            >
              Engagements
            </p>
            <p
              onClick={() => {
                history.push("/media");
                window.scroll(0, 0);
                setToggle(!toggle);
              }}
            >
              Media
            </p>
            <p
              onClick={() => {
                history.push("/gallery");
                window.scroll(0, 0);
                setToggle(!toggle);
              }}
            >
              Gallery
            </p>
            <p
              onClick={() => {
                history.push("/contact");
                window.scroll(0, 0);
                setToggle(!toggle);
              }}
            >
              Contact
            </p>
          </div>
        </div>
      )}

      <div className="nav__container">
        <p
          onClick={() => {
            props.Event(`Nav click`, "Home Clicked", "NAVBAR_SECTION");
            window.scroll(0, 0);
            history.push("/");
          }}
        >
          Home
        </p>
        <p
          onClick={() => {
            props.Event(`Nav click`, "About Clicked", "NAVBAR_SECTION");
            window.scroll(0, 0);
            history.push("/about");
          }}
        >
          About
        </p>
        <p
          onClick={() => {
            props.Event(`Nav click`, "Engagements Clicked", "NAVBAR_SECTION");
            window.scroll(0, 0);
            history.push("/engagements");
          }}
        >
          Engagements
        </p>
        <p
          onClick={() => {
            props.Event(`Nav click`, "Media Clicked", "NAVBAR_SECTION");
            window.scroll(0, 0);
            history.push("/media");
          }}
        >
          Media
        </p>
        <p
          onClick={() => {
            props.Event(`Nav click`, "Gallery Clicked", "NAVBAR_SECTION");
            window.scroll(0, 0);
            history.push("/gallery");
          }}
        >
          Gallery
        </p>
        <p
          onClick={() => {
            props.Event(`Nav click`, "Contact Clicked", "NAVBAR_SECTION");
            window.scroll(0, 0);
            history.push("/contact");
          }}
        >
          Contact
        </p>
      </div>
    </div>
  );
}

// onClick={() =>
//   props.Event(
//     `${props.title} click`,
//     "Github Clicked",
//     "PROJECT_SECTION"
//   )
// }
