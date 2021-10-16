import React from "react";
import "./Carousel.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselHome(props) {
  // var myStyle = document.getElementById("1the");
  // console.log("myStyle", myStyle);

  // if (myStyle < 0) {
  //   console.log("Div is hidden!!");
  // }

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
          <div key={index + image}>
            <img
              id={index + 1 + "the"}
              key={index}
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
