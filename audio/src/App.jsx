import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function Play() {
    audioRef.current.play()
  }

  function Pause(){
    audioRef.current.pause()
  }

  const audioRef = useRef()

  return (
    <div className="App">
    eae
    <audio ref={audioRef} src='' />
    <button onClick={Play} >tocar</button>
    <button onClick={Pause}>Pausar</button>
    </div>
  )
}

export default App
