import Test from "../components/Test"
import { Dropdown } from "flowbite-react";
import logo from "../public/Logo.png"
import Music from "../components/Music";

export default function Home() {
   const test = [
      {
         name: "I love you 3000",
         artist: "someone",
         time: "3:46"
      },
   
   ];
   return (
      <>
         <img src={logo.src} alt="" className="w-[70px] h-[70px]" />
         <input type="text" className="bg-[#2C2E47] w-[658px] h-[95px] rounded-[10px] border-[#D6D5E8] border text-[36px] leading-[33px] text-[#FFFFFF] font-League_Spartan font-medium   focus:outline-none" placeholder="What do you want to listen to ?" />
         <input type="text" className="bg-[#2C2E47]  w-[434px] h-[53px]  border border-gray-400 rounded-[10px] pl-[16px] px-[16px] text-[#FFFFFF] focus:ring-[#5D37AC] focus:ring focus:text-white focus:outline-none focus:outline-[0px] " placeholder="Enter your username" />
         <input type="text" className="placeholder-gray-500 p-3 m-2 rounded-lg 
                    border-2 border-gray-400 bg-green-100
                    focus:outline-none" placeholder="Enter your username" />
         <input className="placeholder-gray-500 p-3 m-2 rounded-lg 
                    border-2 border-gray-400 bg-green-100
                    focus:outline-none" type="text"
            placeholder="Ouline-none" />

         <Music/>
      </>

   )
}
