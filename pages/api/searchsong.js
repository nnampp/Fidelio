import { findSong } from "../../lib/firebase";
import {findArtist} from "../../lib/firebase";
import {getAllSong} from "../../lib/firebase";

export default async function handler(req, res) {
    const { Name } = req.body;
    //หาเพลงเเละนักร้องตรงตัว
    const getSong = await findSong({Name});
    const getArtist = await findArtist({Name});
    if (getSong) {
        res.status(201).json({
            status: true,
            song: getSong,
            Artist: getArtist,
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