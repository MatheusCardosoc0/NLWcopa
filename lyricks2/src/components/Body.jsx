import axios from 'axios'
import React, { useEffect } from 'react'
import { reducerCases } from '../utils/Constants'
import { useStateProvider } from '../utils/StateProvider'

const Body = () => {
  const [{ token, selectedPlaylistId, selectedPlaylist }, dispatch] =
    useStateProvider()

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
      const selectedPlaylist = {
        id: response.data.id,
        name: response.data.name,
        description: response.data.description.startsWith('<a')
          ? ''
          : response.data.description,
        image: response.data.images[0].url,
        tracks: response.data.tracks.items.map(({ track }) => ({
          id: track.id,
          name: track.name,
          artists: track.artists.map(artist => artist.name),
          image: track.album.images[2].url,
          duration: track.duration_ms,
          albun: track.album.name,
          context_uri: track.album.uri,
          track_number: track.track_number
        }))
      }
      dispatch({ type: reducerCases.SET_PLAYLIST, selectedPlaylist })
    }
    getInitialPlaylist()
  }, [dispatch, token, selectedPlaylistId])

  function minutesAndSeconds(ms) {
    const minutes = Math.floor(ms/ 60000)
    const seconds  = ((ms % 60000) / 1000).toFixed(0)
    return minutes + ":" + (seconds < 10 ? "0" : '') + seconds
  }

  return (
    <div className='text-2xl'>
      Body
      {selectedPlaylist && (
        <>
          <div className='bg-orange-400'>
            <img className='w-40 h-40' src={selectedPlaylist.image} />
            <h1>{selectedPlaylist.name}</h1>
            <div>{selectedPlaylist.description}</div>
            <div>
              {selectedPlaylist?.tracks?.map(({id, name, artists, image, duration , album, context_uri, track_number }, index) => {
                return (
                  <div className='bg-blue-500 flex flex-col gap-2' key={id}>
                    <div>
                      <span>{index + 1}</span>
                      <span>{name}</span>
                      <span>
                        <img src={image} />
                      </span>
                      <span>{minutesAndSeconds(duration)}</span>
                      <span>{album}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Body
