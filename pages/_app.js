import '../styles/globals.css'
import { useState, useEffect } from 'react';
import { SongContext } from '../components/SongContext';

function MyApp({ Component, pageProps }) {
   const [song, setSong] = useState();

   useEffect(() => {
      // get all song when render website
      async function getAllSonglist() {
         const res = await fetch('/api/song', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
         });
         const res2 = await res.json();
         const songAll = await Object.values(res2.song);
         await setSong(songAll);
      }
      getAllSonglist();
   }, []);

   return (
      // pass song to all pages/files
      <SongContext.Provider value={song}>
         <Component {...pageProps} />
      </SongContext.Provider>

   )
}

export default MyApp
