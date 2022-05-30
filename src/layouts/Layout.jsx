import React, {useState} from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import NewAudioPlayer from "../components/NewAudioPlayer/AudioPlayer"
import AudioPlayList from "../components/Databases/AudioPlayListDatabase"
import "./Layout.css"
import ListenButton from "../components/ListenButton/ListenButton";

import PlayList from '../components/images/playerButtons/Playlist2.png'
import Stop from "../components/images/playerButtons/Hide.png"

import Modal from "react-modal";

export default function Layout(props) {
  const [toggle, setToggle] = useState(false)
  const [button, setButton] = useState(PlayList)
  const [buttonText, setButtonText] = useState("Show Player")
  const [modalIsOpen, setIsOpen] = useState(false);

  const toggleClick = () => {
    if (toggle === false) {
      setToggle(true)
      setButton(Stop)
      setButtonText("Hide Player")
      openModal()
      if (window.pageYOffset < 3) {
        window.scroll(0, 100)
      }
    } else {
      setToggle(false)
      setButton(PlayList)
      setButtonText("Show Player")
      closeModal()
    }
  }

  function openModal() {
    

    setIsOpen(true);
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  }

  function closeModal() {
    setIsOpen(false);
    window.onscroll = function () {};
  }
  
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <ListenButton button={button} buttonText={buttonText} toggle={toggle} toggleClick={toggleClick} />
      
      <Modal
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      // style={customStyles}
      className="Modal flexy"
        contentLabel="Modal"
        ariaHideApp={false}
    >
    <NewAudioPlayer toggle={toggle} toggleClick={toggleClick} songs={AudioPlayList} />
    </Modal>
    <Footer />
    </div>
  );
}
