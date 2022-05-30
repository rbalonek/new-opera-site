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
    img: "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1632620849/robertbalonek.com/BobLiveShots/Ottone_jrpexs.png",
  },
  {
    title: "Carmina Burana excerpts",
    role: "Soloist",
    URL:CaminaBurana,
    img: "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1653865853/robertbalonek.com/BobLiveShots/IMG_D0052F784D25-1_djgna7_lmmamb.png",
  },
  {
    title: "La Boheme",
    role: "Marcello",
    URL:  Marcello,
    img: "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1651195525/robertbalonek.com/Performances/Boheme%20-%20Marcello%20-%202022/IMG_4338_jktckl.jpg",
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
    img: "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145841/robertbalonek.com/Headshots/Too_Much-_ay3b0k.jpg",
  },
  {
    title: "Voice Over Reel",
    role: "Voice Over",
    URL: VOOne,
    img: "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145832/robertbalonek.com/Headshots/CoverPg_jfbfqm.jpg",
  },
  {
    title: "Voice Over Reel Two",
    role: "Voice Over",
    URL: VOTwo,
    img: "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1632613515/robertbalonek.com/Headshots/hsFace_kbxsok.jpg",
    },
]
export default AudioPlayList
