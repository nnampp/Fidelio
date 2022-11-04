import { getAllSong } from "../../lib/firebase";

export default async function handler(req, res) {
    const getSong = await getAllSong();
    if (getSong) {
        res.status(201).json({
            status: true,
            song: getSong,
            message: "Song collections available"
        })
    }
    else {
        res.json({
            status: false,
            error: "Song collections empty"
        })
    }
  }