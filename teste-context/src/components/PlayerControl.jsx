import { useState, useRef } from 'react'
import Slider from './slider/Slider'
import ControlPanel from './controls/ControlPanel'

function PlayerControl() {
  
  const [isPlaying, setIsPlaying] = useState(false)
 

  const audioRef = useRef()

  

  const play = () => {
    const audio = audioRef.current
    audio.volume = 0.1

    if (!isPlaying) {
      setIsPlaying(true)
      audio.play()
    }

    if (isPlaying) {
      setIsPlaying(false)
      audio.pause()
    }
  }

  

  return (
    <div className='app-container'>
      <h1>Audio Player</h1>
      
      <audio
        ref={audioRef}
        
        src={'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3'}
      ></audio>
     
    </div>
  )
}

export default PlayerControl