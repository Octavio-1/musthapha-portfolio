"use client";
import Projects from "@/components/Projects";
import Image from "@/components/BasePathImage";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true
    });
  }, [])
  return (
    <>
      <div className="flex  flex-col items-center p-5 bg-[#0c0c0c] pt-40">
        <h1 className="md:text-[100px] text-[56px] text-center text-white font-[Sahonme-Extrafelt] uppercase" data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">AI Engineer </h1>
        <h1 className="md:text-[80px] text-[36px] text-white font-[Sahonme-Extrafelt] uppercase text-center" data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1250"
          data-aos-easing="ease-in-out">Hardware & Systems</h1>
        <p className="text-white md:text-5xl px-0 text-xl mb-5 font-[Sahonme-Buch] text-center md:px-48 capitalize md:leading-[60px]" data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out">One algorithm at a time. 🤖 #AIEngineer</p>
        <Image data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1600"
          data-aos-easing="ease-in-out" src="/m.png" className="mt-3" width={400} height={100} />
      </div>

      <Projects />
    </>
  );
}

