import Image from 'next/image'
import React from 'react'
import Logo from '../../public/LogoLyriksMusic.jpeg'
import { useDataContext } from '../context/useDataContext'


const Sidebar = () => {

  const {setPlaylistCurrent, playlistCurrent, showMenu} = useDataContext()

  return (
    <section className={`${showMenu? 'fixed z-40 h-screen': 'hidden'} md:h-screen  md:w-1/4 bg-gradient-to-b to-teal-500 from-black md:flex flex-col pt-20 border-r-4 border-purple-500 gap-8`}>
      <div>
        <Image className='rounded-full mx-auto'
          src={Logo} alt="Logo" />
      </div>
      <div className='flex flex-col justify-center'>
        <button onClick={() =>setPlaylistCurrent(1)} className={`bg-gray-900 rounded-lg p-2 text-lg font-bold text-teal-500 border-4 border-teal-600 w-4/5 mx-auto my-3 z-20 ${playlistCurrent == 1 && 'bg-teal-400 text-black'}`} >Playlist 1</button>
        <button onClick={() => setPlaylistCurrent(2)} className={`bg-gray-900 rounded-lg p-2 text-lg font-bold text-teal-500 border-4 border-teal-600 w-4/5 mx-auto my-3 z-20  ${playlistCurrent == 2 && 'bg-teal-400 text-black'}` }>Playlist 2</button>
       
      </div>
    </section>
  )
}

export default Sidebar