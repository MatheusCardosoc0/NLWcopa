import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useDataContext } from '../context/useDataContext'
import ControlPanel from './controls/ControlPanel'
import PlayerControl from './PlayerControl'
import Slider from './slider/Slider'

const CardMusic = props => {
  const audioElement = useRef()
  const {
    setStateMusic,
    stateMusic,
    musicCurrent,
    setMusicCurrent,
    setIsTimeShow,
    isTimeShow
  } = useDataContext()

  const [percentage, setPercentage] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  function minutesAndSeconds(s) {
    const minutes = Math.floor(s / 60)
    const seconds = (s % 60).toFixed(0)
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
  }

  const getCurrDuration = (e) => {
    const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
    const time = e.currentTarget.currentTime

    setPercentage(+percent)
    setCurrentTime(time.toFixed(2))
  }

  const onChange = (e) => {
    const audio = audioElement.current
    audio.currentTime = (audio.duration / 100) * e.target.value
    setPercentage(e.target.value)
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
      Tocar
       <audio src={props.audio}
        ref={audioElement} 
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2))
        }}/>
      <span>
        {audioElement.current && props.audio
          ? minutesAndSeconds(audioElement.current.duration)
          : ''}
      </span>
      <span>{props.title}</span>
      
      <Slider percentage={percentage} onChange={onChange} />

      <ControlPanel
        play={Play}
        isPlaying={isTimeShow}
        duration={duration}
        currentTime={currentTime}
      />
    </button>
  )
}

export default CardMusic
