import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import icon_home from '../public/icon_home.svg'
import icon_search from '../public/icon_search.svg'
import arrow_down from '../public/arrow_down.svg'
import arrow_up from '../public/arrow_up.svg'
import logo from "../public/Logo.png"
import Link from 'next/link'

export default function Navbar() {
   return (
      <>
         <div className="fixed top-0 w-full bg-[#000000] h-[99px] z-10 max-w-screen-xl mx-auto">
            <div className="flex flex-row justify-between items-center h-full">
               <img src={logo.src} alt="" className="w-[70px] h-[70px] ml-[45px]" />
               <div className="flex flex-row gap-[23px]">
                  <Link href="/home" >
                     <div className="flex flex-row items-center gap-[15px] h-full cursor-pointer">
                        <img src={icon_home.src} alt="icon home" className="w-[35px] h-[35px]"/>
                        <div className=" font-League_Spartan text-[40px] text-[#FFFFFF] font-bold leading-[37px]">Home</div>
                     </div>
                  </Link>
                  <Link href="/search" >
                     <div className="flex flex-row items-center gap-[15px] h-full cursor-pointer">
                        <img src={icon_search.src} alt="icon search" className="w-[26px] h-[25px]"/>
                        <div className="cursor-pointer font-League_Spartan text-[40px] text-[#FFFFFF] font-bold leading-[37px]">Search</div>
                     </div>
                  </Link>
               </div>
               <Popover className="relative mr-[30px]">
                  {({ open }) => (
                     <>
                        <Popover.Button className={`${open ? '' : ''} relative rounded-[30px] bg-[#1C1C1C] w-[128px] h-[61px] border-2 border-[#585757] hover:bg-[#585757] focus:outline-none`}>
                           <div className='absolute -left-[1px] top-0'>
                              <div className="rounded-[30px] overflow-hidden w-[60px] h-[60px]">
                                 <div style={{ backgroundImage: `url(/profiles/Cat-profile.png)` }} className="bg-cover w-full h-full bg-center"></div>
                              </div>
                           </div>
                           <div className="absolute top-[24px] right-[21px]  w-[17px] h-[10px]">
                              <img src={`${open ? arrow_up.src : arrow_down.src}`} alt="" className="" />
                           </div>
                        </Popover.Button>
                        <Transition
                           as={Fragment}
                           enter="transition ease-out duration-200"
                           enterFrom="opacity-0 translate-y-1"
                           enterTo="opacity-100 translate-y-0"
                           leave="transition ease-in duration-150"
                           leaveFrom="opacity-100 translate-y-0"
                           leaveTo="opacity-0 translate-y-1"
                        >
                           <Popover.Panel className="absolute right-0 top-[71px] w-[192px] h-[188px] bg-[#1C1C1C] z-10">
                              <div className="flex flex-col ml-[17px] mt-[21px]">
                                 <div className=" font-League_Spartan text-[24px] font-bold text-[#FFFFFF] leading-[22px] mb-[19px]">
                                    Anmym
                                 </div>
                                 <div className="flex flex-col gap-[5px] font-League_Spartan text-[#FFFFFF] mb-[18px]">
                                    <p className="text-[12px] font-bold leading-[11px]">Full Name</p>
                                    <p className="text-[11px] font-normal leading-[10px]">Natthamol &nbsp; Sungthong</p>
                                 </div>
                                 <div className="flex flex-col gap-[5px] font-League_Spartan text-[#FFFFFF] mb-[13px]">
                                    <p className="text-[12px] font-bold leading-[11px]">E-mail</p>
                                    <p className="text-[11px] font-normal leading-[10px]">natthamol.46@mail.kmutt.ac.th</p>
                                 </div>
                                 <div className="w-[160px] h-[1px] mb-[9px] bg-[#C6C7DA] opacity-[40%]"></div>
                                 <div className="font-League_Spartan text-[#FFFFFF] text-[24px] font-bold leading-[22px]">Log out</div>
                              </div>
                           </Popover.Panel>
                        </Transition>
                     </>
                  )}
               </Popover>
            </div>
            <div className="bg-[#C6C7DA] w-full h-[1px]"></div>
         </div>

      </>
   )
}
