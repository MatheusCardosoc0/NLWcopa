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
  const [isPlayingCurrent, setIsPlayingCurrent] = useState(false)

  function minutesAndSeconds(s) {
    const minutes = Math.floor(s / 60)
    const seconds = (s % 60).toFixed(0)
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
  }

  const getCurrDuration = e => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2)
    const time = e.currentTarget.currentTime

    setPercentage(+percent)
    setCurrentTime(time.toFixed(2))
  }

  const onChange = e => {
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
    audio.play()
    setStateMusic(true)
    setIsTimeShow(true)
    setIsPlayingCurrent(true)
    setMusicCurrent(props.music)
    if (musicCurrent.song == props.audio && stateMusic == true) {
      audio.pause()
      setStateMusic(false)
      setIsTimeShow(false)
      setIsPlayingCurrent(false)
      console.log(minutesAndSeconds(audio.duration))
      console.log(audio.duration)
    }
  }

  useEffect(() => {
    const audio = audioElement.current
    if (musicCurrent.song !== props.audio) {
      audio.pause()
      setIsPlayingCurrent(false)
    }
  }, [musicCurrent, props.audio])

  return (
    <button className="bg-gray-900/30 flex h-[300px] lg:h-[300px] backdrop-blur-2xl flex-col lg:flex-row">
      <div className="w-full h-1/2 lg:h-full">
        <Image
          className="opacity-80 w-2/3 mx-auto md:mx-0 h-full lg:w-1/2"
          src={props.image}
          alt={props.title}
          width={30}
          height={30}
        />

        <audio
          src={props.audio}
          ref={audioElement}
          onTimeUpdate={getCurrDuration}
          onLoadedData={e => {
            setDuration(e.currentTarget.duration.toFixed(2))
          }}
        />
      </div>

      <div className="flex flex-col my-auto justify-center items-center w-full">
        <span className="bg-gradient-to-r text-gray-200 md:text-3xl font-bold mb-4">
          {props.title}
        </span>

        <div className='flex flex-col w-2/3 lg:w-full justify-center lg:items-center'>
          <Slider percentage={percentage} onChange={onChange} />

          <ControlPanel
            play={Play}
            isPlaying={isPlayingCurrent}
            duration={duration}
            currentTime={currentTime}
          />
        </div>
      </div>
    </button>
  )
}

export default CardMusic
