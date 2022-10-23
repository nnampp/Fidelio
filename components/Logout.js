import door from "../public/icon_door.svg"

export default function Logout() {
   return (
      <>
         <div className="fixed top-0 left-0 w-full h-screen z-20 flex flex-row justify-center items-center" style={{ background: 'rgba(74, 80, 92, 0.4)'}}>
            <div className="w-[545px] h-[237px] rounded-[10px] bg-[#E6E1FD] flex flex-col items-center pt-[16px]">
               <img src={door.src} alt="" className="w-[88px] h-[88px] mb-[7px]"/>
               <p className="text-[#000000] font-League_Spartan text-[36px] leading-[33px] font-bold mb-[13px]">Loging Out</p>
               <p className="text-[#000000] font-League_Spartan text-[20px] leading-[18px] font-light mb-[18px]">OMG! You're leaving. Are you sure?</p>
               <div className="flex flex-row gap-[14px]">
                  <button className="bg-gradient-to-r from-[#F68FF2] via-[#A35AAD] to-[#1565D8] w-[70px] h-[28px] rounded-[50px] text-[#FFFFFF] font-League_Spartan text-[16px] leading-[15px] font-bold pt-[4px]">YES</button>
                  <button className="bg-[#FFFFFF] w-[70px] h-[28px] rounded-[50px] border-[0.5px] border-[#7981CF] text-[#7C64DC] font-League_Spartan text-[16px] leading-[15px] font-bold pt-[4px]">NO</button>
               </div>
            </div>
         </div>
      </>
   )
}
