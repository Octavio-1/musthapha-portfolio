import Image from "@/components/BasePathImage"

const page = () => {
    return (
        <>
            <div className="w-full flex  flex-col items-center bg-[#0c0c0c] md:px-32 px-5 pt-40">
                <h1 className="text-white font-[Sahonme-d] md:text-[64px] md:leading-[70px]  text-3xl font-semibold">UNMANNED AERIAL VEHICLE (UAV) SWARM PROJECT</h1>
                <Image src="/uav.jpg" width={500} height={400} className="md:w-[calc(100vw - 400px)] rounded-2xl w-full h-full rotate-90 md:px-40 px-10"></Image>
            </div>

            <div className="bg-[#0c0c0c] md:px-32 px-5 flex flex-col gap-5 pb-20">
                <h1 className="text-white opacity-[.4] font-[Sahonme-Buch] text-3xl">Overview</h1>
                <p className="font-[Sahonme-Leicht] text-lg text-white">This UAV Swarm System project unveils a cutting-edge development in the field of autonomous aerial vehicles. A sophisticated ensemble of drones, engineered to operate in harmony, represents the pinnacle of collaborative technology. Each UAV in the swarm is an epitome of modern design, equipped with advanced flight control systems, enabling complex maneuvers and strategic formations. The project underscores a significant leap in unmanned aerial operations, embodying efficiency, intelligence, and adaptability.</p>
            </div>

            <div className="bg-[#0c0c0c] md:px-32 px-5 flex flex-col gap-5 pb-20">
                <h1 className="text-white opacity-[.4] font-[Sahonme-Buch] text-3xl">Features</h1>
                <ul className="tex-white list-disc flex flex-col gap-5 pl-5">
                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        <span className="font-[Sahonme-Buch]">Autonomous Swarm Intelligence:</span> Integrated systems enable independent UAVs to function as a cohesive unit, adapting to complex flight patterns and environmental cues.
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        <span className="font-[Sahonme-Buch]">Dynamic Communication Network:</span>  A robust communication framework ensures seamless interaction within the swarm, facilitating instantaneous collective decision-making.
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        <span className="font-[Sahonme-Buch]">Scalable Architecture: </span> The system is designed to effortlessly expand, managing an increasing number of UAVs without compromising performance.
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        <span className="font-[Sahonme-Buch]">Sophisticated Obstacle Navigation: </span> State-of-the-art sensors provide real-time spatial awareness, allowing the swarm to navigate challenging terrains.
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        <span className="font-[Sahonme-Buch]">Multipurpose Functionality: </span> Tailored for versatility, the swarm is capable of executing a variety of missions, ranging from environmental monitoring to precision agriculture.
                    </li>
                </ul>

            </div>

            <div className="bg-[#0c0c0c] md:px-32 px-5 flex flex-col gap-5 pb-20">
                <h1 className="text-white opacity-[.4] font-[Sahonme-Buch] text-3xl">Development Process</h1>
                <p className="font-[Sahonme-Leicht] text-lg text-white">From conception to execution, the development of the UAV Swarm System involved an iterative approach. Simulation models were meticulously crafted to forecast the dynamics of swarm behavior. Prototype drones were then subjected to a series of stringent tests, both in controlled environments and in-field trials, ensuring reliability and durability. The collaborative effort of experts in drone technology, artificial intelligence, and aerospace engineering was instrumental in refining the UAVs for operational excellence.</p>
            </div>

            <div className="bg-[#0c0c0c] md:px-32 px-5 flex flex-col gap-5 pb-20">
                <h1 className="text-white opacity-[.4] font-[Sahonme-Buch] text-3xl">Applications</h1>
                <p className="font-[Sahonme-Leicht] text-lg text-white">The versatility of the UAV Swarm System opens up a spectrum of applications:</p>
                <ul className="tex-white list-disc flex flex-col gap-5 pl-5">
                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        <span className="font-[Sahonme-Buch]">Enviromental Conservation:</span> Real-time monitoring and data collection for ecosystem management.
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        <span className="font-[Sahonme-Buch]">Emergency Response:</span> Rapid deployment in disaster scenarios for search and rescue operations.
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        <span className="font-[Sahonme-Buch]">Travel Survelliance: </span> Aerial oversight of traffic flows to aid in urban planning.
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        <span className="font-[Sahonme-Buch]">Military Reconnaissance: </span> Distributed sensing capabilities for tactical advantage.
                    </li>
                </ul>
            </div>

            <div className="bg-[#0c0c0c] md:px-32 px-5 flex flex-col gap-5 pb-20">
                <h1 className="text-white opacity-[.4] font-[Sahonme-Buch] text-3xl">Contribution</h1>
                <p className="font-[Sahonme-Leicht] text-lg text-white">My contributions on this project includes:</p>
                <ul className="tex-white list-disc flex flex-col gap-5 pl-5">
                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Integrating the camera payload
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Swarm algorithm formulation
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Setting up simulation environment for UAV flight missions
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Hardware debugging
                    </li>
                </ul>
            </div>

            <div className="bg-[#0c0c0c] md:px-32 px-5 flex flex-col gap-5 pb-20 pr-5">
                <h1 className="text-white opacity-[.4] font-[Sahonme-Buch] text-3xl">Gallery</h1>
                <div className="flex gap-4 flex-wrap">
                    <Image src="/uav.jpg" width={400} height={400}></Image>
                    <Image src="/uavs.jpg" width={500} height={400}></Image>
                    <Image src="/uav.png" width={400} height={400}></Image>
                    <Image src="/uaav.jpg" width={500} height={400}></Image>
                </div>
            </div>
        </>
    )
}

export default page

