import Image from 'next/image'
import Skillbar from '@/components/Skillbar.jsx'
import Link from 'next/link'

import {Poppins} from 'next/font/google'

const roboto = Poppins({
    subsets: ['latin'],
    weight: ['400','700'],
})

const contact = () => {
    return (
        <div className={roboto.className}>
            <div className="w-[100vw] h-[100vh] bg-[#2b2a33] flex flex-col justify-center items-center">
                <div className="w-[50vw] h-[40vh] bg-[#1e1e26] rounded-2xl flex flex-col justify-center items-center shadow-2xl">
                <h1 className="text-2xl p-1 text-white ">About Me</h1>
                <p className="text-[#9ca3af] text-[13px] text-center pl-20 pr-20 p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos similique sit cumque eligendi, inventore quod, natus corporis minus. Voluptatum minus culpa beatae unde! Optio hic ipsa sunt fugit expedita, earum quas corporis dolores iste maxime ratione nemo commodi!</p>
                <div className="flex hover:scale-140">
                    <Link href="https://www.google.com/maps/place/Subhash+Chandra+Bose+hostel,+graphic+era/@30.2712842,77.9977652,17z/data=!3m1!4b1!4m6!3m5!1s0x39092b00197434e5:0x7083baa9a8f1d61a!8m2!3d30.2712842!4d77.9977652!16s%2Fg%2F11y3__8wzx?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D"><button className="cursor-pointer text-[#7DD3FC] pt-2 text-[15px]">Address</button></Link>
                    <div className="pt-2.5"><Image src="/3.png" alt="..." width={15} height={15}></Image></div>
                </div>
                </div>
            </div>
            <div>
                <div className="w-[100vw] h-[100vh] bg-[#1e1e26] flex  justify-center items-center">
                    <div className="p-4"><Image src="/aabb.gif" alt="..." width={300} height={300}></Image></div>
                    <div className="">
                        <h1 className="m-2 font-bold text-white text-[20px]">SKILLS</h1>
                        <div className="text-white text-[12px]">JAVA</div>
                        <div className="m-1"><Skillbar per={50} p={50}/></div>
                        <div className="text-white text-[12px]">C++</div>
                        <div className="m-1"><Skillbar per={70} p={70}/></div>
                        <div className="text-white text-[12px]">DSA</div>
                        <div className="m-1"><Skillbar per={90} p={90}/></div>
                        <div className="text-white text-[12px]">WEB-DEV</div>
                        <div className="m-1"><Skillbar per={75} p={75}/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contact