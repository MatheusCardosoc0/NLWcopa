import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './components/Login'
import Axios from 'axios'

type playlistImage ={
  url: string
}

type itemsPlaylist = {
  track: {
    name: string
    album : {
      images: [playlistImage]
      name: string
      preview_url: string
    }
  }
}


interface PlaylistProps {
  images: [playlistImage]
  tracks: {
    items: [itemsPlaylist]
  }
}



function App() {
  const [count, setCount] = useState('')
  const [playlist, setPlaylist] = useState<PlaylistProps | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)



  useEffect(() => {
    const hash = window.location.hash

    if (hash) {
      const token = hash.substring(1).split('&')[0].split('=')[1]

      console.log(token)
      setCount(token)
    }
  }, [])


  useEffect(() => {
    async function GetPlaylist() {
      const response = await Axios.get('https://api.spotify.com/v1/playlists/1VZYbbcPNuLzfoPE84Jy9P', {
        headers: {
          Authorization: "Bearer " + count,
          "Content-Type": "application/json"
        }
      })

      setPlaylist(response.data)
      console.log(response.data)
    }

    GetPlaylist()
  }, [count])


  const audioElemente = useRef<HTMLAudioElement>()


  
  useEffect(()=> {
    audioElemente.current?.play()
  },[isPlaying])



  return (
    <div className="App">
      <Login />
      {count}
      {playlist?.tracks.items.map(track => {
        return (
          <button onClick={() => setIsPlaying(true)}>
           <img src={track.track.album.images[0].url} />
           <audio src={track.track.album.preview_url} ref={audioElemente} />
            <h1>{track.track.name}</h1>
            <span>{track.track.album.name}</span>
          </button>
        )
      })}
      
    </div>
  )
}

export default App
