import axios from 'axios'
import React, { useEffect } from 'react'
import { useStateProvider } from '../utils/StateProvider'
import Axios from 'axios'

const Playlists = () => {

  const[{token, dispatch}] = useStateProvider()

  useEffect(() => {
    const getPlayLIstData = async () => {
      const response = await Axios.get()
    }

    getPlayLIstData()
  },[token, dispatch])

  return (
    <div>Playlists</div>
  )
}

export default Playlists