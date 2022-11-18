import React from 'react'
import CardMusic from '../components/CardMusic'
import { useDataContext } from '../context/useDataContext'

const Playlist1 = () => {
  const { musics } = useDataContext()

  const playlist1 = musics.slice(0, 6)

  return (
    <>
      {playlist1.map(music => {
        return (
          <CardMusic
            title={music.title}
            image={music.bannerUrl}
            audio={music.song}
            key={music.song}
            music={music}
          />
        )
      })}
    </>
  )
}

export default Playlist1
