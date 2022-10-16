import Navbar from "../components/Navbar"


export default function search() {
   return (
      <>
         <div className="bg-[#2D106A] h-screen overflow-hidden">
            <div className="mx-auto max-w-screen-xl">
               <div className="w-full h-screen bg-gradient-to-b from-[#000000] via-[#100526] to-[#1C0943] rounded-[10px]">
                  <div className="flex flex-col items-center justify-center h-full">
                     <div className="font-League_Spartan font-bold text-[#FFFFFF] text-[64px] leading-[59px] mb-[88px]">Search</div>
                     <input type="text" className="bg-[#2C2E47] w-[658px] h-[95px] rounded-[10px] border-[#D6D5E8] border text-[36px] leading-[33px] text-[#FFFFFF] font-League_Spartan font-medium focus:bg-[#FFFFFF] focus:border-[#2C2E47] focus:outline-none" placeholder="What do you want to listen to ?" />
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
