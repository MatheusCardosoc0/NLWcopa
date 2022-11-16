import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useDataContext } from '../context/useDataContext'

const CardMusic = props => {
  const audioElement = useRef()
  const {
    setStateMusic,
    stateMusic,
    musicCurrent,
    setMusicCurrent,
    setIsTimeShow
  } = useDataContext()

  function minutesAndSeconds(s) {
    const minutes = Math.floor(s / 60)
    const seconds = (s % 60).toFixed(0)
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
  }

  function noPointInNumber(num) {
    const str = String(num)
    const strToNum = str.replace(/[^0-9]/g, '')
    const Result = Number(strToNum)
    console.log('e ' + (Result / 1000).toFixed(0))
    return Result / 1000
    
  }

  function Play() {
    const audio = audioElement.current
    const timer = noPointInNumber(audio.duration)
    audio.play()
    setStateMusic(true)
    setIsTimeShow(true)
    setMusicCurrent(props.audio)
    setTimeout(() => {
      setMusicCurrent('')
    }, timer);
    if (musicCurrent == props.audio && stateMusic == true) {
      audio.pause()
      setStateMusic(false)
      setIsTimeShow(false)
      console.log(minutesAndSeconds(audio.duration))
      console.log(audio.duration)
    }
  }

  useEffect(() => {
    const audio = audioElement.current
    if (musicCurrent !== props.audio) {
      audio.pause()
    }
  }, [musicCurrent, props.audio])

  

  return (
    <button onClick={Play}>
      <Image src={props.image} alt="e" width={100} height={100} />
      Tocar <audio src={props.audio} ref={audioElement} />
      <span>
        {audioElement.current && props.audio
          ? minutesAndSeconds(audioElement.current.duration)
          : ''}
      </span>
    </button>
  )
}

export default CardMusic
