import Saul from "../../components/Audio/Saul_Sampler_Shorter.mp3"
import CarminaBurana from "../../components/Audio/Carmina_Burana_Sampler.mp3";
import Shaunard from "../../components/Audio/Shaunard.mp3";
import Haydn from "../../components/Audio/Haydn_Creation_Sample.mp3";
import VoiceOverOne from "../../components/Audio/VO_Reel.mp3";
import VoiceOverTwo from "../../components/Audio/60_sec_2nd_cut.mp3";

const AudioPlayList = [
  {
  title: "Handel Saul excerpts",
    role: "Saul",
    // URL: { Saul },
    URL: "/static/media/Saul_Sampler_Shorter.8ed67463.mp3",
    url_helper:"Saul",
    img: "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1632620849/robertbalonek.com/BobLiveShots/Ottone_jrpexs.png",
  },
  {
    title: "Carmina Burana excerpts",
    role: "Soloist",
    URL: "/static/media/Carmina_Burana_Sampler.207a2b1e.mp3",
    img: "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1653865853/robertbalonek.com/BobLiveShots/IMG_D0052F784D25-1_djgna7_lmmamb.png",
  },
  {
    title: "La Boheme",
    role: "Shaunard",
    URL:  "/static/media/Shaunard.5f78ae09.mp3",
    img: "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601221847/robertbalonek.com/BobLiveShots/IMG_2592.JPG_pqvtap.jpg",
  },
  {
    title: "Haydn Creation",
    role: "Soloist",
    URL: "/static/media/Haydn_Creation_Sample.2528dced.mp3",
    img: "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145841/robertbalonek.com/Headshots/Too_Much-_ay3b0k.jpg",
  },
  {
    title: "Voice Over Reel",
    role: "Voice Over",
    URL: "/static/media/VO_Reel.044e82c6.mp3",
    img: "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145832/robertbalonek.com/Headshots/CoverPg_jfbfqm.jpg",
  },
  {
    title: "Voice Over Reel Two",
    role: "Voice Over",
    URL: "/static/media/60_sec_2nd_cut.b0db36e4.mp3",
    img: "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1632613515/robertbalonek.com/Headshots/hsFace_kbxsok.jpg",
    },
]
export default AudioPlayList