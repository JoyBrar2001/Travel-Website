import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const ImageSlider = () => {
    const slides = [
        {
          url: 'https://images.unsplash.com/photo-1464093515883-ec948246accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2659&q=80',
          title: 'Lobster',
        },
        {
          url: 'https://images.unsplash.com/photo-1512132411229-c30391241dd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
          title: 'Sushi',
        },
        {
          url: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
          title: 'Pasta',
        },
        {
          url: 'https://images.unsplash.com/photo-1539136788836-5699e78bfc75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
          title: 'Salmon',
        },
      ];

      const [currentIndex, setCurrentIndex] = useState(0);

      const prevslide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      }
      
      const nextslide = () => {
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      }

      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      }
      
  return (
    <div className='max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative'>
        <h1 className='font-bold text-3xl md:text-5xl lg:text-6xl pb-10 text-center'>Some of our Finest Cousines</h1>

      <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500' style={{backgroundImage: `url(${slides[currentIndex].url})`}}>
        <div className='relative w-full h-full bg-gradient-to-t from-black/60 via-black/0 flex justify-center items-end'>
            <p className='text-3xl pb-4 font-semibold'>Name of the Dish comes here</p>
        </div>
      </div>

      <div className='absolute top-[50%] translate-x-0 trnaslate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevslide} size={30} />
      </div>
      <div className='absolute top-[50%] translate-x-0 trnaslate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextslide} size={30} />
      </div>

      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide,slideIndex) => (
            <div className='text-2xl cursor-pointer' key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                <RxDotFilled className={slideIndex === currentIndex ? 'opacity-100' : 'opacity-30'}/>
            </div>
        ))}
      </div>

    </div>
  )
}

export default ImageSlider
