import React from 'react'
import { MdHotelClass } from "react-icons/md";

const Footer = () => {
  return (
    <footer className='pt-12 grid grid-cols-3 bg-sky-950 pb-32 max-lg:grid-cols-1'>
    <div className='ml-14 max-lg:ml-0'>
      <p className='text-white text-5xl'>GR Hotels <MdHotelClass /><MdHotelClass /></p>
    </div>
    <div className='text-white max-lg:mt-8'>
      <p>63 Westney Road, Mangere, Auckland 2022 <br></br>
     Domestic (Freephone): 0800 538 466 <br></br>
      International: +64 9 275 4100 </p>
    </div>
<div className='grid grid-cols-3 text-white mr-14 max-sm:mr-0 max-lg:grid-cols-1'>
<div className='max-lg:mt-8'>
  <p>Health & Safety</p>
  <p>Our People</p>
</div>  
 <div>
  <p>Careers</p>
  <p>Blog</p>
</div> 
<div>
<p>Contact</p>
<p>Cookies</p>
<p>Terms & Conditions</p>
<p className='mt-32 max-lg:mt-32'>Developed by Guido Rearte</p>
</div>
</div>
  </footer>
  )
}

export default Footer