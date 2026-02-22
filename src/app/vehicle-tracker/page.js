import Image from "@/components/BasePathImage"

const page = () => {
    return (
        <>
            <div className="w-full flex  flex-col items-center bg-[#0c0c0c] md:px-32 px-5 pt-40">
                <h1 className="text-white font-[Sahonme-d] text-left md:text-[64px] md:leading-[70px]  text-3xl font-semibold">
                    Cellular Vehicle Tracker Project
                </h1>
                <Image src="/vt.jpg" width={500} height={400} className="md:w-[calc(100vw - 400px)] rounded-2xl w-full h-full py-16 md:px-40 px-10"></Image>
            </div>

            <div className="bg-[#0c0c0c] md:px-32 px-5 flex flex-col gap-5 pb-20">
                <h1 className="text-white opacity-[.4] font-[Sahonme-Buch] text-3xl">Overview</h1>
                <p className="font-[Sahonme-Leicht] text-lg text-white">
                    The Cellular Vehicle Tracker is an innovative solution designed for real-time vehicular tracking. Engineered with precision, it employs advanced GPS technology coupled with cellular network capabilities to deliver consistent location monitoring. This device ensures a high level of security and peace of mind for vehicle owners and fleet managers. This project was an designed to satisfy a requirement for the award of bachelors of engineering (electrical and computer) from Ahmadu Bello University.
                </p>
            </div>

            <div className="bg-[#0c0c0c] md:px-32 px-5 flex flex-col gap-5 pb-20">
                <h1 className="text-white opacity-[.4] font-[Sahonme-Buch] text-3xl">Features</h1>
                <ul className="tex-white list-disc flex flex-col gap-5 pl-5">
                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        <span className="font-[Sahonme-Buch]">Real-time GPS Tracking:</span> Offers precise location tracking to monitor vehicles continuously.
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        <span className="font-[Sahonme-Buch]">Cellular Connectivity:</span> Leverages wide-area cellular networks for dependable communication.
                    </li>
                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        <span className="font-[Sahonme-Buch]"> Compact and Discreet:</span> The small form factor allows for unobtrusive installation in any vehicle.
                    </li>
                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        <span className="font-[Sahonme-Buch]"> Intuitive LED Indicators:</span> Equipped with status-indicating LEDs for GPS and cellular network signals.
                    </li>
                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        <span className="font-[Sahonme-Buch]">USB Interface:</span> Facilitates convenient configuration and firmware updates.
                    </li>
                </ul>

            </div>

            <div className="bg-[#0c0c0c] md:px-32 px-5 flex flex-col gap-5 pb-20">
                <h1 className="text-white opacity-[.4] font-[Sahonme-Buch] text-3xl">Development Process</h1>
                <p className="font-[Sahonme-Leicht] text-lg text-white">
                The development of the Cellular Vehicle Tracker involved an iterative process focused on user-centric design principles. The goal was to craft a reliable device that requires minimal interaction and provides maximum functionality. Durability testing under various conditions was a key part of the process to ensure product resilience. 
                </p>
            </div>

            <div className="bg-[#0c0c0c] md:px-32 px-5 flex flex-col gap-5 pb-20">
                <h1 className="text-white opacity-[.4] font-[Sahonme-Buch] text-3xl">Applications</h1><ul className="tex-white list-disc flex flex-col gap-5 pl-5">
                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        <span className="font-[Sahonme-Buch]">Personal Vehicle Tracking:</span> Know your vehicle's location for security and peace of  mind. 
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        <span className="font-[Sahonme-Buch]">Stolen Vehicle Recovery:</span> Aid in the quick recovery of stolen assets. 
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        <span className="font-[Sahonme-Buch]">Rental Car Monitoring: </span> Monitor the usage and location of rental vehicles. 
                    </li>
                </ul>
            </div>

            <div className="bg-[#0c0c0c] md:px-32 px-5 flex flex-col gap-5 pb-20">
                <h1 className="text-white opacity-[.4] font-[Sahonme-Buch] text-3xl">Contribution</h1>
                <p className="font-[Sahonme-Leicht] text-lg text-white">My contributions on this project includes:</p>
                <ul className="tex-white list-disc flex flex-col gap-5 pl-5">
                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                    	Integration of microcontroller, cellular modem, and GPS module. 
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Coming up with a power budget for the system.  
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Writing code for tracker unit in C++. 
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                    	Writing the server  code that links the base station and tracker unit in  Python. 
                    </li>
                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                    	Developing a visualization code that in PHP that sits on a local PC. 
                    </li>
                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                    	Writing a technical report documenting the entire process. 
                    </li>
                </ul>
            </div>

            <div className="bg-[#0c0c0c] md:px-32 px-5 flex flex-col gap-5 pb-20 pr-5">
                <h1 className="text-white opacity-[.4] font-[Sahonme-Buch] text-3xl">Gallery</h1>
                {/* <div className="flex gap-4 flex-wrap">
                    <Image src="/one.jpg" width={400} height={400}></Image>
                    <Image src="/two.jpg" width={500} height={400}></Image>
                    <Image src="/three.png" width={400} height={400}></Image>
                    <Image src="/four.jpg" width={500} height={400}></Image>
                </div> */}
            </div>
        </>
    )
}

export default page

