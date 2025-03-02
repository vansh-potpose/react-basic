import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between px-10 bg-green-700 text-white py-2'>
      <div className='font-bold'>ITodo</div>
      <nav>
        <ul className='flex gap-9'>
            <li className='hover:scale-110 font-semibold transition-all duration-200'>Home</li>
            <li className='hover:scale-110 font-semibold transition-all duration-200'>Your Tasks</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
