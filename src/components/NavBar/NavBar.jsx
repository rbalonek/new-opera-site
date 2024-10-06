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
                history.push("/video");
                window.scroll(0, 0);
                setToggle(!toggle);
              }}
            >
              Video
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
                history.push("/books");
                window.scroll(0, 0);
                setToggle(!toggle);
              }}
            >
              Book
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
            
            window.scroll(0, 0);
            history.push("/");
          }}
        >
          Home
        </p>
        <p
          onClick={() => {
           
            window.scroll(0, 0);
            history.push("/about");
          }}
        >
          About
        </p>
        <p
          onClick={() => {
            
            window.scroll(0, 0);
            history.push("/engagements");
          }}
        >
          Engagements
        </p>
        <p
          onClick={() => {
            window.scroll(0, 0);
            history.push("/video");
          }}
        >
          Video
        </p>
        <p
          onClick={() => {
            window.scroll(0, 0);
            history.push("/gallery");
          }}
        >
          Gallery
        </p>
        <p
              onClick={() => {
                history.push("/books");
                window.scroll(0, 0);
              }}
            >
              Book
            </p>
        <p
          onClick={() => {
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

