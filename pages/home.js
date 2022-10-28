import Navbar from "../components/Navbar"
import Music from "../components/Music";
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
