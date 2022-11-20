import '../styles/globals.css'
import { useState, useEffect } from 'react';
import { SongContext } from './SongContext';


function MyApp({ Component, pageProps }) {
   const [song, getSong] = useState();
   const tempData = [
   {
      NameSong : "1. first song",
      ArtistName : "1 Artist" ,
      Time : "3:16" ,
      Path : "songgithup/17.mp3"
   },
   {
      NameSong : "2. Second song",
      ArtistName : "2 Artist" ,
      Time : "2:54" ,
      Path : "pathomua/423.mp3"
   },
   {
      NameSong : "3. Third song",
      ArtistName : "3 Artist" ,
      Time : "4:49" ,
      Path : "kaiopo/2345.mp3"
   }
   ]

   useEffect(() => {
      // async function getAllSonglist() {
      //    const res = await fetch('/api/song', {
      //       method: 'POST',
      //       headers: { 'Content-Type': 'application/json' }
      //    });
      //    const res2 = await res.json();
      //    const songAll = await Object.values(res2.song);
      //    await getSong(songAll);
      // }
      // getAllSonglist();
      getSong(tempData)
   }, []);

   return (
      <SongContext.Provider value={song}>
         <Component {...pageProps} />
      </SongContext.Provider>

   )
}

export default MyApp
