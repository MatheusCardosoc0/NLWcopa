import  Axios  from 'axios'
import React, { useEffect } from 'react'
import { reducerCases } from '../utils/Constants'
import { useStateProvider } from '../utils/StateProvider'

const CurrentTrack = () => {

  const [{token,currentlyPlaying }, dispatch] = useStateProvider()

  useEffect(() => {
    const getPlayLIstCurrent = async () => {
      const response = await Axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json"
        }
      })
      console.log(response)
      if(response.data !== ""){
        const {item} = response.data
        const currentlyPlaying = {
          id: item.id,
          name: item.name,
          artists: item.artists.map((artist) => artist.name),
          image: item.album.images[2].url
        }
      dispatch({type: reducerCases.SET_PLAYLING, currentlyPlaying})
      }
    }

    getPlayLIstCurrent()
  },[token, dispatch])

  return (
    <div>
      CurrentTrack
      {
        currentlyPlaying && (
          <div>
            <img src={currentlyPlaying.image} />
            <h4>{currentlyPlaying.name}</h4>
            <h6>{currentlyPlaying.artists.join(", ")}</h6>
          </div>
        )
      }
    </div>
  )
}

export default CurrentTrack