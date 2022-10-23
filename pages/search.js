import { useState, useRef } from "react"
import Navbar from "../components/Navbar"
import icon_search_white from "../public/icon_search_white.svg"
import icon_search_black from "../public/icon_search_black.svg"
import Music from "../components/Music"
import no_result from "../public/no_result.png"

export default function search() {
   const [showicon, setShowicon] = useState(0);
   const [selectType, setSelectType] = useState("");
   const [content, setContent] = useState("");
   const [openSearch, setOpenSearch] = useState(0);
   const resultNotFound = useRef(null);
   const [lastvalue,setLastvalue] = useState("");


   const test = [
      {
         name: "I love you 3000",
         artist: "Aom",
         time: "3:46"
      },
      {
         name: "love you 1500",
         artist: "gift",
         time: "10:46"
      },
      {
         name: "I love you jub jub",
         artist: "Meaw",
         time: "2:46"
      },
      {
         name: "I love you eiei",
         artist: "Nampueng -.-",
         time: "1:46"
      },

   ];
   const test2 = [
      {
         name: "I love you 0",
         artist: "Aom",
         time: "3:46"
      },
      {
         name: "love you 1500",
         artist: "gift",
         time: "10:46"
      },
      {
         name: "I love you jub jub",
         artist: "Meaw",
         time: "2:46"
      },
      {
         name: "I love you eiei",
         artist: "Nampueng -.-",
         time: "1:46"
      },

   ];
   const test3 = [
      // {
      //    name: "I love you -",
      //    artist: "Aom",
      //    time: "3:46"
      // },
      // {
      //    name: "love you 1500",
      //    artist: "gift",
      //    time: "10:46"
      // },
      // {
      //    name: "I love you jub jub",
      //    artist: "Meaw",
      //    time: "2:46"
      // },
      // {
      //    name: "I love you eiei",
      //    artist: "Nampueng -.-",
      //    time: "1:46"
      // },

   ];

   const onSubmit = (e) => {
      e.preventDefault()
      setSelectType("All");
      searchAll();
      setLastvalue(resultNotFound.current.value);
   }

   const searchAll = () => {
      if(content.length == 0){
         console.log("Can't found")
      }else{
         setOpenSearch(1); {/*Call showMusic auto since openSearch has parent element of showMusic */ }
      }

      {/*Get API of All*/ }
   }
   const searchSong = () => {
      if(content.length == 0){
         console.log("Can't found")
      }else{
         setOpenSearch(1); {/*Call showMusic auto since openSearch has parent element of showMusic */ }
      }
      {/*Get API of All*/ }
   }
   const searchArtist = () => {
      if(content.length == 0){
         console.log("Can't found")
      }else{
         setOpenSearch(1); {/*Call showMusic auto since openSearch has parent element of showMusic */ }
      }
      {/*Get API of All*/ }
   }

   const showMusic = () => {
      console.log(selectType)
      if (selectType == "All" && test.length != 0) {
         return (
            test.map((num, i) => {
               return <Music name={num.name} artist={num.artist} time={num.time} key={i} />
            })
         )
      } else if (selectType == "Song" && test2.length != 0) {
         return (
            test2.map((num, i) => {
               return <Music name={num.name} artist={num.artist} time={num.time} key={i} />
            })
         )
      } else if (selectType == "Artist" && test3.length != 0) {
         return (
            test3.map((num, i) => {
               return <Music name={num.name} artist={num.artist} time={num.time} key={i} />
            })
         )
      } else {
         return (
            <>
               <div className="flex flex-col items-center mt-[53px]">
                  <img src={no_result.src} alt="" className="w-[143px] h-[148px]" />
                  <div className="font-League_Spartan text-[48px] text-[#FFFFFF] opacity-50 font-medium leading-[44px] mb-[16px]">No results found for “{lastvalue}” </div>
                  <div className="font-League_Spartan text-[24px] text-[#FFFFFF] opacity-50 font-medium leading-[22px]">Please make sure your words are spelled correctly or use less or different keywords</div>
               </div>
            </>
         )
      }
   }

   return (
      <>
         <div className="bg-[#2D106A] h-screen overflow-hidden">
            <div className="mx-auto max-w-screen-xl">
               <Navbar />
               <div className="w-full h-screen bg-gradient-to-b from-[#000000] via-[#100526] to-[#1C0943] rounded-[10px]">
                  <div className={`flex flex-col ${openSearch ? "pt-[152px]" : "justify-center"} items-center h-full`}>
                     <div className={`${openSearch ? "hidden" : ""} font-League_Spartan font-bold text-[#FFFFFF] text-[64px] leading-[59px] mb-[88px]`}>Search</div> {/*${ openSearch ? "-translate-y-20 opacity-0 duration-700 ease-in-out" : ""} */}
                     <div className="relative">
                        <img src={icon_search_white.src} alt="" className={`${showicon ? "hidden" : ""} absolute w-[70px] h-[67px] left-[22px] top-[14px]`} />
                        <img src={icon_search_black.src} alt="" className={`${showicon ? "" : "hidden"} absolute w-[70px] h-[67px] left-[22px] top-[14px]`} />
                        <form onSubmit={onSubmit}>
                           <input ref={resultNotFound} type="text" className="mb-[52px] bg-[#2C2E47] w-[658px] h-[95px] rounded-[10px] border-[#D6D5E8] border text-[36px] leading-[33px] text-[#FFFFFF] font-League_Spartan font-medium pl-[140px] focus:bg-[#FFFFFF] focus:border-[#2C2E47] focus:outline-none focus:text-[#2C2E47]"
                              placeholder="What do you want to listen to ?" onFocus={() => setShowicon(1)} onBlur={() => setShowicon(0)} onChange={e => { setContent(e.target.value); }} required />
                        </form>
                     </div>
                     <div className="flex flex-row gap-[30px] mb-4">
                        <button className={`bg-[#2C2E47] w-[188px] h-[54px] text-[#FFFFFF] text-[36px] font-League_Spartan font-medium leading-[33px] border border-[#D6D5E8] rounded-[30px] text-center  ${selectType == "All" ? "bg-[#FFFFFF] text-[#000000]" : ""}`} onClick={() => { setSelectType("All"); searchAll(); }}>All</button>
                        <button className={`bg-[#2C2E47] w-[188px] h-[54px] text-[#FFFFFF] text-[36px] font-League_Spartan font-medium leading-[33px] border border-[#D6D5E8] rounded-[30px] text-center ${selectType == "Song" ? "bg-[#FFFFFF] text-[#000000]" : ""}`} onClick={() => { setSelectType("Song"); searchSong(); }}>Songs</button>
                        <button className={`bg-[#2C2E47] w-[188px] h-[54px] text-[#FFFFFF] text-[36px] font-League_Spartan font-medium leading-[33px] border border-[#D6D5E8] rounded-[30px] text-center ${selectType == "Artist" ? "bg-[#FFFFFF] text-[#000000]" : ""}`} onClick={() => { setSelectType("Artist"); searchArtist(); }}>Artists</button>
                     </div>
                     <div className={`${openSearch ? "block" : "hidden"} w-full h-full overflow-y-scroll scrollbar scrollbar-width-2`}>
                        {showMusic()}
                     </div>
                     {/* {
                        () => {  
                           if(content.length == 0){
                              return(
                                 <>
                                    <p>Please fill out field</p>
                                 </>
                              )
                           }else{
                              return(
                                 
                              )
                           }
                        }
                     } */}
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
