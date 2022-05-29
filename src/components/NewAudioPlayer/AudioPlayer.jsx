import React, {useState} from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import "./AudioPlayer.css"

export default function AudioPlayerComp(props) {
  const [trackNum, setTrackNum] = useState(0)
  let thePlaylist= []

// console.log(props.songs)

  // { props.songs &&  }
  props.songs.map((song) => {
    thePlaylist.push(song)
  })
  
  const handleClickNext = () => {
    if (trackNum < thePlaylist.length-1) {
      setTrackNum(trackNum+1)
    } else {
      setTrackNum(0)
    }
  }
  const handleClickPrev = () => {
    if (trackNum > thePlaylist.length-1) {
      setTrackNum(trackNum-1)
    } else {
      setTrackNum(0)
    }
  }
  const handleClickSong = ( songNum) => {
    setTrackNum(songNum)
  }
  return (
    <div className='audio-player__container'>
      {!thePlaylist.length ? (
        <h1>Loading...</h1>
      ) : (
          <div className='audio-player__holder'>
            <div className='audio-player__description__holder'>
            <div className='audio-player__description'>
            <p>{thePlaylist[trackNum].title}</p>
                <p>{thePlaylist[trackNum].role}</p>
                <img style={{height:"50px"}} src={thePlaylist[trackNum].img} alt={thePlaylist[trackNum].title} />
            </div>
            <AudioPlayer
            className='audio-player'
            showSkipControls={true}
            autoPlay={false}
            src={thePlaylist[trackNum].URL}
            onClickNext={handleClickNext}
            onClickPrevious={handleClickPrev}
            />
            </div>
            
            <div className='song-list'>
              {thePlaylist.map((song, index) => (
                <div className='song-list__conatiner' key={index+"song-list__conatiner"}>
                  <p onClick={(e) => { e.preventDefault(); handleClickSong(index) }} className='song-list__song' key={index + "song"}>{song.title} : {song.role}</p>
                </div>
              ))}
            </div>
            <div className='audio-player__bottom'/>
            </div>
      )}
    </div>
  )
}
