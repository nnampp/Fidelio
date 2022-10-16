import Navbar from "../components/Navbar"
import button_play from "../public/button_play.svg"
import icon_headphone from "../public/icon_headphone.svg"
const test = [
   {
      song_name: "I love you 3000",
      artist: "someone",
      time: "3:46"
   },

];

export default function home() {
   return (
      <>
         <div className="bg-[#2D106A] h-screen overflow-hidden">
            <div className="mx-auto max-w-screen-xl">
               <div className="w-full h-screen bg-gradient-to-b from-[#000000] via-[#100526] to-[#1C0943] rounded-[10px]">
                  <Navbar />
                  <div className="overflow-y-scroll h-screen mt-[101px] scrollbar scrollbar-width-2"> {/* part Song */}
                     {/* <div className="mt-[10px]"> */}
                     <div className="flex flex-row items-center h-[132px] w-full">
                        <div className="basis-5/6">
                           <div className="flex flex-row items-center">
                              <a href="#" className="ml-[49px]">
                                 <img src={button_play.src} alt="" className="w-[62px] h-[62px]" />
                              </a>
                              <div className="ml-[69px] w-[80px] h-[80px] bg-gradient-to-b from-[#4180DB] via-[#586DBB] to-[#8A68CF] rounded-[10px]">
                                 <div className="flex flex-row justify-center items-center w-full h-full">
                                    <img src={icon_headphone.src} alt="" className="w-[62px] h-[62px]" />
                                 </div>
                              </div>
                              <div className="ml-[45px] flex flex-col gap-[9px] font-League_Spartan text-[#FFFFFF]">
                                 <p className="text-[32px] font-bold leading-[29px]">Song name</p>
                                 <p className="text-[24px] font-normal leading-[22px]">Artist</p>
                              </div>
                           </div>
                        </div>
                        <div className="basis-1/6">
                           <div className="flex flex-row justify-end items-center">
                              <p className="mr-[82px] font-Commissioner font-normal text-[#FFFFFF] text-[24px] leading-[29px]">3:27</p>
                           </div>
                        </div>
                     </div>
                     <div className="w-full h-[1px] bg-[#C6C7DA] opacity-40 z-0"></div>
                     {/* </div> */}

                     <div className="flex flex-row items-center h-[132px] w-full">
                        <div className="basis-5/6">
                           <div className="flex flex-row items-center">
                              <a href="#" className="ml-[49px]">
                                 <img src={button_play.src} alt="" className="w-[62px] h-[62px]" />
                              </a>
                              <div className="ml-[69px] w-[80px] h-[80px] bg-gradient-to-b from-[#4180DB] via-[#586DBB] to-[#8A68CF] rounded-[10px]">
                                 <div className="flex flex-row justify-center items-center w-full h-full">
                                    <img src={icon_headphone.src} alt="" className="w-[62px] h-[62px]" />
                                 </div>
                              </div>
                              <div className="ml-[45px] flex flex-col gap-[9px] font-League_Spartan text-[#FFFFFF]">
                                 <p className="text-[32px] font-bold leading-[29px]">Song name</p>
                                 <p className="text-[24px] font-normal leading-[22px]">Artist</p>
                              </div>
                           </div>
                        </div>
                        <div className="basis-1/6">
                           <div className="flex flex-row justify-end items-center">
                              <p className="mr-[82px] font-Commissioner font-normal text-[#FFFFFF] text-[24px] leading-[29px]">3:27</p>
                           </div>
                        </div>
                     </div>
                     <div className="w-full h-[1px] bg-[#C6C7DA] opacity-40 z-0"></div>

                     <div className="flex flex-row items-center h-[132px] w-full">
                        <div className="basis-5/6">
                           <div className="flex flex-row items-center">
                              <a href="#" className="ml-[49px]">
                                 <img src={button_play.src} alt="" className="w-[62px] h-[62px]" />
                              </a>
                              <div className="ml-[69px] w-[80px] h-[80px] bg-gradient-to-b from-[#4180DB] via-[#586DBB] to-[#8A68CF] rounded-[10px]">
                                 <div className="flex flex-row justify-center items-center w-full h-full">
                                    <img src={icon_headphone.src} alt="" className="w-[62px] h-[62px]" />
                                 </div>
                              </div>
                              <div className="ml-[45px] flex flex-col gap-[9px] font-League_Spartan text-[#FFFFFF]">
                                 <p className="text-[32px] font-bold leading-[29px]">Song name</p>
                                 <p className="text-[24px] font-normal leading-[22px]">Artist</p>
                              </div>
                           </div>
                        </div>
                        <div className="basis-1/6">
                           <div className="flex flex-row justify-end items-center">
                              <p className="mr-[82px] font-Commissioner font-normal text-[#FFFFFF] text-[24px] leading-[29px]">3:27</p>
                           </div>
                        </div>
                     </div>
                     <div className="w-full h-[1px] bg-[#C6C7DA] opacity-40 z-0"></div>

                     <div className="flex flex-row items-center h-[132px] w-full">
                        <div className="basis-5/6">
                           <div className="flex flex-row items-center">
                              <a href="#" className="ml-[49px]">
                                 <img src={button_play.src} alt="" className="w-[62px] h-[62px]" />
                              </a>
                              <div className="ml-[69px] w-[80px] h-[80px] bg-gradient-to-b from-[#4180DB] via-[#586DBB] to-[#8A68CF] rounded-[10px]">
                                 <div className="flex flex-row justify-center items-center w-full h-full">
                                    <img src={icon_headphone.src} alt="" className="w-[62px] h-[62px]" />
                                 </div>
                              </div>
                              <div className="ml-[45px] flex flex-col gap-[9px] font-League_Spartan text-[#FFFFFF]">
                                 <p className="text-[32px] font-bold leading-[29px]">Song name</p>
                                 <p className="text-[24px] font-normal leading-[22px]">Artist</p>
                              </div>
                           </div>
                        </div>
                        <div className="basis-1/6">
                           <div className="flex flex-row justify-end items-center">
                              <p className="mr-[82px] font-Commissioner font-normal text-[#FFFFFF] text-[24px] leading-[29px]">3:27</p>
                           </div>
                        </div>
                     </div>
                     <div className="w-full h-[1px] bg-[#C6C7DA] opacity-40 z-0"></div>

                     <div className="flex flex-row items-center h-[132px] w-full">
                        <div className="basis-5/6">
                           <div className="flex flex-row items-center">
                              <a href="#" className="ml-[49px]">
                                 <img src={button_play.src} alt="" className="w-[62px] h-[62px]" />
                              </a>
                              <div className="ml-[69px] w-[80px] h-[80px] bg-gradient-to-b from-[#4180DB] via-[#586DBB] to-[#8A68CF] rounded-[10px]">
                                 <div className="flex flex-row justify-center items-center w-full h-full">
                                    <img src={icon_headphone.src} alt="" className="w-[62px] h-[62px]" />
                                 </div>
                              </div>
                              <div className="ml-[45px] flex flex-col gap-[9px] font-League_Spartan text-[#FFFFFF]">
                                 <p className="text-[32px] font-bold leading-[29px]">Song name</p>
                                 <p className="text-[24px] font-normal leading-[22px]">Artist</p>
                              </div>
                           </div>
                        </div>
                        <div className="basis-1/6">
                           <div className="flex flex-row justify-end items-center">
                              <p className="mr-[82px] font-Commissioner font-normal text-[#FFFFFF] text-[24px] leading-[29px]">3:27</p>
                           </div>
                        </div>
                     </div>
                     <div className="w-full h-[1px] bg-[#C6C7DA] opacity-40 z-0"></div>

                     <div className="flex flex-row items-center h-[132px] w-full">
                        <div className="basis-5/6">
                           <div className="flex flex-row items-center">
                              <a href="#" className="ml-[49px]">
                                 <img src={button_play.src} alt="" className="w-[62px] h-[62px]" />
                              </a>
                              <div className="ml-[69px] w-[80px] h-[80px] bg-gradient-to-b from-[#4180DB] via-[#586DBB] to-[#8A68CF] rounded-[10px]">
                                 <div className="flex flex-row justify-center items-center w-full h-full">
                                    <img src={icon_headphone.src} alt="" className="w-[62px] h-[62px]" />
                                 </div>
                              </div>
                              <div className="ml-[45px] flex flex-col gap-[9px] font-League_Spartan text-[#FFFFFF]">
                                 <p className="text-[32px] font-bold leading-[29px]">Song name</p>
                                 <p className="text-[24px] font-normal leading-[22px]">Artist</p>
                              </div>
                           </div>
                        </div>
                        <div className="basis-1/6">
                           <div className="flex flex-row justify-end items-center">
                              <p className="mr-[82px] font-Commissioner font-normal text-[#FFFFFF] text-[24px] leading-[29px]">3:27</p>
                           </div>
                        </div>
                     </div>
                     <div className="w-full h-[1px] bg-[#C6C7DA] opacity-40 z-0"></div>

                     <div className="flex flex-row items-center h-[132px] w-full">
                        <div className="basis-5/6">
                           <div className="flex flex-row items-center">
                              <a href="#" className="ml-[49px]">
                                 <img src={button_play.src} alt="" className="w-[62px] h-[62px]" />
                              </a>
                              <div className="ml-[69px] w-[80px] h-[80px] bg-gradient-to-b from-[#4180DB] via-[#586DBB] to-[#8A68CF] rounded-[10px]">
                                 <div className="flex flex-row justify-center items-center w-full h-full">
                                    <img src={icon_headphone.src} alt="" className="w-[62px] h-[62px]" />
                                 </div>
                              </div>
                              <div className="ml-[45px] flex flex-col gap-[9px] font-League_Spartan text-[#FFFFFF]">
                                 <p className="text-[32px] font-bold leading-[29px]">Song name</p>
                                 <p className="text-[24px] font-normal leading-[22px]">Artist</p>
                              </div>
                           </div>
                        </div>
                        <div className="basis-1/6">
                           <div className="flex flex-row justify-end items-center">
                              <p className="mr-[82px] font-Commissioner font-normal text-[#FFFFFF] text-[24px] leading-[29px]">3:27</p>
                           </div>
                        </div>
                     </div>
                     <div className="w-full h-[1px] bg-[#C6C7DA] opacity-40 z-0"></div>

                     <div className="flex flex-row items-center h-[132px] w-full">
                        <div className="basis-5/6">
                           <div className="flex flex-row items-center">
                              <a href="#" className="ml-[49px]">
                                 <img src={button_play.src} alt="" className="w-[62px] h-[62px]" />
                              </a>
                              <div className="ml-[69px] w-[80px] h-[80px] bg-gradient-to-b from-[#4180DB] via-[#586DBB] to-[#8A68CF] rounded-[10px]">
                                 <div className="flex flex-row justify-center items-center w-full h-full">
                                    <img src={icon_headphone.src} alt="" className="w-[62px] h-[62px]" />
                                 </div>
                              </div>
                              <div className="ml-[45px] flex flex-col gap-[9px] font-League_Spartan text-[#FFFFFF]">
                                 <p className="text-[32px] font-bold leading-[29px]">Song name</p>
                                 <p className="text-[24px] font-normal leading-[22px]">Artist</p>
                              </div>
                           </div>
                        </div>
                        <div className="basis-1/6">
                           <div className="flex flex-row justify-end items-center">
                              <p className="mr-[82px] font-Commissioner font-normal text-[#FFFFFF] text-[24px] leading-[29px]">3:27</p>
                           </div>
                        </div>
                     </div>
                     <div className="w-full h-[1px] bg-[#C6C7DA] opacity-40 z-0"></div>

                     <div className="flex flex-row items-center h-[132px] w-full">
                        <div className="basis-5/6">
                           <div className="flex flex-row items-center">
                              <a href="#" className="ml-[49px]">
                                 <img src={button_play.src} alt="" className="w-[62px] h-[62px]" />
                              </a>
                              <div className="ml-[69px] w-[80px] h-[80px] bg-gradient-to-b from-[#4180DB] via-[#586DBB] to-[#8A68CF] rounded-[10px]">
                                 <div className="flex flex-row justify-center items-center w-full h-full">
                                    <img src={icon_headphone.src} alt="" className="w-[62px] h-[62px]" />
                                 </div>
                              </div>
                              <div className="ml-[45px] flex flex-col gap-[9px] font-League_Spartan text-[#FFFFFF]">
                                 <p className="text-[32px] font-bold leading-[29px]">Song name</p>
                                 <p className="text-[24px] font-normal leading-[22px]">Artist</p>
                              </div>
                           </div>
                        </div>
                        <div className="basis-1/6">
                           <div className="flex flex-row justify-end items-center">
                              <p className="mr-[82px] font-Commissioner font-normal text-[#FFFFFF] text-[24px] leading-[29px]">3:27</p>
                           </div>
                        </div>
                     </div>
                     <div className="w-full h-[1px] bg-[#C6C7DA] opacity-40 z-0"></div>

                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
