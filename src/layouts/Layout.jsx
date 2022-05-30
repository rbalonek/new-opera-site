import React, {useState} from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import NewAudioPlayer from "../components/NewAudioPlayer/AudioPlayer"
import AudioPlayList from "../components/Databases/AudioPlayListDatabase"
import "./Layout.css"

import ListenButton from "../components/ListenButton/ListenButton";
import PlayList from '../components/images/playerButtons/Playlist2.png'
import Stop from "../components/images/playerButtons/Hide.png"


export default function Layout(props) {
  
  const [toggle, setToggle] = useState(false)
  const [button, setButton] = useState(PlayList)
  const [buttonText, setButtonText] = useState("Show Player")
  const [showAudioPlayer, setShowAudioPlayer] = useState("hide")
  const [currentSong, setCurrentSong] = useState()

  const toggleClick = () => {
    if (toggle === false) {
      setToggle(true)
      setButton(Stop)
      setButtonText("Hide Player")
      setShowAudioPlayer("show")
      if (window.pageYOffset < 3) {
        window.scroll(0, 100)
      }
    } else {
      setToggle(false)
      setButton(PlayList)
      setButtonText("Show Player")
      setShowAudioPlayer("hide")
    }
  }
  
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <ListenButton button={button} buttonText={buttonText} toggle={toggle} toggleClick={toggleClick} />
      <div className={showAudioPlayer}>
      <NewAudioPlayer setCurrentSong={setCurrentSong} toggle={toggle} toggleClick={toggleClick} songs={AudioPlayList} />
      </div>
    <Footer currentSong={currentSong} />
    </div>
  );
}
