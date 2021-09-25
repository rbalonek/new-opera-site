import React from "react";
import "./Gallery.css";

import CarouselGallery from "../../components/Carousels/Carousel/Carousel.js";

export default function Gallery() {
  return (
    <div className="gallery__container">
      <h1>Live Photos</h1>
      <div className="gallery__carousel-holder">
        <CarouselGallery
          Images={[
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1632612746/robertbalonek.com/BobLiveShots/Production_Photo_2_phhsya.jpg",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1632612726/robertbalonek.com/BobLiveShots/Production_Photo_4_ucl2vr.jpg",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1632613267/robertbalonek.com/BobLiveShots/Schicchi_dy8cyn.jpg",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145741/robertbalonek.com/BobLiveShots/IMG_7955.JPG_c8m0ib.jpg",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1632612733/robertbalonek.com/BobLiveShots/Production_Photo_5_v5z5dq.jpg",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145742/robertbalonek.com/BobLiveShots/IMG_7980_copy.JPG_bxtgpy.jpg",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145822/robertbalonek.com/Headshots/21_cx3v5k.jpg",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145742/robertbalonek.com/BobLiveShots/RlH_qucrl5.jpg",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1624393202/robertbalonek.com/BobLiveShots/Screen_Shot_2021-06-22_at_1.19.37_PM_jdqeqj.png",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601221847/robertbalonek.com/BobLiveShots/IMG_2642_2.JPG_aiepat.jpg",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601221847/robertbalonek.com/BobLiveShots/IMG_2598.JPG_a7qc3b.jpg",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601221847/robertbalonek.com/BobLiveShots/IMG_2592.JPG_pqvtap.jpg",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601221839/robertbalonek.com/BobLiveShots/IMG_2599_spwf9i.jpg",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145742/robertbalonek.com/BobLiveShots/Charon_hy59yl.png",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145742/robertbalonek.com/BobLiveShots/Figaro_Chelsea_15_sal2gq.png",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145741/robertbalonek.com/BobLiveShots/Figaro_Chelsea_20_h3jjy1.jpg",
          ]}
        />
      </div>
      <br />
      <hr />
      <br />
      <div className="gallery__carousel-holder">
        <h1>Headshots</h1>
        <CarouselGallery
          Images={[
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1632612710/robertbalonek.com/Headshots/Headshot_ejamnv.jpg",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145856/robertbalonek.com/Headshots/IMG_9655_copy_lxmkxk.jpg",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145846/robertbalonek.com/Headshots/IMG_9760_copy_uko8xu.jpg",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145832/robertbalonek.com/Headshots/CoverPg_jfbfqm.jpg",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145841/robertbalonek.com/Headshots/Too_Much-_ay3b0k.jpg",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1632613515/robertbalonek.com/Headshots/hsFace_kbxsok.jpg",
          ]}
        />
      </div>
      <br />
      <br />
    </div>
  );
}
