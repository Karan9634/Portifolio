import {Poppins} from '@next/font/google'

const roboto = Poppins({
    subsets: ['latin'],
    weight: ['400','700'],
})

const Skillbar = ({ per,p }) => {
    return (
      <div className={roboto.className}>
        <div className="flex gap-2 text-[#7DD3FC] font-bold p-1">
        <div className="w-[30vw] h-[1.5vh] bg-[#2b2a33] rounded-[3px]">
          <div
            className="bg-[#7DD3FC] h-[1.5vh] rounded-[3px]"
            style={{ width: `${per}%` }}
          ></div>
        </div>
        <div className="font-light text-xs">{p}%</div>
      </div>
      </div>
    );
  };
  
  export default Skillbar;
  