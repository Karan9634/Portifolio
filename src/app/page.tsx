import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/Footer.jsx"
import '@/app/globals.css'

import {Poppins} from 'next/font/google'
import {IBM_Plex_Mono} from 'next/font/google'
import {Fira_Code} from 'next/font/google'

const roboto = Poppins({
    subsets: ['latin'],
    weight: ['400','700'],
})

const roboto2 = Fira_Code({
    subsets:['latin'],
    weight:['400','700']
})

const Home = () =>{
  return (
    <div className={roboto.className}>
      <div className="bg-[#1e1e26] w-[100vw] h-[100vh] flex justify-center items-center">
        <div className="relative w-[50vw] h-[50vh]">
         <div className={roboto2.className}> <div className="text-6xl text-white absolute left-70 top-8 z-20 w-[20vw]">Hello World!</div></div>
          <div className="flex flex-row">
            <div className=""><Image src="/aabbcc.gif" alt="..." width={400} height={400}></Image></div>
          <div className="">
            <div className="border-l-2 text-[#9ca3af] flex flex-col justify-center items-center absolute bottom-0 text-[14px]">
            <p className="p-3">I'm <span className="text-[#7DD3FC]"> Karan Bisht </span> ,a UI designer,frontend web developer and an illustrator</p>
            <Link href="/"><button className=" bg-[#7DD3FC] rounded-[3px] font-bold p-2 text-[#1e1e26] cursor-pointer hover:scale-95">Download CV</button></Link>
          </div>
          </div>
          </div>
        </div>
        <Footer/>
      </div>
      <div className="absolute top-0 right-0 p-10 mt-6">
        <div className="bg-[#7DD3FC] w-[20vh] h-[20vh] rounded-[15px] rotate"></div>
      </div>
    </div>
  )
}

export default Home;

