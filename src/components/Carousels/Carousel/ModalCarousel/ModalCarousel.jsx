import React from "react";
import "./ModalCarousel.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ModalCarousel(props) {
  return (
    <Carousel
      className="carousel"
      interval="5000"
      showStatus={false}
      infiniteLoop
      showThumbs={false}
      autoPlay
      // showArrows={true}
    >
      {props.Images &&
        props.Images.map((image, index) => (
          <div>
            <img
              id={index + 1 + "the"}
              key={index}
              className="modal-carousel__image"
              style={{
                // height: "500px",
                width: "auto",
                maxWidth: "300px",
              }}
              alt={image}
              src={image}
            />
          </div>
        ))}
    </Carousel>
  );
}
