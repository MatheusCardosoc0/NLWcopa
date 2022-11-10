import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './components/Login'
import { useStateProvider } from './utils/StateProvider'
import { reducerCases } from './utils/Constants'
import Spotfy from './components/Spotfy'

export default function App() {
  const [{ token }, dispatch] = useStateProvider()

  useEffect(() => {
    const hash = window.location.hash

    if (hash) {
      const token = hash.substring(1).split('&')[0].split('=')[1]

      dispatch({ type: reducerCases.SET_TOKEN, token })
    }
  }, [token, dispatch])

  return (
    <div className="App">
      {token? <Spotfy />: <Login />}
    </div>
  )
}
