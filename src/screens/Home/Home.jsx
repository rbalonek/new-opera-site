import React from "react";
// import { Carousel } from "react-responsive-carousel";

import HomeCarousel from "../../components/Carousels/HomeCarousel/HomeCarousel";
import CarouselHome from "../../components/Carousels/Carousel/Carousel";
import "./Home.css";

export default function Home() {
  return (
    <div className="home__container">
      <div className="home__carousel-holder">
        <CarouselHome
          Images={[
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145556/robertbalonek.com/HomeCarousel/Opera_News_Final_l1hbsb.jpg",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/c_scale,h_350/v1601145555/robertbalonek.com/HomeCarousel/Prospero_1Fade_ezllvo.jpg",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/c_scale,h_350,w_600/v1601307971/robertbalonek.com/HomeCarousel/Figaro_orvkla.jpg",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/c_scale,h_350,w_580/v1601307833/robertbalonek.com/HomeCarousel/2_yltoj1.png",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145555/robertbalonek.com/HomeCarousel/Richard_xofmpk.jpg",
          ]}
        />
      </div>
    </div>
  );
}
