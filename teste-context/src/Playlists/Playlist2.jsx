import React from 'react'
import CardMusic from '../components/CardMusic'
import { useDataContext } from '../context/useDataContext'

const Playlist2 = () => {
  const { musics } = useDataContext()

  const playlist2 = musics.slice(6, 12)

  return (
    <>
      {playlist2.map(music => {
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

export default Playlist2