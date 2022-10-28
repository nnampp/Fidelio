import music from "../public/music-playing.gif"

export default function listentosong() {
   return (
      <>
         <div className="bg-[#131318] w-full h-screen">
            <div className="max-w-screen-xl mx-auto">
               <div className="flex flex-row items-center h-screen justify-center">
                  <div className="w-[1221px] h-[652px] rounded-[40px]" style={{ backgroundColor: 'rgba(187, 187, 187, 0.1)' }}>
                     <img src={music.src} alt="" className="w-[621px] h-[576px]"/>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}