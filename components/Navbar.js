import { Popover, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { parseCookies } from 'nookies'
import { useRouter } from 'next/router'
import cookie from 'js-cookie'
import icon_home from '../public/icon_home.svg'
import icon_search from '../public/icon_search.svg'
import arrow_down from '../public/arrow_down.svg'
import arrow_up from '../public/arrow_up.svg'
import logo from "../public/Logo.png"
import Link from 'next/link'
import door from "../public/icon_door.svg"

export default function Navbar() {
   const [showLogout, setShowLogout] = useState(0);
   const [name, setName] = useState('');
   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const router = useRouter()

   const cookieuser = parseCookies()
   const user =  cookieuser.user ? JSON.parse(cookieuser.user) : ""
   const tok = cookieuser.token;

   if(!tok) {
     handleLogout();
   }

   useEffect(() => { 
      setName(user.Name); 
      setUsername(user.Username); 
      setEmail(user.Email); 
   } , [])

   //Function Logout
   async function handleLogout() {
      console.log("logout!");
      cookie.remove('token');
      cookie.remove('user');
      if(user.Role=='Admin')
         router.push('/signin-admin');
      else if(user.Role=='User')
         router.push('/signin');
   }

   return (
      <>
         <div className="fixed top-0 w-full bg-[#000000] h-[99px] z-10 max-w-screen-xl mx-auto">
            <div className="flex flex-row justify-between items-center h-full">
               <Link href={`${user.Role=='Admin'  ? "/import" : "/home" } `} >
                  <div className="flex flex-row items-center gap-[15px] h-full cursor-pointer">
                  <img src={logo.src} alt="" className=" h-[70px] ml-[45px]" />
                  </div>
               </Link>
               <div className="flex flex-row gap-[23px]">
                  <Link href={`${user.Role=='Admin'  ? "/import" : "/home" } `} >
                     <div className="flex flex-row items-center gap-[15px] h-full cursor-pointer">
                        <img src={icon_home.src} alt="icon home" className="w-[35px] h-[35px]" />
                        <div className=" font-League_Spartan text-[40px] text-[#FFFFFF] font-bold leading-[37px]">Home</div>
                     </div>
                  </Link>
                  <Link href="/search" >
                     <div className="flex flex-row items-center gap-[15px] h-full cursor-pointer">
                        <img src={icon_search.src} alt="icon search" className="w-[26px] h-[25px]" />
                        <div className="cursor-pointer font-League_Spartan text-[40px] text-[#FFFFFF] font-bold leading-[37px]">Search</div>
                     </div>
                  </Link>
               </div>
               <Popover className="relative mr-[30px]">
                  {({ open }) => (
                     <>
                        <Popover.Button className={`relative rounded-[30px] bg-[#1C1C1C] w-[128px] h-[61px] border-2 border-[#585757] hover:bg-[#585757] focus:outline-none`}>
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
                           <Popover.Panel className="absolute right-0 top-[71px] w-[192px] h-[188px] bg-[#1C1C1C] z-10 rounded-[5px] shadow-[0_5px_4px_0px_rgba(0,0,0,0.5)]">
                              <div className="flex flex-col ml-[17px] mt-[21px]">
                                 <div className=" font-League_Spartan text-[24px] font-bold text-[#FFFFFF] leading-[22px] mb-[19px]">
                                    { username }
                                 </div>
                                 <div className="flex flex-col gap-[5px] font-League_Spartan text-[#FFFFFF] mb-[18px]">
                                    <p className="text-[12px] font-bold leading-[11px]">Full Name</p>
                                    <p className="text-[11px] font-normal leading-[10px]">{ name }</p>
                                 </div>
                                 <div className="flex flex-col gap-[5px] font-League_Spartan text-[#FFFFFF] mb-[13px]">
                                    <p className="text-[12px] font-bold leading-[11px]">E-mail</p>
                                    <p className="text-[11px] font-normal leading-[10px]">{ email }</p>
                                 </div>
                                 <div className="w-[160px] h-[1px] mb-[9px] bg-[#C6C7DA] opacity-[40%]"></div>
                                 <div className="font-League_Spartan text-[#FFFFFF] text-[24px] font-bold leading-[22px] hover:text-[#6D48D7]  cursor-pointer" onClick={() => { setShowLogout(1) }}>Log out</div>
                              </div>
                           </Popover.Panel>
                        </Transition>
                     </>
                  )}
               </Popover>
            </div>
            <div className="bg-[#C6C7DA] w-full h-[1px]"></div>
         </div>
         <div className={`${showLogout ? "block" : "hidden"}`}>
            <div className="fixed top-0 left-0 w-full h-screen z-20 flex flex-row justify-center items-center" style={{ background: 'rgba(74, 80, 92, 0.4)' }}>
               <div className="w-[545px] h-[237px] rounded-[10px] bg-[#E6E1FD] flex flex-col items-center pt-[16px]">
                  <img src={door.src} alt="Logout" className="w-[88px] h-[88px] mb-[7px]" />
                  <p className="text-[#000000] font-League_Spartan text-[36px] leading-[33px] font-bold mb-[13px]">Logging Out</p>
                  <p className="text-[#000000] font-League_Spartan text-[20px] leading-[18px] font-light mb-[18px]">OMG! You&apos;re leaving. Are you sure?</p>
                  <div className="flex flex-row gap-[14px]">
                     <button className="bg-gradient-to-r from-[#F68FF2] via-[#A35AAD] to-[#1565D8] w-[70px] h-[28px] rounded-[50px] text-[#FFFFFF] font-League_Spartan text-[16px] leading-[15px] font-bold pt-[4px]" onClick={handleLogout}>YES</button>
                     <button className="bg-[#FFFFFF] w-[70px] h-[28px] rounded-[50px] border-[0.5px] border-[#7981CF] text-[#7C64DC] font-League_Spartan text-[16px] leading-[15px] font-bold pt-[4px]" onClick={() => {setShowLogout(0)}}>NO</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
