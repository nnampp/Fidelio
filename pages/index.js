import { useContext, useEffect } from "react";
import Music from "../components/Music";
import { SongContext } from "./SongContext";


export default function Index() {
   const song = useContext(SongContext);
   useEffect(() => {
      const foo = async () => {
         // const data1 = await song[0]?.Time;

      }
      foo();
   }, [])

   const callSong = () => {
      console.log(song)
      if (song === undefined) {
         console.log("meaw")
         return (<div>Meaw</div>);
      };
      return (
         <div>{song[0].Time}</div>
      )
   }

   return (
      <>
         <div className="bg-black">
            {
               song?.map((num, i) => {
                  return <Music name={num.NameSong} artist={num.ArtistName} time={num.Time} key={i} />
               })
            }
            {
               callSong()
            }
         </div>
      </>
   )
}
