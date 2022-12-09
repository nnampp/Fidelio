import { useContext, useEffect } from "react";
import Music from "../components/Music";
import { SongContext } from "../components/SongContext";
import { useRouter } from 'next/router'

export default function Index() {
   const router = useRouter()
   const song = useContext(SongContext);
   useEffect(() => {
      router.push('/signin');
   }, [])

   return (
      <>
      </>
   )
}
