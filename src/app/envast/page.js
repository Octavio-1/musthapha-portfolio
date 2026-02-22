import Image from "@/components/BasePathImage"

const page = () => {
    return (
        <>
            <div className="w-full flex  flex-col items-center bg-[#0c0c0c] md:px-32 px-5 pt-40">
                <h1 className="text-white font-[Sahonme-d] md:text-[64px] md:leading-[70px]  text-3xl font-semibold">ENVSAT EDUCATIONAL PROJECT</h1>
                <Image src="/e.jpg" width={500} height={400} className="md:w-[calc(100vw - 400px)] rounded-2xl w-full h-full py-16 md:px-40 px-10"></Image>
            </div>

            <div className="bg-[#0c0c0c] md:px-32 px-5 flex flex-col gap-5 pb-20">
                <h1 className="text-white opacity-[.4] font-[Sahonme-Buch] text-3xl">Overview</h1>
                <p className="font-[Sahonme-Leicht] text-lg text-white">
                The Envsat is a project that was undertaken to give students hand-on experience in tube sat design, build and operation. It is an environmental mini satellite that is capable of measuring humidity, temperature and altitude. It is battery-powered and has a rectangular frame that is made of of verboard stacks with plasic standoffs. Data obtained from the sensor are sent from the Envsat to the a ground station using Wi-Fi.
                </p>
            </div>

            <div className="bg-[#0c0c0c] md:px-32 px-5 flex flex-col gap-5 pb-20">
                <h1 className="text-white opacity-[.4] font-[Sahonme-Buch] text-3xl">Features</h1>
                <ul className="tex-white list-disc flex flex-col gap-5 pl-5">
                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Temperature Measurement
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Humidity Measurement
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Altitude Measurement
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Wireless data transfer
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                    	Data store and forward capability
                    </li>

            
                </ul>

            </div>

            <div className="bg-[#0c0c0c] md:px-32 px-5 flex flex-col gap-5 pb-20">
                <h1 className="text-white opacity-[.4] font-[Sahonme-Buch] text-3xl">Development Process</h1>
                <p className="font-[Sahonme-Leicht] text-lg text-white">
                The development of the Envsat involved an iterative process focused on user-centric design principles. The goal was to craft a reliable device that requires minimal interaction and provides maximum functionality. Durability testing under various conditions was a key part of the process to ensure product resilience.
                </p>
            </div>

            <div className="bg-[#0c0c0c] md:px-32 px-5 flex flex-col gap-5 pb-20">
                <h1 className="text-white opacity-[.4] font-[Sahonme-Buch] text-3xl">Applications</h1><ul className="tex-white list-disc flex flex-col gap-5 pl-5">
                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        <span className="font-[Sahonme-Buch]">Educational:</span> Giving students hand-on experience
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        <span className="font-[Sahonme-Buch]">Data Collection:</span> Collecting sensor data for analysis
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        <span className="font-[Sahonme-Buch]">Research: </span> Mini sat development research.
                    </li>
                </ul>
            </div>

            <div className="bg-[#0c0c0c] md:px-32 px-5 flex flex-col gap-5 pb-20">
                <h1 className="text-white opacity-[.4] font-[Sahonme-Buch] text-3xl">Contribution</h1>
                <p className="font-[Sahonme-Leicht] text-lg text-white">My contributions on this project includes:</p>
                <ul className="tex-white list-disc flex flex-col gap-5 pl-5">
                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Leading the payload and on-board data handling teams.
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Drafting project objectives and milestones
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Writing code for the payload subsystem unit in C++
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Project management via Trello
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Guiding students in writing presentation of the project
                    </li>
                </ul>
            </div>

            <div className="bg-[#0c0c0c] md:px-32 px-5 flex flex-col gap-5 pb-20 pr-5">
                <h1 className="text-white opacity-[.4] font-[Sahonme-Buch] text-3xl">Gallery</h1>
                <div className="flex gap-4 flex-wrap">
                    <Image src="/e.jpg" width={400} height={400}></Image>
                    <Image src="/e2.jpg" width={500} height={400}></Image>
                    <Image src="/e3.jpg" width={400} height={400}></Image>
                </div>
            </div>
        </>
    )
}

export default page

