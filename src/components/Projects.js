import Image from '@/components/BasePathImage'
import Link from 'next/link'
import React from 'react'
import Marquee from 'react-fast-marquee'

const Projects = () => {
    return (
        <div className='w-full bg-[#0c0c0c] md:px-24 px-5 -mt-3'>
            <Marquee className='flex py-20 overflow-y-hidden items-center' gradient="true" gradientColor="#0c0c0c" >
                <h1 className='text-white text-4xl mx-4  mt-2 font-[Sahonme-Leicht] md:text-[70px] text-[48px]'>Recent Projects</h1>
                <Image src="/icons8-asterisk-96.png" width={80} height={80} alt='asterick' className='w-10 md:w-20'></Image>
                <h1 className='text-gray-600 text-4xl mx-4 mt-2  font-[Sahonme-Leicht] md:text-[70px] text-[48px]'>Recent Projects</h1>
                <Image src="/icons8-asterisk-96.png" width={80} height={80} alt='asterick' className='w-10 md:w-20'></Image>
                <h1 className='text-white text-4xl mx-4 mt-2  font-[Sahonme-Leicht] md:text-[70px] text-[48px]'>Recent Projects</h1>
                <Image src="/icons8-asterisk-96.png" width={80} height={80} alt='asterick' className='w-10 md:w-20'></Image>
                <h1 className='text-gray-600 text-4xl mx-4 mt-2  font-[Sahonme-Leicht] md:text-[70px] text-[48px]'>Recent Projects</h1>
                <Image src="/icons8-asterisk-96.png" width={80} height={80} alt='asterick' className='w-10 md:w-20'></Image>
                <h1 className='text-white text-4xl mx-4 mt-2  font-[Sahonme-Leicht] md:text-[70px] text-[48px]'>Recent Projects</h1>
                <Image src="/icons8-asterisk-96.png" width={80} height={80} alt='asterick' className='w-10 md:w-20'></Image>
                <h1 className='text-gray-600 text-4xl mx-4 mt-2  font-[Sahonme-Leicht] md:text-[70px] text-[48px]'>Recent Projects</h1>
                <Image src="/icons8-asterisk-96.png" width={80} height={80} alt='asterick' className='w-10 md:w-20'></Image>
            </Marquee>

            <div className='w-full flex items-center justify-center md:px-36 px-5'>
                <div className='w-full h-[0.1px] bg-white md:-mt-20 -mt-28'></div>
            </div>

            <div className='md:px-36 px-5 pb-48 flex flex-col gap-8'>

                <div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-4'>
                            <h1 className='font-[Sahonme-Buch] md:text-3xl text-xl text-white'>01</h1>
                            <Link href="/visionmate" className='font-[Sahonme-Buch] md:text-3xl text-xl text-white capitalize'>VisionMate AI-Powered Smart Glasses</Link>
                        </div>
                        <Link href="/visionmate" className='font-[Sahonme-Buch] text-md text-[#e1f03b] uppercase hidden md:flex hover:tracking-wide transition-[3s]'>View Project <i className="ri-arrow-right-s-line"></i></Link>
                    </div>
                    <div className='flex md:flex-row flex-col mt-5 gap-4'>
                        <Image src="/visionmate-main.jpg" className='w-full md:w-[400px]' width={600} height={350} alt='VisionMate smart glasses'></Image>
                    </div>
                </div>
                <div className='w-full h-[0.1px] bg-white opacity-60'></div>

                <div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-4'>
                            <h1 className='font-[Sahonme-Buch] md:text-3xl text-xl text-white'>02</h1>
                            <Link href="/ground-project" className='font-[Sahonme-Buch] md:text-3xl text-xl text-white capitalize'>Unmanned Ground Vehicle</Link>
                        </div>
                        <Link href="/ground-project" className='font-[Sahonme-Buch] text-md text-[#e1f03b] uppercase hidden md:flex hover:tracking-wide transition-[3s]'>View Project <i className="ri-arrow-right-s-line"></i></Link>
                    </div>
                    <div className='flex md:flex-row flex-col mt-5 gap-4'>
                        <Image src="/ulv.jpg" className='w-full md:w-[300px]' width={200} height={400} alt='uav'></Image>
                    </div>
                </div>
                <div className='w-full h-[0.1px] bg-white opacity-60'></div>

                <div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-4'>
                            <h1 className='font-[Sahonme-Buch] md:text-3xl text-xl text-white'>03</h1>
                            <Link href="/swarm-system" className='font-[Sahonme-Buch] md:text-3xl text-xl text-white'>UAV Swarm System</Link>
                        </div>
                        <Link href="/swarm-system" className='font-[Sahonme-Buch] text-md text-[#e1f03b] uppercase hidden md:flex hover:tracking-wide transition-[3s]'>View Project <i className="ri-arrow-right-s-line"></i></Link>
                    </div>
                    <div className='flex md:flex-row flex-col md:ml-5 gap-4'>
                        <Image src="/uav.jpg" className='w-full md:w-[300px] rotate-90 pl-10' width={200} height={600} alt='uav'></Image>
                    </div>
                </div>

                <div className='w-full h-[0.1px] bg-white opacity-60'></div>

                <div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-4'>
                            <h1 className='font-[Sahonme-Buch] md:text-3xl text-xl text-white'>04</h1>
                            <Link href="/vehicle-tracker" className='font-[Sahonme-Buch] md:text-3xl text-xl text-white'>Cellular Vehicle Tracker</Link>
                        </div>

                        <Link href="/vehicle-tracker" className='font-[Sahonme-Buch] text-md text-[#e1f03b] uppercase hidden md:flex hover:tracking-wide transition-[3s]'>View Project <i className="ri-arrow-right-s-line"></i></Link>
                    </div>
                    <div className='flex md:flex-row flex-col mt-5 gap-4'>
                        <Image src="/vt.jpg" className='w-full md:w-[400px]' width={400} height={600} alt='uav'></Image>
                    </div>
                </div>


                <div className='w-full h-[0.1px] bg-white opacity-60'></div>

                <div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-4'>
                            <h1 className='font-[Sahonme-Buch] md:text-3xl text-xl text-white'>05</h1>
                            <Link href="/envast" className='font-[Sahonme-Buch] md:text-3xl text-xl text-white capitalize'>Envast Educational Project</Link>
                        </div>

                        <Link href="/envast" className='font-[Sahonme-Buch] text-md text-[#e1f03b] uppercase hidden md:flex hover:tracking-wide transition-[3s]'>View Project <i className="ri-arrow-right-s-line"></i></Link>
                    </div>
                    <div className='flex md:flex-row flex-col mt-5 gap-4'>
                        <Image src="/e.jpg" className='w-full md:w-[400px]' width={400} height={600} alt='uav'></Image>
                    </div>
                </div>

                <div className='w-full h-[0.1px] bg-white opacity-60'></div>

                <div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-4'>
                            <h1 className='font-[Sahonme-Buch] md:text-3xl text-xl text-white'>06</h1>
                            <Link href="/space-x" className='font-[Sahonme-Buch] md:text-3xl text-xl text-white capitalize'>IBM Data Science Capstone Project: SpaceX Launch Analysis</Link>
                        </div>

                        <Link href="/space-x" className='font-[Sahonme-Buch] text-md text-[#e1f03b] uppercase hidden md:flex hover:tracking-wide transition-[3s]'>View Project <i className="ri-arrow-right-s-line"></i></Link>
                    </div>
                    <div className='flex md:flex-row flex-col mt-5 gap-4'>
                        <Image src="/s.jpg" className='w-full md:w-[400px]' width={400} height={600} alt='uav'></Image>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects

