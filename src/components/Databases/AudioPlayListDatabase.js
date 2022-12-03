import Saul from "../Audio/Saul_Sampler_Shorter.mp3"
import CaminaBurana from "../Audio/Carmina_Burana_Sampler.mp3"
import Shaunard from "../Audio/Shaunard.mp3"
import HaydnCreation from "../Audio/Haydn_Creation_Sample.mp3"
import VOOne from "../Audio/VO_Reel.mp3"
import VOTwo from "../Audio/60_sec_2nd_cut.mp3"
import Marcello from "../Audio/Marcello_Role_Excerpts.mp3"

const AudioPlayList = [
  {
  title: "Handel Saul excerpts",
    role: "Saul",
    URL: Saul,
    // URL: "/static/media/Saul_Sampler_Shorter.8ed67463.mp3",
    url_helper:Saul,
    img: "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1670105879/robertbalonek.com/Avatars/IMG_6533_xrmuna.jpg",
  },
  {
    title: "Carmina Burana excerpts",
    role: "Soloist",
    URL:CaminaBurana,
    img: "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1670105875/robertbalonek.com/Avatars/IMG_6658_f4dszr.jpg",
  },
  {
    title: "La Boheme",
    role: "Marcello",
    URL:  Marcello,
    img: "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1670105872/robertbalonek.com/Avatars/IMG_6638_rq72sn.jpg",
  },
  {
    title: "La Boheme",
    role: "Shaunard",
    URL:  Shaunard,
    img: "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601221847/robertbalonek.com/BobLiveShots/IMG_2592.JPG_pqvtap.jpg",
  },
  {
    title: "Haydn Creation",
    role: "Soloist",
    URL: HaydnCreation,
    img: "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1670105883/robertbalonek.com/Avatars/IMG_6682_tskryh.jpg",
  },
  {
    title: "Voice Over Reel",
    role: "Voice Over",
    URL: VOOne,
    img: "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1670105917/robertbalonek.com/Avatars/IMG_6570_tm3ynf.jpg",
  },
  {
    title: "Voice Over Reel Two",
    role: "Voice Over",
    URL: VOTwo,
    img: "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1670105912/robertbalonek.com/Avatars/IMG_6565_wmcsgn.jpg",
    },
]
export default AudioPlayList
