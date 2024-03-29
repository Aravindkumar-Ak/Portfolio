"use client"

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Projects } from '../constants';


const Page = () => {
  return (
    <div
    style={{ backgroundImage: "url(/bg.jpg)" }}
    className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
  >
    <div className="flex flex-col gap-20 max-w-[80%] text-center items-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 text-[25px] md:text-[50px]">
         Projects
        </h1>
        
      </div >
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={5000}
        modules={[Autoplay]}
        className="max-w-[80%]"
      >
        {Projects.map((project, index) => (
          <SwiperSlide key={index}>
             
            {/* <Image 
            src={project.src}
            alt={project.title}
            width={400}
            height={400}
           
           
            /> */}
            <div className='relative flex justify-center h-[150px] w-[60%] md:h-[400px] md:w-[75%] bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-20 border border-gray-100'>
          
               <p className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500 text-12 md:text-[50px] absolute top-[32%]'>{project.title}</p>
               </div>
          </SwiperSlide>
        ))}
      </Swiper>
 
    </div>
  </div>
  )
}

export default Page