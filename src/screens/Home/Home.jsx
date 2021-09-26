import React from "react";
// import { Carousel } from "react-responsive-carousel";

// import HomeCarousel from "../../components/Carousels/HomeCarousel/HomeCarousel";
import CarouselHome from "../../components/Carousels/Carousel/Carousel";
import UpcomingGigs from "../../components/UpcomingGigs/UpcomingGigs";
import "./Home.css";

// import headshot from "../../components/images/homeCarouselImgs/1_with-text.jpg";
import Prospero from "../../components/images/homeCarouselImgs/Prospero 1 copy.jpg";
// import Shaunard from "../../components/images/homeCarouselImgs/Shaunard_Text.jpg";

export default function Home() {
  return (
    <div className="home__container">
      <div className="home__split">
        <div className="home__carousel-holder">
          <CarouselHome
            Images={[
              "https://res.cloudinary.com/bobalobbadingdong/image/upload/c_scale,h_350,w_600/v1632606575/robertbalonek.com/HomeCarousel/1_with-text_ypvrwu.jpg",
              `${Prospero}`,
              "https://res.cloudinary.com/bobalobbadingdong/image/upload/c_scale,h_350,w_600/v1632604066/robertbalonek.com/HomeCarousel/Shaunard_Text_ogcup6.jpg",
              "https://res.cloudinary.com/bobalobbadingdong/image/upload/c_scale,h_350,w_600/v1632602754/robertbalonek.com/HomeCarousel/Figaro_text_esprfv.png",
              // "https://res.cloudinary.com/bobalobbadingdong/image/upload/c_scale,h_350,w_580/v1601307833/robertbalonek.com/HomeCarousel/2_yltoj1.png",
              "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145555/robertbalonek.com/HomeCarousel/Richard_xofmpk.jpg",
            ]}
          />
        </div>
        <div className="home__upcoming-gigs">
          <UpcomingGigs />
        </div>
      </div>
    </div>
  );
}
