import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'

const Context = createContext()

export function ContextProvider({ children }) {
  const [musics, setMusics] = useState([])
  const [stateMusic, setStateMusic] = useState(false)
  const [musicCurrent, setMusicCurrent] = useState({})
  const [isTimeShow, setIsTimeShow] = useState(false)
  const [playlistCurrent, setPlaylistCurrent] = useState(1)
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:3000/api/music').then(response => {
      setMusics(response.data)
    })
  }, [])

  useEffect(() => {
    if(!musicCurrent){
      setIsTimeShow(false)
    }
  },[musicCurrent])

  return (
    <Context.Provider value={
      { 
        musics,
         stateMusic,
         setStateMusic,
         setMusics,
         musicCurrent,
         setMusicCurrent,
         isTimeShow,
         setIsTimeShow,
         playlistCurrent,
         setPlaylistCurrent,
         showMenu,
         setShowMenu }}>
      {children}
    </Context.Provider>
  )
}

export const useDataContext = () => useContext(Context)
