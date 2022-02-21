import React, { useEffect } from "react";

import CarouselHome from "../../components/Carousels/Carousel/Carousel";
import UpcomingGigs from "../../components/UpcomingGigs/UpcomingGigs";
import "./Home.css";

// import Prospero from "../../components/images/homeCarouselImgs/Prospero 1 copy.jpg";
import useGaTracker from "../../useGaTracker";

export default function Home(props) {
  useGaTracker();
  return (
    <div id="home" className="home__container">
      <div className="home__split">
        <div className="home__carousel-holder">
          <CarouselHome
            Images={
              [
                // "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1634747678/robertbalonek.com/HomeCarousel/OperaNewsBanner_zjhamu.jpg",
                // "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1634747682/robertbalonek.com/HomeCarousel/Prospero_Banner_ivovxb.jpg",
                // "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1634748869/robertbalonek.com/HomeCarousel/Owen_Banner_vkgpcm.png",
                // "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1635467337/robertbalonek.com/HomeCarousel/figaroShorterBanner_m3ld7s.png",
                // "https://res.cloudinary.com/bobalobbadingdong/image/upload/c_scale,h_350,w_600/v1632606575/robertbalonek.com/HomeCarousel/1_with-text_ypvrwu.jpg",
                // `${Prospero}`,
                // "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1633975744/robertbalonek.com/HomeCarousel/OwenCarousel_tefee3.jpg",
                // "https://res.cloudinary.com/bobalobbadingdong/image/upload/c_scale,h_350,w_600/v1632604066/robertbalonek.com/HomeCarousel/Shaunard_Text_ogcup6.jpg",
                // "https://res.cloudinary.com/bobalobbadingdong/image/upload/c_scale,h_350,w_600/v1632602754/robertbalonek.com/HomeCarousel/Figaro_text_esprfv.png",
                // // "https://res.cloudinary.com/bobalobbadingdong/image/upload/c_scale,h_350,w_580/v1601307833/robertbalonek.com/HomeCarousel/2_yltoj1.png",
                // "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145555/robertbalonek.com/HomeCarousel/Richard_xofmpk.jpg",
              ]
            }
          />
        </div>
        <div className="home__upcoming-gigs">
          <UpcomingGigs Event={props.Event} />
        </div>
      </div>
    </div>
  );
}
