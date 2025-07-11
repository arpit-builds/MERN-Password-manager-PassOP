import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-900/80 text-white border-b border-white/10'>
      <div className="mycontainer flex justify-between items-center py-3 px-1">
        <div className='logo font-bold text-2xl'>
          <span className='text-green-700'> &lt;</span>
          <span>Pass</span>
          <span className='text-green-700'>OP/&gt;</span>
        </div>
        <button className='github flex items-center gap-2 rounded-full py-1 px-2 text-white bg-green-800 ring-white ring-1'>
          <img className='w-8 invert' src="icons/github.svg" alt="" />
          <span>Github</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar