import React from "react";
import "./Carousel.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselHome(props) {
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
        props.Images.map((image) => (
          <div
          // style={{ height: "500px" }}
          >
            <img
              className="carousel__image"
              style={{
                // height: "500px",
                width: "auto",
              }}
              alt={image}
              src={image}
            />
          </div>
        ))}
    </Carousel>
  );
}
