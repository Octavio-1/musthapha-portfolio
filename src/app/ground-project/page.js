import Image from "@/components/BasePathImage"

const page = () => {
    return (
        <>
            <div className="w-full flex  flex-col items-center bg-[#0c0c0c] md:px-32 px-5 pt-40">
                <h1 className="text-white font-[Sahonme-d] md:text-[64px] md:leading-[70px]  text-3xl font-semibold">UNMANNED GROUND VEHICLE (UGV) FOR EXPLORATION PROJECT</h1>
                <Image src="/ulv.jpg" width={500} height={400} className="md:w-[calc(100vw - 400px)] rounded-2xl w-full h-full py-16 md:px-40 px-10"></Image>
            </div>

            <div className="bg-[#0c0c0c] md:px-32 px-5 flex flex-col gap-5 pb-20">
                <h1 className="text-white opacity-[.4] font-[Sahonme-Buch] text-3xl">Overview</h1>
                <p className="font-[Sahonme-Leicht] text-lg text-white">
                    The Unmanned Ground Vehicle (UGV) is a vehicle that operates while in contact with the ground without an on-board human presence. This vehicle has a set of sensors to observe the environment, and will either autonomously make decisions about their behaviour or pass the information to a human operator at a different location who will control the vehicle through teleoperation.
                    The UGV for this project is able to achieve full automation and it can also be manually controlled.
                </p>
            </div>

            <div className="bg-[#0c0c0c] md:px-32 px-5 flex flex-col gap-5 pb-20">
                <h1 className="text-white opacity-[.4] font-[Sahonme-Buch] text-3xl">Features</h1>
                <ul className="tex-white list-disc flex flex-col gap-5 pl-5">
                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Manual Navigation
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Autonomous navigation
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Object Identification
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Obstacle Avoidance
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Hazmat Detection
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Environment variables monitoring (Temperature, Humidity, Pressure.)
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Night vision capability
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Object identification
                    </li>
                </ul>

            </div>

            <div className="bg-[#0c0c0c] md:px-32 px-5 flex flex-col gap-5 pb-20">
                <h1 className="text-white opacity-[.4] font-[Sahonme-Buch] text-3xl">Development Process</h1>
                <p className="font-[Sahonme-Leicht] text-lg text-white">
                    The development of an Unmanned Aerial Vehicle involved an iterative process focused on user-centric design principles. The goal was to craft a reliable device that requires minimal interaction and provides maximum functionality. Durability testing under various conditions was a key part of the process to ensure product resilience.
                </p>
            </div>

            <div className="bg-[#0c0c0c] md:px-32 px-5 flex flex-col gap-5 pb-20">
                <h1 className="text-white opacity-[.4] font-[Sahonme-Buch] text-3xl">Applications</h1><ul className="tex-white list-disc flex flex-col gap-5 pl-5">
                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        <span className="font-[Sahonme-Buch]">Military Applications:</span> ISR, scouting, demining
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        <span className="font-[Sahonme-Buch]">Emergency Response:</span> Hazmat exposure, navigation tight spaces, tunnel exploration.
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        <span className="font-[Sahonme-Buch]">Agriculture: </span> Land profiling.
                    </li>
                </ul>
            </div>

            <div className="bg-[#0c0c0c] md:px-32 px-5 flex flex-col gap-5 pb-20">
                <h1 className="text-white opacity-[.4] font-[Sahonme-Buch] text-3xl">Contribution</h1>
                <p className="font-[Sahonme-Leicht] text-lg text-white">My contributions on this project includes:</p>
                <ul className="tex-white list-disc flex flex-col gap-5 pl-5">
                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Integration of the electrical and drive system
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Coming up with a power budget for the system
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Integrated object identification algorithm
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Writing code for the payload subsystem unit in C++
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Configuration of radio links
                    </li>
                    <li className="font-[Sahonme-Leicht] text-lg text-white">	
                        Configuration of the autopilot
                    </li>
                    <li className="font-[Sahonme-Leicht] text-lg text-white">	Developing a visualization code in PHP for visualizing sensor codes</li>
                    <li className="font-[Sahonme-Leicht] text-lg text-white">Troubleshooting the system</li>
                    <li className="font-[Sahonme-Leicht] text-lg text-white">Piloting the UGV</li>
                    <li className="font-[Sahonme-Leicht] text-lg text-white">Writing a technical report documenting the entire process</li>

                </ul>
            </div>

            <div className="bg-[#0c0c0c] md:px-32 px-5 flex flex-col gap-5 pb-20 pr-5">
                <h1 className="text-white opacity-[.4] font-[Sahonme-Buch] text-3xl">Gallery</h1>
                <div className="flex gap-4 flex-wrap">
                    <Image src="/one.jpg" width={400} height={400}></Image>
                    <Image src="/two.jpg" width={500} height={400}></Image>
                    <Image src="/three.png" width={400} height={400}></Image>
                    <Image src="/four.jpg" width={500} height={400}></Image>
                    <Image src="/uaaaav.jpeg" width={500} height={400}></Image>
                </div>
            </div>
        </>
    )
}

export default page

