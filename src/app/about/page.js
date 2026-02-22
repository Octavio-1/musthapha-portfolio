"use client"
import Image from '@/components/BasePathImage';
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
// import '@splidejs/react-splide/css/skyblue';
// import '@splidejs/react-splide/css/sea-green';
// import '@splidejs/react-splide/css/core';

const page = () => {
  return (
    <div className='bg-[#0c0c0c] py-48 md:px-40 px-6 flex items-center justify-center flex-col'>
      <div className=''>
        <h1 className='text-white font-[Sahonme-Buch] md:text-[70px] text-[48px]'>About Mustapha</h1>
        <Image src="/musthapha.jpg" width="800" height="500" alt="mustha" className='text-center items-center' ></Image>
        <p className='text-white mt-10 font-[Sahonme-Leicht] text-lg font-semibold'>
          I'm Mustapha Ochimana, a research engineer with a half-decade of experience spanning across various high-technology sectors. My expertise lies deeply rooted in the realms of Artificial Intelligence, encompassing both hardware and systems, as well as in the specialized field of space systems and electronics. With a collaborative history of working alongside diverse, multidisciplinary teams, ranging from product management and procurement to research and engineering. I excel at synergizing corporate objectives with consumer and user necessities. My proficiency ensures the delivery of solutions that are both simple in their user experience and exhaustive in their operational completeness, covering all aspects from inception to deployment.
        </p>

        <div className='flex flex-col md:flex-row gap-10 mt-10'>
          <Image src="/p1.png" alt="pic1" width={500} height={700}></Image>
          <Image src="/p2.jpg" alt="pic2" width={500} height={700}></Image>
        </div>

        <p className='text-white mt-10 font-[Sahonme-Leicht] text-lg font-semibold'>
          In addition to creating and managing systems, I've honed my skills in bridging the divide between engineering, design, and product delivery, ensuring that the interest of all key stakeholders are considered. My passion for my work is immense, as I'm perpetually seeking innovative methods to solve problems. I do this by exploring and experimenting with fresh platforms, trends, and ideas. You'll find that my communication skills are top-notch. I'm an excellent team contributor, and I'm profoundly committed to organizational through the attainment of it’s goals.
          As a personal responsibility to the next generation, I coach kids on how to use program drones - small UAVs and UGVs - using Scratch during the weekends. You might also find me engaging in a game of FIFA or cheering my favorite football club, Chelsea, during the weekend.
        </p>

        <Splide className='mt-20'>
          <SplideSlide>
            <Image src="/pic3.jpg" alt="pic1" width={1000} height={700}></Image>
          </SplideSlide>
          <SplideSlide>
            <Image src="/pic4.jpg" alt="pic1" width={1000} height={700} className=' rotate-90'></Image>
          </SplideSlide>
          <SplideSlide>
            <Image src="/pic5.jpg" alt="pic2" width={1000} height={700} className='rotate-180'></Image>
          </SplideSlide>
          <SplideSlide>
            <Image src="/pic6.jpg" alt="pic2" width={1000} height={700}></Image>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  )
}

export default page

