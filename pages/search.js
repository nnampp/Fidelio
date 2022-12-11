import { useState, useRef, useEffect, useContext } from "react"
import Navbar from "../components/Navbar"
import icon_search_white from "../public/icon_search_white.svg"
import icon_search_black from "../public/icon_search_black.svg"
import Music from "../components/Music"
import no_result from "../public/no_result.png"
import { SongContext } from "../components/SongContext"

export default function Search() {
   const [showicon, setShowicon] = useState(0);
   const [selectType, setSelectType] = useState("");
   const [content, setContent] = useState("");
   const [openSearch, setOpenSearch] = useState(0);
   const resultNotFound = useRef(null);
   const [lastvalue, setLastvalue] = useState("");
   const [warning, setWarning] = useState(0)
   
   const [infoSong, setInfosong] = useState();
   const [infoArtist, setInfoartist] = useState();
   const [infoAll, setInfoall] = useState();
   const song = useContext(SongContext);


   async function onSubmit(e) {
      e.preventDefault()
      setSelectType("All");
      searchAll();
      setLastvalue(resultNotFound.current.value);
      const res3= song.filter(searchsongfun=>searchsongfun.NameSong?.toLowerCase().includes(content));
      await setInfosong(res3);
      const res4= song.filter(searchsongfun=>searchsongfun.ArtistName?.toLowerCase().includes(content));
      await setInfoartist(res4);

      function getUnion(array1, array2) {
         const difference = array1.filter(
           element => !array2.includes(element)
         );
       
         return [...difference, ...array2];
       }

      await setInfoall(getUnion(res3,res4));
   }

   //when click "ALL" button
   const searchAll = () => {
      if (content.length == 0) {
         setWarning(1);
      } else {
         setWarning(0);
         setOpenSearch(1); {/*Call showMusic auto since openSearch has parent element of showMusic */ }
      }
   }

   //when click "Song" button
   const searchSong = () => {
      if (content.length == 0) {
         setWarning(1);
      } else {
         setWarning(0);
         setOpenSearch(1); {/*Call showMusic auto since openSearch has parent element of showMusic */ }
      }
   }

   //when click "Artist" button
   const searchArtist = () => {
      if (content.length == 0) {
         setWarning(1);
      } else {
         setWarning(0);
         setOpenSearch(1); {/*Call showMusic auto since openSearch has parent element of showMusic */ }
      }
      
   }

   const showMusic = () => {
      if (selectType == "All" && infoAll?.length != 0) {
         return (
            infoAll?.map((num, i) => {
               return <Music name={num.NameSong} artist={num.ArtistName} time={num.Time} path={num.Path} key={i} />
            })
         )
      } else if (selectType == "Song" && infoSong?.length != 0) {
         return (
            infoSong?.map((num, i) => {
               return <Music name={num.NameSong} artist={num.ArtistName} time={num.Time} path={num.Path} key={i} />
            })
         )
      } else if (selectType == "Artist" && infoArtist?.length != 0) {
         return (
            infoArtist?.map((num, i) => {
               return <Music name={num.NameSong} artist={num.ArtistName} time={num.Time} path={num.Path} key={i} />
            })
         )
      } else { // if empty field
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

   const showWarnFind = () => {
      return (
         <>
            <div className="mt-[12px] text-[#DC1414] font-Commissioner">Please, specify name of song or artist on textbox!</div>
         </>
      )
   }

   return (
      <>
         <div className="bg-[#2D106A] h-screen overflow-hidden">
            <div className="mx-auto max-w-screen-xl">
               <Navbar />
               <div className="w-full h-screen bg-gradient-to-b from-[#000000] via-[#100526] to-[#1C0943] rounded-[10px]">
                     <div className={`flex flex-col ${openSearch ? "pt-[152px]" : "justify-center"} items-center h-full`}>
                     <div className={`${openSearch ? "hidden" : ""} font-League_Spartan font-bold text-[#FFFFFF] text-[64px] leading-[59px] mb-[88px]`}>Search</div> {/* ${ openSearch ? "-translate-y-20 opacity-0 duration-700 ease-in-out" : ""} */}
                     <div className="relative">
                        <img src={icon_search_white.src} alt="" className={`${showicon ? "hidden" : ""} absolute w-[70px] h-[67px] left-[22px] top-[14px]`} />
                        <img src={icon_search_black.src} alt="" className={`${showicon ? "" : "hidden"} absolute w-[70px] h-[67px] left-[22px] top-[14px]`} />
                        <form onSubmit={onSubmit}>
                           <input ref={resultNotFound} id="Name" name="Name" type="text" className="bg-[#2C2E47] w-[658px] h-[95px] rounded-[10px] border-[#D6D5E8] border text-[36px] leading-[33px] text-[#FFFFFF] font-League_Spartan font-medium pl-[140px] focus:bg-[#FFFFFF] focus:border-[#2C2E47] focus:outline-none focus:text-[#2C2E47]"
                              placeholder="What do you want to listen to ?" onFocus={() => setShowicon(1)} onBlur={() => setShowicon(0)} onChange={e => { setContent(e.target.value.toLowerCase()); }}  />
                        </form>
                     </div>
                     <div className={`${warning ? "block " : "hidden"}`}>
                        {showWarnFind()}
                     </div>
                     <div className="flex flex-row gap-[30px] mb-4 mt-[52px]">
                        <button className={`bg-[#2C2E47] w-[188px] h-[54px] text-[#FFFFFF] text-[36px] font-League_Spartan font-medium leading-[33px] border border-[#D6D5E8] rounded-[30px] text-center  ${selectType == "All" ? "bg-[#FFFFFF] text-[#000000]" : ""}`} onClick={() => { setSelectType("All"); searchAll(); }}>All</button>
                        <button className={`bg-[#2C2E47] w-[188px] h-[54px] text-[#FFFFFF] text-[36px] font-League_Spartan font-medium leading-[33px] border border-[#D6D5E8] rounded-[30px] text-center ${selectType == "Song" ? "bg-[#FFFFFF] text-[#000000]" : ""}`} onClick={() => { setSelectType("Song"); searchSong(); }}>Songs</button>
                        <button className={`bg-[#2C2E47] w-[188px] h-[54px] text-[#FFFFFF] text-[36px] font-League_Spartan font-medium leading-[33px] border border-[#D6D5E8] rounded-[30px] text-center ${selectType == "Artist" ? "bg-[#FFFFFF] text-[#000000]" : ""}`} onClick={() => { setSelectType("Artist"); searchArtist(); }}>Artists</button>
                     </div>
                     <div className={`${openSearch ? "block" : "hidden"} w-full h-full overflow-y-scroll scrollbar scrollbar-width-2`}>
                        {showMusic()}
                     </div>     
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
