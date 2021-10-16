import React, { useState } from "react";
import "./EngagementCard.css";

import Modal from "react-modal";
import EngagementPopup from "../EngagementPopup/EngagementPopup";

export default function EngagementCard(props) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    props.Event(
      `${props.opera} ${props.company} click`,
      "Mire Info Clicked",
      "ENGAGEMENT_SECTION"
    );

    setIsOpen(true);
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  }

  function closeModal() {
    setIsOpen(false);
    window.onscroll = function () {};
  }
  return (
    <div className="engagement-card__container">
      <h1 className="enagement-card__role">{props.role}</h1>
      <h1 className="enagement-card__opera">{props.opera}</h1>
      <h2 className="enagement-card__composer">{props.composer}</h2>
      <img className="enagement-card__logo" alt={props.role} src={props.logo} />
      <p className="enagement-card__dates">{props.dates}</p>
      <p className="enagement-card__venue">{props.venue}</p>
      {props.tickets === "true" ? (
        <a
          onClick={() =>
            props.Event(
              `${props.opera} click`,
              "Tickets Clicked",
              "ENGAGEMENT_SECTION"
            )
          }
          href={props.ticketLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn primary">Tickets</button>
        </a>
      ) : (
        <>
          <button onClick={openModal} className="btn secondary">
            More Info
          </button>
        </>
      )}
      <h4>{props.company}</h4>

      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        className="Modal"
        contentLabel="Modal"
      >
        <div className="engagement__popup__holder">
          <EngagementPopup
            reviews={props.reviews}
            modalImages={props.modalImages}
            handleClick={closeModal}
            role={props.role}
            opera={props.opera}
            logo={props.logo}
          />
        </div>
      </Modal>
    </div>
  );
}
