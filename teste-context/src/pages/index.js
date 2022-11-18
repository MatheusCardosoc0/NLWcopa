import Head from 'next/head'
import Image from 'next/image'
import CardMusic from '../components/CardMusic'
import Center from '../components/Center'
import PlayerControl from '../components/PlayerControl'
import Sidebar from '../components/Sidebar'
import { useDataContext } from '../context/useDataContext'
import Playlist1 from '../Playlists/Playlist1'
import Playlist2 from '../Playlists/Playlist2'
import styles from '../styles/Home.module.css'

export default function Home() {
  const { isTimeShow, playlistCurrent } = useDataContext()

  return (
    <main className="flex">
      <Sidebar />
      <Center>
        {playlistCurrent == 2 ? <Playlist2 /> : <Playlist1 />}
        <div className={isTimeShow ? 'teste' : ''} />
      </Center>
    </main>
  )
}
