import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

interface homeProps {
  count: number
}

export default function Home({count}: homeProps) {
 

  return (
    <div className={styles.container}>
      <h1>Contagem {count}</h1>
    </div>
  )
}

export const getServerSideProps = async() => {
  const response = await fetch('http://localhost:3333/pools/count')
  const json = await response.json()
  
  console.log(json)

  return {
    props: {
      count: json.count
    }
  }
}
