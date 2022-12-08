import { useState, useContext } from "react"
import button_play from "../public/button_play.svg"
import icon_headphone from "../public/icon_headphone.svg"
import Link from "next/link";
import Router from "next/router";
import { SongContext } from "./SongContext";

export default function Music({ name, artist, time, path }) {
   const song = useContext(SongContext);

   const nextPage = () => {
      Router.push({
         pathname: `/listentosong/${name}`,
         query: {
            name,
            artist,
            time,
            path
         }
      }).then(() => window.location.reload())
   }

   return (
      <>
         <div className="flex flex-row items-center h-[132px] w-full">
            <div className="basis-5/6">
               <div className="flex flex-row items-center">
                  <div className="ml-[49px]">
                     {/* <Link href={{pathname: `/listentosong/${listMusic[0].name}`,query: artist }}>  */}
                     {/* <Link href={`/listentosong/${name}`}>  */}
                     <a className="cursor-pointer" onClick={() => nextPage()}>
                        <img src={button_play.src} alt="" className="w-[62px] h-[62px]" />
                     </a>
                  </div>
                  <div className="ml-[69px] w-[80px] h-[80px] bg-gradient-to-b from-[#4180DB] via-[#586DBB] to-[#8A68CF] rounded-[10px]">
                     <div className="flex flex-row justify-center items-center w-full h-full">
                        <img src={icon_headphone.src} alt="" className="w-[62px] h-[62px]" />
                     </div>
                  </div>
                  <div className="ml-[45px] flex flex-col gap-[9px] font-League_Spartan text-[#FFFFFF]">
                     <p className="text-[32px] font-bold leading-[29px]">{name}</p>
                     <p className="text-[24px] font-normal leading-[22px]">{artist}</p>
                  </div>
               </div>
            </div>
            <div className="basis-1/6">
               <div className="flex flex-row justify-end items-center">
                  <p className="mr-[82px] font-Commissioner font-normal text-[#FFFFFF] text-[24px] leading-[29px]">{time}</p>
               </div>
            </div>
         </div>
         <div className="w-full h-[1px] bg-[#C6C7DA] opacity-40 z-0"></div>

      </>
   )
}
