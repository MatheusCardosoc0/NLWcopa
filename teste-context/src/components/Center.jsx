import Image from 'next/image'
import React, { useRef } from 'react'
import { useDataContext } from '../context/useDataContext'
const Center = ({ children }) => {

  const {musicCurrent} = useDataContext()

  return (
    <section className="w-full h-screen flex flex-col over">
      <div className="w-full h-1/3 bg-teal-700 flex flex-col ontainer gap-4">
        <div className="w-[15rem] h-[15rem] mx-auto bg-black/40 rounded-full flex justify-center items-center mt-4 disc">
          <Image src={musicCurrent.bannerUrl} alt={musicCurrent.title} width={100} height={100} className="absolute h-[15rem] w-[15rem] rounded-full" />
          <span className="w-[2rem] h-[2rem] bg-black rounded-full disc z-10" />
        </div>
        {/*
        <div className='cube'>
          <div className="wall top"></div>
          <div className="wall bottom"></div>
          <div className="wall side1" ></div>
          <div className="wall side2" ></div>
          <div className="wall side3" ></div>
          <div className="wall side4" ></div>
        </div> */}

        <div className="h-full w-[4rem] bg-teal-800 absolute right-0 z-[-2]" />
        <div className="h-[4rem] w-[full] bg-teal-900 rounded-tr-full" />
        <div className="absolute h-full w-full bg-black/20 disc" />
      </div>
      <div className="h-[1000px] bg-gray-900 border-gray-800 flex justify-center items-center">
        <span className='p-4 bg-black rounded-xl border-4 border-purple-500'>
        <h2 className='text-6xl bg-gradient-to-r from-yellow-400 via-teal-500 bg-clip-text text-transparent to-purple-500'><b className='text-gray-200 text-base flex'>Tocando agora: </b>{musicCurrent.title}</h2>
        </span>
      </div>
      <div className='flex overflow-hidden'>
        <div className="bg-teal-900 w-full h-full flex flex-col  overflow-scroll overflow-x-hidden disc scrollab">
          {children}

                
        </div>

        <div className="h-full w-[150px] bg-gray-900 border-l-[40px] border-gray-800" />
      </div>
    </section>
  )
}

export default Center
