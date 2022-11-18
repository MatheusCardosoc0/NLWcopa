import Image from 'next/image'
import React, { useRef } from 'react'
import { useDataContext } from '../context/useDataContext'
import { List } from 'phosphor-react'


const Center = ({ children }) => {

  const {musicCurrent, isTimeShow, setShowMenu} = useDataContext()

  return (
    <section className="w-full h-screen flex flex-col over">

      <button className='fixed top-0 z-50 md:hidden text-black border-4 border-black bg-teal-500'
      onClick={() => setShowMenu(prevState => !prevState)}>
        <List className='w-[40px] h-[40px]' />
      </button>

      <div className={`w-full h-1/3 ${isTimeShow? 'bg-teal-500' : 'bg-teal-900' } flex flex-col ontainer gap-4 ${isTimeShow? 'disc' : 'noShow'}`}>
        <div className={`w-[10rem] h-[10rem] md:w-[15rem] md:h-[15rem] mx-auto bg-black/40 rounded-full flex justify-center items-center mt-4 
        ${isTimeShow? 'disc' : 'noShow'}`}>
          {musicCurrent.bannerUrl && <Image src={musicCurrent.bannerUrl} alt={musicCurrent.title} width={100} height={100} className={`absolute w-[10rem] h-[10rem] md:w-[15rem] md:h-[15rem] rounded-full ${isTimeShow && 'spiner'}`} />}
          <span className={`w-[2rem] h-[2rem] bg-black rounded-full z-10 ${isTimeShow? 'disc' : 'noShow'}` }/>
        </div>
        
        {isTimeShow && musicCurrent.title != undefined && 
        <div className='cube z-50 '>
        <div className="wall top"></div>
        <div className="wall bottom"></div>
        <div className="wall side1" ></div>
        <div className="wall side2" ></div>
        <div className="wall side3" ></div>
        <div className="wall side4" ></div>
      </div> }

        <div className={`h-full w-[4rem] bg-teal-800 absolute right-0 z-[-2] ${isTimeShow? 'disc' : 'noShow'}`} />
        <div className={`h-[4rem] w-[full] bg-teal-900 rounded-tr-full ${isTimeShow? 'disc' : 'noShow'}`} />
        <div className={`absolute h-full w-full bg-black/20 ${isTimeShow? 'disc' : 'noShow'}`} />
      </div>
      <div className="lg:h-[600px] h-[400px] bg-gray-900 border-gray-800 md:flex justify-center items-center hidden">
        <span className='p-4 bg-black rounded-xl border-4 border-purple-500'>
        <h2 className='lg:text-6xl text-2xl bg-gradient-to-r from-yellow-400 via-teal-500 bg-clip-text text-transparent to-purple-500'><b className='text-gray-200 text-base flex'>Tocando agora: </b>{musicCurrent.title}</h2>
        </span>
      </div>
      <div className='flex overflow-hidden'>
        <div className={`flex flex-col overflow-scroll scrollab bg-teal-900 py-12 gap-8 overflow-x-hidden w-full ${isTimeShow? 'disc' : 'noShow'}`}>
          {children}

                
        </div>

        <div className="h-full md:w-[150px]  bg-gray-900 md:border-l-[40px] border-gray-800" />
      </div>
    </section>
  )
}

export default Center

/*
className={`bg-teal-900 w-full h-full flex flex-col  overflow-scroll overflow-x-hidden justify-center ${isTimeShow? 'disc' : 'noShow'} scrollab`}*/