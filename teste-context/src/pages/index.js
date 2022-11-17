import Head from 'next/head'
import Image from 'next/image'
import CardMusic from '../components/CardMusic'
import Center from '../components/Center'
import PlayerControl from '../components/PlayerControl'
import Sidebar from '../components/Sidebar'
import { useDataContext } from '../context/useDataContext'
import styles from '../styles/Home.module.css'

export default function Home() {
  const { musics, setMusics, isTimeShow, setMusicCurrent } = useDataContext()

  return (

      <main className='flex'>
        <Sidebar />
        <Center>
          {musics.map(music => {
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
          <div className={isTimeShow ? 'teste' : ''} />
        </Center>
      </main>
    
  )
}
