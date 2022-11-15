import React, { useContext, useRef, useState } from 'react'
import { CartContext } from '../../context/CartContext'

const Button = props => {
  const [musicState, setMusicState] = useState(false)
  const music = useRef()

  const {helloworld} = useContext(CartContext)

  console.log('e' +helloworld)

  function Play() {
    setMusicState(!musicState)
    if (musicState == false) {
      music.current.play()
    } else {
      music.current.pause()
    }
  }

  return (
    <button onClick={Play}>
      Tocar <audio src={props.audio} ref={music} />
    </button>
  )
}

export default Button
