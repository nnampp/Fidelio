import music from "../public/music-playing.gif"

export default function listentosong() {
   return (
      <>

         <div className="bg-[#131318] w-full h-screen">
            <div className="max-w-screen-xl mx-auto">
               <div className="flex flex-row items-center h-screen justify-center">
                  <div className="w-[1221px] h-[652px] rounded-[40px]" style={{ backgroundColor: 'rgba(187, 187, 187, 0.1)' }}>

                     <div className="flex flex-row">
                        <img src={music.src} alt="" className="w-[621px] h-[576px] rounded-[30px] ml-9 mt-9" />

                        <div className="flex flex-col">
                           <div className="flex flex-row">
                              <img src="kakabath.png" alt="" className=" w-[17px] h-[16.37px] ml-[516px] mt-[28px] " />
                              </div>
                              <div className="flex flex-row">
                                 <img src="Group 11.jpg" alt="" className=" rounded-[10px] w-[124px] h-[112px] ml-[111px] mt-[127.63px] " />
                                 <div className="flex flex-col">
                                    <p className="text-[40px] font-Commissioner font-bold text-[#FFFFFF] ml-[38px] mt-[140px] ">Song Name</p>
                                    <p className="text-[24px] font-Commissioner font-Semibold text-[#FFFFFF]  ml-[38px] mt-[คpx] ">Artist</p>
                                 </div>

                              </div>
                           
                           <div className="flex flex-row">
                              <img src="before.png" alt="" className=" w-[49px] h-[40px] ml-[173px] mt-[116px] " />
                              <img src="Pause.png" alt="" className=" w-[62px] h-[62px] ml-[36px] mt-[105px] " />
                              <img src="after.png" alt="" className=" w-[49px] h-[40px] ml-[36px] mt-[116px] " />
                           </div>
                           <div className="flex flex-row">
                              <p className="text-[13px] font-Commissioner font-Semibold text-[#FFFFFF] ml-[38px] mt-[44px] ">01.50</p>
                              <div></div>
                              <p className="text-[13px] font-Commissioner font-Semibold text-[#FFFFFF] ml-[432px] mt-[44px] ">03.50</p>
                           </div>
                        </div>
                     </div>


                  </div>
               </div>



            </div>
         </div>


      </>
   )
}

