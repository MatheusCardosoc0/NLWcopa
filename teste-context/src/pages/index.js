import Head from 'next/head'
import Image from 'next/image'
import CardMusic from '../components/CardMusic'
import { useDataContext } from '../context/useDataContext'
import styles from '../styles/Home.module.css'

export default function Home() {
  const { musics, setMusics, isTimeShow, setMusicCurrent } = useDataContext()


  

  return (
    <div className={styles.container}>

      <button onClick={() => setMusicCurrent('')} >Tirar disco</button>

      {musics.map(music => {
        return <CardMusic image={music.bannerUrl} audio={music.song} key={music.song} />
      })}
      <div className={isTimeShow? 'teste': ''}></div>
    </div>
  )
}
