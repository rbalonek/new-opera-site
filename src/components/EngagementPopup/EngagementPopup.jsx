import React from "react";
import "./EngagementPopup.css";

import Carousel from "../../components/Carousels/Carousel/ModalCarousel/ModalCarousel";

export default function EngagementPopup(props) {
  return (
    <div className="engagement-popup__container">
      <h1>{props.role}</h1>
      <h3>{props.opera}</h3>
      <div className="engagement-popup__carousel">
        <Carousel className="engagement-popup_" Images={props.modalImages} />
      </div>
      <p>{props.reviews[0]}</p>
    </div>
  );
}
