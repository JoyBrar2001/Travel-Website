import React from 'react';

const Hero = () => {
  return (
    <div className='w-full h-screen overflow-x-hidden'>
      <img className='top-0 left-0 w-full h-screen object-cover' src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg" alt="" />
      <div className='absolute top-0 left-0 w-full h-full bg-black/30' />

        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
            <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                <p>All Inclusive</p>
                <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Beaches & Getaways</h1>
                <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque officia qui debitis. Ipsum sequi ratione vel excepturi sit eaque quasi.</p>
                <button className='bg-white text-black'>Reserve Now</button>
            </div>
        </div>

    </div>
  );
}

export default Hero;
