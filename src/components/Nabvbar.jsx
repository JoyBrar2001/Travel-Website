import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';

const Nabvbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = 'scroll';
    }
  }

  return (
    <div className='absolute w-full flex justify-between p-4 items-center overflow-x-hidden'>
      <h1 className='text-white font-bold text-2xl z-20'>Experiences</h1>
      <HiMenuAlt3 size={25} className='z-20 text-white cursor-pointer' onClick={handleNav} />
      <div className={nav ? 'fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/80 px-4 py-7 flex-col ease-out duration-500 z-10' : 'absolute bg-black/80 top-0 h-screen w-full left-[-100%] ease-in duration-500 z-10'}>
        <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
          <li className='font-bold text-3xl p-8'>Home</li>
          <li className='font-bold text-3xl p-8'>Destinations</li>
          <li className='font-bold text-3xl p-8'>Reservations</li>
          <li className='font-bold text-3xl p-8'>Amenities</li>
          <li className='font-bold text-3xl p-8'>Rooms</li>
        </ul>
      </div>
    </div>
  );
}

export default Nabvbar;
