import React from "react";
import "./GalleryCarousel.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function GalleryCarousel(props) {
  return (
    <div>
      <Carousel
        className="carousel"
        interval="5000"
        showStatus={false}
        infiniteLoop
        showThumbs={false}
        autoPlay
        showIndicators={false}
        // showArrows={true}
      >
        {props.Images &&
          props.Images.map((image, index) => (
            <div key={index + image}>
              <img
                id={index + 1 + "the"}
                key={index}
                className="carousel-gallery__image"
                style={
                  {
                    // height: "500px",
                    // width: "auto",
                  }
                }
                alt={image}
                src={image}
              />
            </div>
          ))}
      </Carousel>
    </div>
  );
}
