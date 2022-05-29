import React, {useState} from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import NewAudioPlayer from "../components/NewAudioPlayer/AudioPlayer"
import AudioPlayList from "../components/Databases/AudioPlayListDatabase"
import "./Layout.css"
import ListenButton from "../components/ListenButton/ListenButton";

export default function Layout(props) {
  const [toggle, setToggle] = useState(false)
  const [showMusicPlayerModal, setShowMusicPlayerModal] = useState("hide")

  const toggleClick = () => {
    if (toggle === false) {
      setToggle(true)
      setShowMusicPlayerModal("show")
    } else {
      setToggle(false)
      setShowMusicPlayerModal("hide")
    }
  }
  return (
    <div>
      <Header />
      
      <main>{props.children}</main>
      <ListenButton toggleClick={toggleClick} />
      <div className={showMusicPlayerModal}>
      <NewAudioPlayer toggleClick={toggleClick} songs={AudioPlayList} />
      </div>
      <Footer />
    </div>
  );
}
