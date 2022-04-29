import React from "react";
import "./EngagementPopup.css";

import Carousel from "../../components/Carousels/Carousel/ModalCarousel/ModalCarousel";

export default function EngagementPopup(props) {
  // console.log("reviews", props.reviews);

  return (
    <div className="engagement-popup__container">
      <div>
      <h1 className="engagement-popup__role">{props.role}</h1>
      <h3 className="engagement-popup__opera">{props.opera}</h3>
      </div>
      <div className="engagement-popup__carousel">
        <Carousel className="engagement-popup_" Images={props.modalImages} />
      </div>
      {props.reviews && (
        <div className="review-section">
          {props.reviews.map((review) => (
            <div>
              <p className="review-text">"{review.Quote}"</p>
              <p className="review-text-from">- {review.From}</p>
            </div>
          ))}
        </div>
      )}
      <button className="btn success modal_btn" onClick={props.handleClick}>
        Close
      </button>
    </div>
  );
}
