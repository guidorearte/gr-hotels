import React from 'react'

const Navbar = () => {
  return (
    <nav className='py-11 z-50 bg-white fixed w-full'>
    <div className='float-left ml-16'>
     <h1 className='font-semibold text-3xl text-sky-950'>GR Hotels</h1>
     </div>
    
    <div className='text-yellow-700 float-right mr-16 '>
    <ul className='none  '>
    <a href="#about">  <li className='float-left ml-4'>ABOUT</li></a>
    <a href="#services">  <li className='float-left ml-4'>SERVICES</li></a>
       <a href="#rooms"> <li className='float-left ml-4'>OUR ROOMS</li></a>
      </ul>
    </div>
    </nav>
  )
}

export default Navbar