import React from "react";
import CarouselHome from "../../../components/Carousels/Carousel/Carousel";
import UpcomingGigs from "../../../components/UpcomingGigs/UpcomingGigs";
import "./NewHome.css";

export default function NewHome() {
  return (
    <div className="newHome__conainer">
      <CarouselHome
        Images={[
          "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1634747678/robertbalonek.com/HomeCarousel/OperaNewsBanner_zjhamu.jpg",
          "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1634747682/robertbalonek.com/HomeCarousel/Prospero_Banner_ivovxb.jpg",
          "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1635467636/robertbalonek.com/HomeCarousel/OwenShorter_f9rml3.png",
          "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1635467337/robertbalonek.com/HomeCarousel/figaroShorterBanner_m3ld7s.png",
        ]}
      />
      <UpcomingGigs />
    </div>
  );
}
