import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function Play() {
    const audio = audioRef.current
    audio.play()
  }

  const audioRef = useRef()

  return (
    <div className="App">
    eae
    <audio ref={audioRef} src='' />
    <button onClick={Play} >tocar</button>
    </div>
  )
}

export default App
