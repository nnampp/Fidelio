import { CreateAxiosDefaults } from "axios";

export default async function handler(req, res) {
    const {Link, Songname, Aritst, Role} = req.body;
    
    const importt = await reateAxiosDefaults({Link, Songname, Aritst, Role})
    if (importt) {
        res.status(200).json({ message: "import  Successfully" })
    }
    else {
        res.status(404).json({ message: "Something went Wrong..!" })
    }
  }