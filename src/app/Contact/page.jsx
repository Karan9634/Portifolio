"use client"
import Link from "next/link"
import Image from "next/image" 
import {useState} from "react";

import {Poppins} from 'next/font/google'

const roboto = Poppins({
    subsets: ['latin'],
    weight: ['400','700'],
})

const contact = () => {
    const [showAlert,setShowAlert] = useState(false)
    
    const handleCopy = async () => {
        try{
            await navigator.clipboard.writeText("9193108557");
            setShowAlert(true);
            setTimeout(()=> setShowAlert(false),3000);
        }catch(err){
            console.error("failed to copy",err);
        }
    };

    return (
        <div className={roboto.className}>
            <div className="bg-[#2b2a33] relative">
           <div className="h-[100vh] w-[100vw] flex items-center justify-center gap-10">
                <div ><Image src="/abbbb.gif" alt="..." width={400} height={400}></Image></div>
                <div className="text-center w-[225px] h-[250px] m-2 rounded-[15]  shadow-black shadow-2xl bg-[#1e1e26]">
                    <div className="pl-23 p-4"><Image src="/2.png" alt="gmail" width={40} height={40}></Image></div>
                    <p className="p-2 text-white text-[15px] font-mono">Mail</p>
                    <p className="text-[13px] p-2 text-[#9ca3af]">Lorem ipsum dolor sit amet, consectetur elit.</p>
                    <Link href="https://mail.google.com/mail/u/0/#inbox"><button className="p-4 text-[#7DD3FC] text-[14px]">kb7500033981@gmail.com</button></Link>
                </div>
                <div className="text-center w-[225px] h-[250px] m-2 rounded-[15]  shadow-black shadow-2xl bg-[#1e1e26]">
                    <div className="pl-23 p-4"><Image src="/1.png" alt="gmail" width={40} height={40}></Image></div>
                    <p className="p-2 text-white text-[15px] font-mono">Call</p>
                    <p className="text-[13px] p-2 text-[#9ca3af]">Lorem ipsum dolor sit amet, consectetur elit.</p>
                    <button className="p-4 text-[#7DD3FC] text-[14px]" onClick={handleCopy}>+91 9193108557</button>
                </div>
           </div>
        </div>
        </div>
    )
}

export default contact


//  {showAlert && (
//         <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
//           ✅ Copied successfully!
//         </div>
//       )}