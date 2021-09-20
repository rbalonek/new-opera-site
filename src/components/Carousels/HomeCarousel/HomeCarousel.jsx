import React from "react";
import "./HomeCarousel.css";
import { Carousel } from "react-responsive-carousel";
// var Carousel = require("react-responsive-carousel").Carousel;

export default function HomeCarousel() {
  return (
    <Carousel showStatus={false} infiniteLoop showThumbs={false} autoPlay>
      <div>
        <img
          className="home__carousel__img"
          alt=""
          src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145556/robertbalonek.com/HomeCarousel/Opera_News_Final_l1hbsb.jpg"
        />
      </div>
    </Carousel>
  );
}
