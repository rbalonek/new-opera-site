import React from "react";
import { Helmet } from "react-helmet";
import CarouselHome from "../../../components/Carousels/Carousel/Carousel";
import UpcomingGigs from "../../../components/UpcomingGigs/UpcomingGigs";

import "./NewHome.css";

export default function NewHome() {

  return (
    <div className="newHome__conainer">
      <Helmet>
        <title>Robert Balonek - Bay Area Baritone</title>
        <meta name="description" content="Robert Balonek is a Bay Area Baritone specializing in Verdi Baritone roles, classical singing, and opera. Known for performances as Figaro, Scarpia, Iago, Rigoletto, and more." />
        <meta name="keywords" content="Robert Balonek, Bay Area Baritone, Verdi Baritone, Baritone, Opera, Classical Singer, Figaro, Oratorio, Scarpia, Iago, Rigoletto" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Robert Balonek" />
        <meta name="publisher" content="Robert Balonek " />
        <link rel="canonical" href="https://www.robertbalonek.com/" />
      </Helmet>

      <CarouselHome
        Images={[
          "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1634747678/robertbalonek.com/HomeCarousel/OperaNewsBanner_zjhamu.jpg",
          "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1665855544/robertbalonek.com/HomeCarousel/Rig_Banner_zrdjqq.png",
          "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1690677795/robertbalonek.com/HomeCarousel/Dutchman_Banner_jjxiod.png",
          "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1635467636/robertbalonek.com/HomeCarousel/OwenShorter_f9rml3.png",
          "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1634747682/robertbalonek.com/HomeCarousel/Prospero_Banner_ivovxb.jpg",
          "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1635467337/robertbalonek.com/HomeCarousel/figaroShorterBanner_m3ld7s.png",
        ]}
      />
      <UpcomingGigs />
    </div>
  );
}
