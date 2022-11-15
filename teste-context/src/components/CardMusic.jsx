import React, { useEffect, useRef, useState } from 'react'
import { useDataContext } from '../context/useDataContext'

const CardMusic = props => {
  const audioElement = useRef()
  const {setStateMusic, stateMusic, musicCurrent, setMusicCurrent} = useDataContext()

  

  function Play() {

    const audio = audioElement.current
    audio.play()
    setStateMusic(true)
    setMusicCurrent(props.audio)
    if(musicCurrent == props.audio && stateMusic == true){
      audio.pause()
      setStateMusic(false)
    }
      
  }

  useEffect(() => {

    const audio = audioElement.current
    if(musicCurrent !== props.audio){
      audio.pause()
    }
  },[musicCurrent, props.audio])

  return (
    <button onClick={Play}>
      Tocar <audio src={props.audio} ref={audioElement} />
    </button>
  )
}

export default CardMusic
