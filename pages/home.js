import Navbar from "../components/Navbar"
import Music from "../components/Music";
import { useState, useEffect, useContext } from "react";
import { SongContext } from "./SongContext";
const test = [
   {
      NameSong: "I love you 3000",
      ArtistName: "someone",
      Time: "3:46"
   },

];

export default function home() {
   // const [song, getSong] = useState();
   const song = useContext(SongContext);
   useEffect(() => {
      // async function getAllSonglist() {
      //    const res = await fetch('/api/song', {
      //    method: 'POST',
      //    headers: { 'Content-Type': 'application/json' }
      // });
      // const res2 = await res.json();
      // const songAll = await Object.values(res2.song);
      // await getSong(songAll);
      // }
      // getAllSonglist();

      
   }, []);

   const showSong = () => {
      return (
         song?.map((num, i) => {
            return <Music name={num.NameSong} artist={num.ArtistName} time={num.Time} path={num.Path} key={i} />
         })
      )
   }

   const callSong = () => {
      console.log(song)
      if (song === undefined) {
         console.log("meaw")
         return (<div className="text-white">Meaw</div>);
      };
      return (
         <div className="text-white">{song[0].Path}</div>
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
                     <Music/>
                     <Music/>
                     <Music/>
                     <Music/>
                     <Music/>
                     <Music/>
                     <Music/>
                     <div className="w-full h-[132px]"></div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
