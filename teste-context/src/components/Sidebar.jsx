import Image from 'next/image'
import React from 'react'
import Logo from '../../public/LogoLyriksMusic.jpeg'


const Sidebar = () => {
  return (
    <section className='h-screen w-1/4 bg-gradient-to-b to-teal-500 from-black flex flex-col pt-20 border-r-4 border-purple-500 gap-8'>
      <div>
        <Image className='rounded-full mx-auto'
          src={Logo} alt="Logo" />
      </div>
      <div className='flex flex-col justify-center'>
        <button className='bg-gray-900 rounded-lg p-2 text-lg font-bold text-teal-500 border-4 border-teal-600 w-4/5 mx-auto my-3 ' >eae</button>
        <button className='bg-gray-900 rounded-lg p-2 text-lg font-bold text-teal-500 border-4 border-teal-600 w-4/5 mx-auto my-3 ' >eae</button>
      </div>
    </section>
  )
}

export default Sidebar