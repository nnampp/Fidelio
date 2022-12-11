import Navbar from "../components/Navbar"
import Music from "../components/Music";
import { useState, useEffect, useContext } from "react";
import { SongContext } from "../components/SongContext";

export default function Home() {
   const song = useContext(SongContext);

   // Show all song
   const showSong = () => { 
      return (
         song?.map((num, i) => {
            return <Music name={num.NameSong} artist={num.ArtistName} time={num.Time} path={num.Path} key={i} />
         })
      )
   }

   return (
      <>
         <div className="bg-[#2D106A] h-screen overflow-hidden">
            <div className="mx-auto max-w-screen-xl">
               <div className="w-full h-screen bg-gradient-to-b from-[#000000] via-[#100526] to-[#1C0943] rounded-[10px]">
                  <Navbar />
                  <div className="overflow-y-scroll h-screen mt-[101px] scrollbar scrollbar-width-2"> {/* part Song */}
                     { showSong() }
                     <div className="w-full h-[132px]"></div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
