import React from 'react'
import { reducerCases } from '../utils/Constants'
import { useStateProvider } from '../utils/StateProvider'

const PlayerControl = () => {
  const [{ token, playerState }, dispatch] = useStateProvider()

  const changeTrack = async type => {
    await Axios.post(
      `https://api.spotify.com/v1/me/player/${type}`,
      {},
      {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      }
    )

    if (response.data !== '') {
      const { item } = response.data
      const currentlyPlaying = {
        id: item.id,
        name: item.name,
        artists: item.artists.map(artist => artist.name),
        image: item.album.images[2].url
      }
      dispatch({ type: reducerCases.SET_PLAYLING, currentlyPlaying })
    } else
      dispatch({ type: reducerCases.SET_PLAYER_STATE, currentlyPlaying: null })
  }

  const changeState = async () => {
    const state = playerState ? 'pause' : 'play'

    const response = await Axios.get(
      `https://api.spotify.com/v1/me/player/currently-playing/${state}`,
      {},
      {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      }
    )
    dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: !playerState })
  }

  return (
    <div>
      PlayerControl
      <button onClick={() => changeTrack('next')}>
        {playerState ? 'Play' : 'Pause'}
      </button>
    </div>
  )
}

export default PlayerControl
