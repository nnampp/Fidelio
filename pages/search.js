import { useState } from "react"
import Navbar from "../components/Navbar"
import icon_search_white from "../public/icon_search_white.svg"
import icon_search_black from "../public/icon_search_black.svg"

export default function search() {
   const [showicon, setShowicon] = useState(0);
   const [selectType, setSelectType] = useState("");
   const [content, setContent] = useState("");
   const [openSearch,setOpenSearch] = useState(0);

   const onSubmit = (e) => {
      e.preventDefault()
      setSelectType("All");
   }

   const searchAll = () => {
      setOpenSearch(1);
      {/*Get API of All*/}
   }

   return (
      <>
         <div className="bg-[#2D106A] h-screen overflow-hidden">
            <div className="mx-auto max-w-screen-xl">
               <Navbar />
               <div className="w-full h-screen bg-gradient-to-b from-[#000000] via-[#100526] to-[#1C0943] rounded-[10px]">
                  <div className="flex flex-col items-center justify-center h-full">
                     <div className={`${openSearch && "hidden"} font-League_Spartan font-bold text-[#FFFFFF] text-[64px] leading-[59px] mb-[88px]`}>Search</div>
                     <div className="relative">
                        <img src={icon_search_white.src} alt="" className={`${showicon ? "hidden" : ""} absolute w-[70px] h-[67px] left-[22px] top-[14px]`} />
                        <img src={icon_search_black.src} alt="" className={`${showicon ? "" : "hidden"} absolute w-[70px] h-[67px] left-[22px] top-[14px]`} />
                        <form onSubmit={onSubmit}>
                           <input type="text" className="mb-[52px] bg-[#2C2E47] w-[658px] h-[95px] rounded-[10px] border-[#D6D5E8] border text-[36px] leading-[33px] text-[#FFFFFF] font-League_Spartan font-medium pl-[140px] focus:bg-[#FFFFFF] focus:border-[#2C2E47] focus:outline-none focus:text-[#2C2E47]"
                              placeholder="What do you want to listen to ?" onFocus={() => setShowicon(1)} onBlur={() => setShowicon(0)} onChange={e => { setContent(e.target.value); }} />

                        </form>
                     </div>
                     <div className="flex flex-row gap-[30px]">
                        <button className={`bg-[#2C2E47] w-[188px] h-[54px] text-[#FFFFFF] text-[36px] font-League_Spartan font-medium leading-[33px] border border-[#D6D5E8] rounded-[30px] text-center  ${selectType == "All" ? "bg-[#FFFFFF] text-[#000000]" : ""}`} onClick={() => {setSelectType("All"); searchAll();} }>All</button>
                        <button className={`bg-[#2C2E47] w-[188px] h-[54px] text-[#FFFFFF] text-[36px] font-League_Spartan font-medium leading-[33px] border border-[#D6D5E8] rounded-[30px] text-center ${selectType == "Songs" ? "bg-[#FFFFFF] text-[#000000]" : ""}`} onClick={() => setSelectType("Songs")}>Songs</button>
                        <button className={`bg-[#2C2E47] w-[188px] h-[54px] text-[#FFFFFF] text-[36px] font-League_Spartan font-medium leading-[33px] border border-[#D6D5E8] rounded-[30px] text-center ${selectType == "Artists" ? "bg-[#FFFFFF] text-[#000000]" : ""}`} onClick={() => setSelectType("Artists")}>Artists</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
