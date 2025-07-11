import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-center bg-gray-900/80 text-white border-b border-white/10 w-full'>
        <div className='logo font-bold text-2xl mt-2'>
          <span className='text-green-700'> &lt;</span>
          <span>Pass</span><span className='text-green-700'>OP/&gt;</span>
        </div>
        <span className='flex justify-center items-center'>created with <img className='w-6 m-2 mx-1' src="icons/heart.png" alt="" /> by arpit prakash</span>
    </footer>
  )
}

export default Footer
