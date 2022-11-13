import Image from 'next/image'
import { FormEvent, useState } from 'react'
import celulares from '../images/aplicacao-trilha-ignite.png'
import { api } from '../lib/axios'

interface homeProps {
  poolCount: number
  guessCount: number
  usersCount: number
}

export default function Home({ poolCount, guessCount, usersCount }: homeProps) {

  const [namePool, setnamePool] = useState('')

  async function createPool(e: FormEvent){
    e.preventDefault()

    try {
      const response = await api.post('/pools', {
        title: namePool,
      })

      const {code} = response.data

      await navigator.clipboard.writeText(code)
      
      alert('bolão criado')


    } catch (error) {
      alert('Falhou')
      console.log(error)
    }
  }


  return (
    <main className='flex justify-around items-center h-screen flex-wrap'>
      <div>
      <form onSubmit={createPool} className='bg-gray-700/40 opacity-80 backdrop-blur-2xl p-4 rounded-lg text-white'>
        <h2 className='text-3xl font-bold'>Crie seu bolão para jogar</h2>
        <p className='mb-8'>+{usersCount} pessoas estão usando</p>
        <input className='p-2 rounded bg-gray-500 placeholder:text-white' required placeholder='Nome do seu meu bolão' type={"text"} onChange={e => setnamePool(e.target.value)} value={namePool} />
        <button className='block p-2 text-xl font-bold bg-yellow-500 rounded-md mt-4' type='submit'>Criar meu bolão</button>
      </form>

      <div className='flex divide-x-8 mt-8 text-yellow-400 brightness-125 font-semibold'>
        <span className='p-2 bg-green-500/40 opacity-80 backdrop-brightness-125 text-xl rounded-tl-xl'>Bolões criados +{poolCount}</span>
        <span className='pl-4 p-2 bg-green-500/40 opacity-80 backdrop-brightness-125 text-xl rounded-br-xl'>Palpites enviados +{guessCount}</span>
      </div>
      </div>
      <div className="text-2xl">
        <Image src={celulares} quality={100} alt="celulares" />
      </div>
    </main>
  )
}

export const getServerSideProps = async () => {

  const [poolCountResponse, guessCountResponse, usersCountResponse] = await Promise.all([
    api.get('/pools/count'),
    api.get('/guess/count'),
    api.get('/users/count')
  ])

  return {
    props: {
      poolCount: poolCountResponse.data.count,
      guessCount: guessCountResponse.data.count,
      usersCount: usersCountResponse.data.count
    }
  }
}
