import React from 'react'
import {  GrPauseFill, GrPlayFill } from 'react-icons/gr'

function Button({ play, isPlaying }) {




  return (
    <div className='bg-teal-600 rounded-lg p-2 z-10 w-[30px]'>
      <div onClick={play} >
      {isPlaying ? < GrPauseFill /> : <GrPlayFill />}
      </div>
    </div>
  )
}
export default Button
