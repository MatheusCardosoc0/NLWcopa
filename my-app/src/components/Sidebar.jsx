import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <div className='text-gray-500 p-5 text-sm border-r border-gray-900'>
        <button className="flex items-center space-x-2 hover:text-white">
          Home
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          Buscar
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          Sua livraria
        </button>
        <hr className='border-t-[0.1px] border-gray-900' />

        <button className="flex items-center space-x-2 hover:text-white">
          Criar playlist
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          Seus episodios
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          Sons marcados com gostei
        </button>
        <hr className='border-t-[0.1px] border-gray-900' />

        <p className='cursor-pointer hover:text-white'>Nome da playlist</p>
        <p className='cursor-pointer hover:text-white'>Nome da playlist</p>
        <p className='cursor-pointer hover:text-white'>Nome da playlist</p>
        <p className='cursor-pointer hover:text-white'>Nome da playlist</p>
        <p className='cursor-pointer hover:text-white'>Nome da playlist</p>
        <p className='cursor-pointer hover:text-white'>Nome da playlist</p>
      </div>
    </div>
  )
}

export default Sidebar
