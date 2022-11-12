import axios from 'axios'
import React, { useEffect } from 'react'
import { useStateProvider } from '../utils/StateProvider'
import Axios from 'axios'
import { reducerCases } from '../utils/Constants'

const Playlists = () => {

  const[{token, playlists },dispatch] = useStateProvider()

  useEffect(() => {
    const getPlayLIstData = async () => {
      const response = await Axios.get('https://api.spotify.com/v1/me/playlists', {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json"
        }
      })
      const {items} = response.data
      const playlists = items.map(({name, id}) => {
        return {name, id}
      })
      dispatch({type: reducerCases.SET_PLAYLISTS, playlists})
    }

    getPlayLIstData()
  },[token, dispatch])

  return (
    <div>Playlists: 
      {playlists?.map(({name, id}) => {
        return(
          <div key={id}>
            <p>{name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Playlists