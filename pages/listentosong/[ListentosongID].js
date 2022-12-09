import { useState, useRef, useEffect, useContext } from "react"
import music from "../../public/music-playing.gif"
import { useRouter } from "next/router"
import Link from "next/link";
import axios from 'axios';
import { SongContext } from "../../components/SongContext";
import Router from "next/router";
import { getStorage, ref, getMetadata, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { parseCookies } from 'nookies'
import cookie from 'js-cookie'

export default function Listentosong() {
   const [playStatus, setPlayStatus] = useState(0);
   const [value, setValue] = useState(0);
   const [duration, setDuaration] = useState(0);
   const audioPlayer = useRef();
   const rangeBar = useRef();
   const [newdata, setNewdata] = useState();
   const [newpath, setPath] = useState();
   const song = useContext(SongContext)
   const router = useRouter()
   const [URL, setURL] = useState("https://firebasestorage.googleapis.com/v0/b/my-first-project-d7b77.appspot.com/o/song%2FBLACKPINK_2Pink%20Venom.mp3?alt=media&token=a7f241ab-4f67-4c73-8dc4-d047de2bc348");

   const { query: { name, artist, time, path }, } = router

   const cookieuser = parseCookies()
   const user =  cookieuser.user ? JSON.parse(cookieuser.user) : ""
   
   const firebaseConfig = {
      apiKey: "AIzaSyAfkjuMhBt46PPW36XDmesayi-k5jQvVT4",
      authDomain: "my-first-project-d7b77.firebaseapp.com",
      databaseURL: "https://my-first-project-d7b77.firebaseio.com",
      projectId: "my-first-project-d7b77",
      storageBucket: "my-first-project-d7b77.appspot.com",
      messagingSenderId: "766071481517",
      appId: "1:766071481517:web:fe12e4076a9e6436091224",
      measurementId: "G-17004Y30QN"
   };
   const app = initializeApp(firebaseConfig);
   const storage = getStorage(app);
   // const ListentosongID = router.query.ListentosongID

   const callPath = () => {
      // console.log(path)
      if (path === undefined) {
         return (console.log("before : " + path))
      }
      return (getDownloadURL(ref(storage, path))
         .then((url) => {
            console.log("after " + url)
            setURL(url);
         })
         .catch((error) => {
            // Handle any errors
         }))
   }


   useEffect(() => {
      const getInitialProps = async () => {
         try {
            const res = await axios.get('https://pixabay.com/api/videos/?key=31122990-29c4c67fa1bea010fa87f62df&q=flower+yellow');
            setNewdata(res.data);
         } catch (err) {
            console.log(err);
         }
      };
      getInitialProps();
      console.log("Change Page")
      audioPlayer?.current?.load();
      window.addEventListener("keydown", function (event) {
         if (event.defaultPrevented) {
            return; // Do nothing if the event was already processed
         }

         switch (event.key) {
            case " " :
               if (audioPlayer?.current?.paused) {
                  playSong();
               }else{
                  pauseSong();
               }
               break;
            
            case "ArrowRight" :
               shiftRight();
               break;

            case "ArrowLeft" : 
               shiftLeft();
               break;

            default :
               console.log(event.key);
         }

         // Cancel the default action to avoid it being handled twice
         event.preventDefault();
      }, true);

   }, [])



   const calculateTime = (secs) => {
      const minus = Math.floor(secs / 60);
      const returnminus = (minus < 10) ? `0${minus}` : `${minus}`
      const seconds = Math.floor(secs % 60);
      const returnseconds = (seconds < 10) ? `0${seconds}` : `${seconds}`
      return `${returnminus}:${returnseconds}`;
   }

   const pauseSong = () => {
      setPlayStatus(0);
      audioPlayer?.current?.pause();
   }

   const playSong = () => {
      setPlayStatus(1);
      audioPlayer?.current?.play();
   }



   const showPlaySong = () => {
      if (playStatus) {
         return (<img src="../Pause.png" alt="" className=" w-[62px] h-[62px] ml-[36px] mt-[105px] hover:cursor-pointer " onClick={pauseSong} />)
      } else {
         return (
            <div className="flex flex-row justify-center items-center ml-[36px] mt-[105px] bg-[#743CE8] w-[62px] h-[62px] rounded-[100%] hover:cursor-pointer " onClick={playSong}>
               <img src="../play_button.svg" alt="" className="w-[25px] h-[28px] ml-[6px]" />
            </div>
         )
      }
   }

   const getBackgroundSize = () => {
      return {
         backgroundSize: `${(value * 100) / duration}% 100%`
      };
   };

   function changeRange() {
      setValue(rangeBar.current.value);
      audioPlayer.current.currentTime = rangeBar.current.value
   }

   const whenUpdate = () => {
      setValue(audioPlayer.current.currentTime);
   }

   const shiftRight = () => {
      const newTime = Number(rangeBar.current.value) + 30;
      setValue(newTime);
      audioPlayer.current.currentTime = newTime;
   }

   const shiftLeft = () => {
      const newTime = Number(rangeBar.current.value) - 30;
      setValue(newTime);
      audioPlayer.current.currentTime = newTime;
   }

   const setUpAudio = () => {
      const seconds = audioPlayer?.current?.duration;
      setDuaration(seconds);
      callPath()
      playSong()
   }

   const checkPresent = (info) => {
      return info.NameSong == name && info.ArtistName == artist
   }

   const prevSong = () => {
      const position = song.findIndex(checkPresent)
      if (position == "0") {// case 1 : array == 0 -> can't prev
         location.reload();
      } else {// case 2 : array > 0
         const name = song[position - 1].NameSong
         const artist = song[position - 1].ArtistName
         const time = song[position - 1].Time
         const path = song[position - 1].Path
         Router.push({
            pathname: `/listentosong/${song[position - 1].NameSong}`,
            query: {
               name,
               artist,
               time,
               path
            }
         }).then(() => router.reload())
      }
   }

   const nextSong = () => {
      const position = song.findIndex(checkPresent)
      if (position == song.length - 1) {// case 1 : array == Last index -> First Song
         const name = song[0].NameSong
         const artist = song[0].ArtistName
         const time = song[0].Time
         const path = song[0].Path
         Router.push({
            pathname: `/listentosong/${song[0].NameSong}`,
            query: {
               name,
               artist,
               time,
               path
            }
         }).then(() => router.reload())
      } else {// case 2 : array > 0
         const name = song[position + 1].NameSong
         const artist = song[position + 1].ArtistName
         const time = song[position + 1].Time
         const path = song[position + 1].Path
         Router.push({
            pathname: `/listentosong/${song[position + 1].NameSong}`,
            query: {
               name,
               artist,
               time,
               path
            }
         }).then(() => router.reload())
      }
   }

   const backhome = () => {
      Router.push({pathname: `${user.Role=='Admin'  ? "/import" : "/home" }`}).then(() => router.reload())
   }


   return (
      <>
         <div className="bg-[#131318] w-full h-screen z-10">
            <div className="max-w-screen-xl mx-auto">
               <div className="flex flex-row items-center h-screen justify-center">
                  <div className="w-[1221px] h-[652px] rounded-[40px]" style={{ backgroundColor: 'rgba(187, 187, 187, 0.1)' }}>
                     <div className="flex flex-row h-full">
                        <img src={music.src} alt="" className="w-[621px] h-[576px] rounded-[30px] ml-9 mt-9" />
                        <div className="flex flex-col items-center w-full h-full">
                           <div className=" self-end hover:cursor-pointer" >
                              <a onClick={backhome}>
                                 <img src="../kakabath.png" alt="" className=" w-[17px] h-[16.37px] mr-[30px] mt-[28px] " />
                              </a>
                           </div>
                           <div className="flex flex-row items-center mt-[140px]">
                              <img src="../Group 11.jpg" alt="" className=" rounded-[10px] w-[124px] h-[112px]  " />
                              <div className="flex flex-col">
                                 <p className="text-[40px] font-Commissioner font-bold text-[#FFFFFF] ml-[38px] break-words max-w-[280px] ">{name}</p>
                                 <p className="text-[24px] font-Commissioner font-Semibold text-[#FFFFFF]  ml-[38px] break-words max-w-[270px] ">{artist}</p>
                              </div>
                           </div>
                           <div className="flex flex-row">
                              <div className="hover:cursor-pointer" >
                                 <a onClick={() => prevSong()} >
                                    <img src="../before.png" alt="" className=" w-[49px] h-[40px] mt-[116px] " />
                                 </a>
                              </div>
                              {showPlaySong()}
                              <div className="hover:cursor-pointer">
                                 <a onClick={() => nextSong()}>
                                    <img src="../after.png" alt="" className=" w-[49px] h-[40px] ml-[36px] mt-[116px] " />
                                 </a>
                              </div>
                           </div>
                           <div className="flex flex-row gap-[25px] mt-[19px]">
                              <div className="w-[31px] h-[23px] bg-[#6D7F89] rounded-[15px] text-[#FFFFFF] flex flex-row justify-center items-center hover:cursor-pointer" onClick={shiftLeft}>
                                 <div className="font-League_Spartan text-[12px] leading-[11px] font-semibold">-30s</div>
                              </div>
                              <div className="w-[31px] h-[23px] bg-[#6D7F89] rounded-[15px] text-[#FFFFFF] flex flex-row justify-center items-center hover:cursor-pointer" onClick={shiftRight}>
                                 <div className="font-League_Spartan text-[12px] leading-[11px] font-semibold">+30s</div>
                              </div>
                           </div>
                           <div className="flex flex-row mt-[25px] items-center gap-2">
                              <p className="text-[13px] font-Commissioner font-Semibold text-[#FFFFFF]">{calculateTime(value)}</p>
                              <input ref={rangeBar} type="range" min="0" max={duration} onChange={changeRange} style={getBackgroundSize()} className="sliderWithLabels" value={value} />
                              <p className="text-[13px] font-Commissioner font-Semibold text-[#FFFFFF]">{calculateTime(duration)}</p>
                           </div>

                           {/* <audio ref={audioPlayer} src="/Time.mp3" id="a1" onTimeUpdate={whenUpdate}>Your browser do not support</audio> */}
                           <audio ref={audioPlayer}
                              // src={newdata?.hits[0]?.videos?.small?.url}
                              // src="https://firebasestorage.googleapis.com/v0/b/my-first-project-d7b77.appspot.com/o/song%2FBLACKPINK_2Pink%20Venom.mp3?alt=media&token=a7f241ab-4f67-4c73-8dc4-d047de2bc348"
                              src={URL}
                              id="a1"
                              onTimeUpdate={whenUpdate}
                              onLoadedData={setUpAudio}
                              onEnded={() => nextSong()}
                              // onCanPlay={()=> playSong()}
                           >
                              Your browser do not support
                           </audio>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}