import React from 'react'

const Navbar = () => {
  return (
      <div className='bg-white max-w-screen-2xl rounded m-5 flex items-center justify-center p-3 gap-4'>
        <img src="./logo.svg" alt="" />
        <h1 className='text-[20px] font-medium'>Firebase Contact App</h1>
      </div>
  )
}

export default Navbar
