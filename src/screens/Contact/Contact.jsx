import React from "react";
import "./Contact.css";

export default function Contact(props) {
  return (
    <div className="contact__container">
      <div className="contact__split">
        <div className="contact__copy">
          <h2 className="Red ">CONTACT</h2>
          <h1>Peter Randsman</h1>
          <h3>Randsman Artists Management</h3>
          <h4>New York, NY 10036</h4>
          <br />
          <a
            onClick={() =>
              props.Event(
                "Randsman Phone",
                "Office Phone Called",
                "CONTACT_SECTION"
              )
            }
            style={{ color: "white", textDecoration: "none" }}
            href="tel:2122445874"
          >
            <p>Office: 212-244-5874</p>
          </a>
          <a
            onClick={() =>
              props.Event(
                "Randsman Phone",
                "CELL Phone Called",
                "CONTACT_SECTION"
              )
            }
            style={{ color: "white", textDecoration: "none" }}
            href="tel:9174946654"
          >
            <p>Cell: 917-494-6654</p>
          </a>
          <br />
          <a
            onClick={() =>
              props.Event("Randsman Email", "Email Clicked", "CONTACT_SECTION")
            }
            style={{ color: "white", textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:randsman@aol.com?"
          >
            <p>randsman@aol.com</p>
          </a>
          <a
            onClick={() =>
              props.Event("Randsman Website", "Clicked", "CONTACT_SECTION")
            }
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.randsman.com"
          >
            <p>http://www.randsman.com</p>
          </a>
          <br />
          <a
            onClick={() =>
              props.Event("Bob Email", "Clicked", "CONTACT_SECTION")
            }
            style={{ color: "white", textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:robertbalonek@gmail.com?"
          >
            <p>robertbalonek@gmail.com</p>
          </a>
          <a
            onClick={() =>
              props.Event("Bob Phone", "Clicked", "CONTACT_SECTION")
            }
            style={{ color: "white", textDecoration: "none" }}
            href="tel:5857212210"
          >
            <p>Cell: 585-721-2210</p>
          </a>
        </div>
        <div className="contact__image-holder">
          <img
            className="contact__image"
            alt="hs"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145825/robertbalonek.com/Headshots/3_tffta2.jpg"
          />
        </div>
      </div>
    </div>
  );
}
