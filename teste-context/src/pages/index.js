import Head from 'next/head'
import Image from 'next/image'
import CardMusic from '../components/CardMusic'
import { useDataContext } from '../context/useDataContext'
import styles from '../styles/Home.module.css'

export default function Home() {
  const { musics, setMusics } = useDataContext()

  const aba = musics.slice(0, 2)

  return (
    <div className={styles.container}>
      {aba.map(music => {
        return <CardMusic audio={music.song} key={music.song} />
      })}
    </div>
  )
}
