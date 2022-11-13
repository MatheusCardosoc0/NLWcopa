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


  async function PlayMusic(){
    
    Axios.put('https://api.spotify.com/v1/me/player/play',{
      headers: {
        Authorization: "Bearer " + count,
        "Content-Type": "application/json"
      },
      data: {
        "context-uri": "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr",
        "offset": {
          "position": 2
        },
        "position_ms": 0
      }
    })
   
  
 
  }
  


  return (
    <div className="App">
      <Login />
      {count}
      {playlist?.tracks.items.map(track => {
        return (
          <button onClick={PlayMusic}>
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
