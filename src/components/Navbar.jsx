import React from "react"    // JSX Syntax Support
import Link from "next/link"     // ?
import Image from "next/image"                      // for importing my favrote font...

import {Poppins} from 'next/font/google'

const roboto = Poppins({
    subsets: ['latin'],
    weight: ['400','700'],
})

const Navbar = () => {
    return (
        <>
        <div className={roboto.className}>
            <div className="absolute top-0 left-0 w-full text-[18px] p-2 z-20 bg-[#ffffff10]">
            <ul className=" flex justify-center gap-50 text-[#9ca3af]">
                <Link href="/"><li className="text-[#7DD3FC]">Home</li></Link>
                <Link href="/About"><li>About</li></Link>
                <Link href="/Contact"><li>Contact</li></Link>
            </ul>
        </div>
        </div>
        </>
    )
}

export default Navbar