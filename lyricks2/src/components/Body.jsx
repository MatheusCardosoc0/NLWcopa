import axios from 'axios'
import React, { useEffect } from 'react'
import { useStateProvider } from '../utils/StateProvider'

const Body = () => {
  const [{ token, selectedPlaylistId }, dispatch] = useStateProvider()

  useEffect(() => {
    const getInitialPlaylist = async () => {
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
        {
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
          }
        }
      )
      console.log(response)
    }
    getInitialPlaylist()
  }, [dispatch, token])

  return <div>Body</div>
}

export default Body
