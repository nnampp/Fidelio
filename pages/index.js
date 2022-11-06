import Test from "../components/Test"
import { Dropdown } from "flowbite-react";
import logo from "../public/Logo.png"
import Music from "../components/Music";
import { useRef, useState } from "react";


export default function Home() {
   const audioPlayer = useRef();
   const [value, setValue] = useState(0);
   const MAX = 200;
   const getBackgroundSize = () => {
      return {
         backgroundSize: `${(value * 100) / MAX}% 100%`
      };
   };

   function play() {
      // var audio = document.getElementById('a1');
      // audio.play();
      audioPlayer.current.play();
   }
   function pause() {
      // var audio = document.getElementById('a1');
      // audio.play();
      audioPlayer.current.pause();
   }
   return (
      <>
         <button className=" bg-black text-white w-[70px] h-[30px]" id='a1' onClick={play}>Play</button>
         <div></div>
         <button className=" bg-black text-white w-[70px] h-[30px]" id='a1' onClick={pause}>Pause</button>
         <audio ref={audioPlayer} src="/Time.mp3" id="a1" preload="metadata">Your browser do not support
         </audio>
         <div>

         </div>
         <input type="range" min="0" max={MAX} onChange={(e) => setValue(e.target.value)} style={getBackgroundSize()}
            value={value} className=" sliderWithLabels" id="" />
         <div className="w-[20px] h-[20px] test"  ></div>
      </>

   )
}
