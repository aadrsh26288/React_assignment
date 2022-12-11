import React from 'react'
import{HiOutlineUserCircle} from 'react-icons/hi'
const Header = () => {
  return (
    <header className="bg-red-900 text-white flex items-center justify-between p-4 px-6">
      <div className="flex items-center gap-4">
        <div className="h-7 w-7 rounded-md bg-[#d9d9d9] "></div>
        <h1 className='text-xl font-semibold'>Medical Darpan</h1>
      </div>

      <div className="flex  items-center gap-8 text-lg">
        <p>Home</p>
        <p>Projects</p>
        <p>Distributors</p>
        <p>Manufacturers</p>
        <p>About us</p>
        <p>Blog</p>
      </div>
      
      <div className='flex items-center justify-between gap-4'>
        <p className="text-lg">Login</p>
        <HiOutlineUserCircle className='text-3xl' />
        
      </div>
     
    </header>
  )
}

export default Header