import React from 'react'
import headphone from '../public/headphone.png'

export default function Import() {
   return (
      <>
         <div className="w-full h-screen bg-black ">
            <div className="bg-center w-full h-screen bg-cover" style={{ backgroundImage: `url(/bg-import.png)` }}>
               <div className="max-w-screen-xl mx-auto bg-slate-400">
                  <div>
                     
                  </div>
                  <div className="flex flex-col w-full h-full items-center pt-[410px]">
                     {/* enter link */}
                     <div className='flex flex-col items-start gap-[4px] mb-[47px] ml-[182px]'>
                        <input type="text" className="bg-[#2C2E47]  w-[721px] h-[71px] border border-[#D6D5E8] rounded-[10px] pl-[35px] py-[18px] text-[#FFFFFF] font-Commissioner text-[20px] focus:ring-[#5D37AC] focus:ring focus:text-white focus:outline-none " placeholder="Enter your link here!!" required />
                     </div>
                     {/* enter song,artist */}
                     <div className='flex flex-row gap-[65px] mb-[63px] ml-[182px]'>
                        <div className='flex flex-col items-start'>
                           <input type="text" className="bg-[#2C2E47] w-[328px] h-[71px] border border-[#D6D5E8] rounded-[10px] pl-[35px] py-[18px] text-[#FFFFFF] font-Commissioner text-[20px] focus:ring-[#5D37AC] focus:ring focus:text-white focus:outline-none " placeholder="Song name" required />
                        </div>
                        <div className='flex flex-col items-start'>
                           <input type="text" className="bg-[#2C2E47] w-[328px] h-[71px] border border-[#D6D5E8] rounded-[10px] pl-[35px] py-[18px] text-[#FFFFFF] font-Commissioner text-[20px] focus:ring-[#5D37AC] focus:ring focus:text-white focus:outline-none " placeholder="Artist" required />
                        </div>
                     </div>
                     <button type="upload" className="ml-[182px] w-[265px] h-[68px] rounded-[50px] text-[24px] text-[#FFFFFF] font-medium font-League_Spartan bg-gradient-to-r from-[#F68FF2] via-[#A35AAD] to-[#1565D8] focus:ring focus:ring-[#5D37AC]" >Upload</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}