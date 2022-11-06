import { useState, useRef, useEffect } from "react"
import music from "../public/music-playing.gif"

export default function listentosong() {
   const [playStatus, setPlayStatus] = useState(0);
   const [value, setValue] = useState(0);
   const [duration, setDuaration] = useState(0);
   const [range, setRange] = useState(0);
   const audioPlayer = useRef();
   const rangeBar = useRef();
   const animationRef = useRef();

   useEffect(() => {
      const seconds = Math.floor(audioPlayer.current.duration)
      setDuaration(seconds)
   }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])
   // adding "?" to say if autdioPlay exists, if current exists
   // We will update (call function in useEffect again) when loadmetadata 
   // The loadedmetadata event occurs when metadata for the specified audio/video has been loaded

   const calculateTime = (secs) => {
      const minus = Math.floor(secs / 60);
      const returnminus = (minus < 10) ? `0${minus}` : `${minus}`
      const seconds = Math.floor(secs % 60);
      const returnseconds = (seconds < 10) ? `0${seconds}` : `${seconds}`
      return `${returnminus}:${returnseconds}`;
   }

   const pauseSong = () => {
      setPlayStatus(0);
      audioPlayer.current.pause();
   }

   const playSong = () => {
      setPlayStatus(1);
      audioPlayer.current.play();
   }

   const showPlaySong = () => {
      if (playStatus) {
         return (<img src="Pause.png" alt="" className=" w-[62px] h-[62px] ml-[36px] mt-[105px]" onClick={pauseSong} />)
      } else {
         return (
            <div className="flex flex-row justify-center items-center ml-[36px] mt-[105px] bg-[#743CE8] w-[62px] h-[62px] rounded-[100%]" onClick={playSong}>
               <img src="play_button.svg" alt="" className="w-[25px] h-[28px] ml-[6px]" />
            </div>
         )
      }
   }

   const getBackgroundSize = () => {
      return {
         backgroundSize: `${(value * 100) / duration}% 100%`
      };
   };
   
    function changeRange(){
      setValue(rangeBar.current.value);
      audioPlayer.current.currentTime = rangeBar.current.value
   }

   const whenUpdate = () => {
      setValue(audioPlayer.current.currentTime);
      // console.log("setValue : " + value)
   }

   const shiftRight = () => {
      // console.log("newTime : " + newTime);
      const newTime = Number(rangeBar.current.value) + 30;
      setValue(newTime); 
      // console.log("newValue : " + value);
      audioPlayer.current.currentTime = newTime;
   } 

   const shiftLeft = () => {
      // console.log("newTime : " + newTime);
      const newTime = Number(rangeBar.current.value) - 30;
      setValue(newTime); 
      // console.log("newValue : " + value);
      audioPlayer.current.currentTime = newTime;
   } 


   return (
      <>
         <div className="bg-[#131318] w-full h-screen">
            <div className="max-w-screen-xl mx-auto">
               <div className="flex flex-row items-center h-screen justify-center">
                  <div className="w-[1221px] h-[652px] rounded-[40px]" style={{ backgroundColor: 'rgba(187, 187, 187, 0.1)' }}>
                     <div className="flex flex-row">
                        <img src={music.src} alt="" className="w-[621px] h-[576px] rounded-[30px] ml-9 mt-9" />
                        <div className="flex flex-col items-center w-full">
                           <div className="flex flex-row">
                              <img src="kakabath.png" alt="" className=" w-[17px] h-[16.37px] ml-[516px] mt-[28px] " />
                           </div>
                           <div className="flex flex-row">
                              <img src="Group 11.jpg" alt="" className=" rounded-[10px] w-[124px] h-[112px]  mt-[127.63px] " />
                              <div className="flex flex-col">
                                 <p className="text-[40px] font-Commissioner font-bold text-[#FFFFFF] ml-[38px] mt-[140px] ">Song Name</p>
                                 <p className="text-[24px] font-Commissioner font-Semibold text-[#FFFFFF]  ml-[38px] mt-[คpx] ">Artist</p>
                              </div>
                           </div>
                           <div className="flex flex-row">
                              <img src="before.png" alt="" className=" w-[49px] h-[40px] mt-[116px] " />
                              {showPlaySong()}
                              <img src="after.png" alt="" className=" w-[49px] h-[40px] ml-[36px] mt-[116px] " />
                           </div>
                           <div className="flex flex-row mt-[44px] items-center gap-2">
                              <p className="text-[13px] font-Commissioner font-Semibold text-[#FFFFFF]">{calculateTime(value)}</p>
                              <input ref={rangeBar} type="range" min="0" max={duration} onChange={changeRange} style={getBackgroundSize()} className="sliderWithLabels" value={value} />
                              <p className="text-[13px] font-Commissioner font-Semibold text-[#FFFFFF]">{calculateTime(duration)}</p>
                           </div>
                           <div className="flex flex-row gap-9 mt-[10px] ">
                              <button className="w-[40px] h-[30px] bg-white"  onClick={shiftLeft}>-30 Sec</button>
                              <button className="w-[40px] h-[30px] bg-white"  onClick={shiftRight}>+30 Sec</button>
                           </div>
                           <audio ref={audioPlayer} src="/Time.mp3" id="a1" onTimeUpdate={whenUpdate}>Your browser do not support</audio>
                           
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}