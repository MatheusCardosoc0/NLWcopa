import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'

const Context = createContext()

export function ContextProvider({ children }) {
  const [musics, setMusics] = useState([])
  const [stateMusic, setStateMusic] = useState(false)
  const [musicCurrent, setMusicCurrent] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3000/api/music').then(response => {
      setMusics(response.data)
    })
  }, [])

  return (
    <Context.Provider value={
      { musics, stateMusic, setStateMusic, setMusics, musicCurrent, setMusicCurrent }}>
      {children}
    </Context.Provider>
  )
}

export const useDataContext = () => useContext(Context)
