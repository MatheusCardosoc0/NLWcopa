import React, { useRef } from 'react'
const Center = ({children}) => {


  




  return (
    <section className='w-full h-screen flex flex-col'>
      <div className='w-full h-1/3 bg-teal-700 flex flex-col ontainer gap-4'>
        <div className='w-[15rem] h-[15rem] mx-auto bg-black/40 rounded-full flex justify-center items-center mt-4 disc' >
          <span className='w-[2rem] h-[2rem] bg-black rounded-full disc' />
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



        <div className='h-full w-[4rem] bg-teal-800 absolute right-0 z-[-2]' />
        <div className='h-[4rem] w-[full] bg-teal-900 rounded-tr-full' />
        <div className='absolute h-full w-full bg-black/20 disc' />
      </div>
      <div className='bg-gradient-to-tr from-gray-600 to-gray-900 w-full h-full flex flex-col overflow-scroll overflow-x-hidden'>

       {children}

      </div>
    </section>
  )
}

export default Center