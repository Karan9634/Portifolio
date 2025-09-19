import React from "react"    // JSX Syntax Support
import Link from "next/link"     // ?
import Image from "next/image"     

// for importing my favrote font...

const Navbar = () => {
    return (
        <>
        <div className="absolute bottom-4 left-0 w-full text-xl font-bold">
            <ul className=" flex justify-end gap-5 text-[#7DD3FC]">
                <li>.......................................................................................................................................................................................................................................</li>
                <Link href="/"><li className="hover:scale-125"><Image src="/a.png" alt="..." width={30} height={30}></Image></li></Link>
                <Link href="/"><li className="hover:scale-125"><Image src="/c.png" alt="..." width={30} height={30}></Image></li></Link>
                <Link href="/"><li className="hover:scale-125"><Image src="/aa.png" alt="..." width={30} height={30}></Image></li></Link>
                <li>..........</li>
            </ul>
        </div>
        </>
    )
}

export default Navbar