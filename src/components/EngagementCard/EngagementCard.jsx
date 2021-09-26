import React, { useState } from "react";
import "./EngagementCard.css";

import Modal from "react-modal";
import EngagementPopup from "../EngagementPopup/EngagementPopup";

export default function EngagementCard(props) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
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
      <button onClick={openModal}>Tickets</button>
      <h4>{props.company}</h4>

      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        className="Modal"
        contentLabel="Modal"
      >
        <EngagementPopup
          reviews={props.reviews}
          modalImages={props.modalImages}
          handleClick={closeModal}
          role={props.role}
          opera={props.opera}
          logo={props.logo}
        />
      </Modal>
    </div>
  );
}
