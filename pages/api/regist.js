import bcrypt from 'bcryptjs';
import { createUser } from "../../lib/firebase";

export default async function handler(req, res) {
    const {Username, Password, Name, Email, Phonenumber, Role} = req.body;
    
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!Email.match(mailformat)){
        return res.status(422).json({ error: "Email is not valid" })
    }

    var phoneformat = /^\d{10}$/;
    if(!Phonenumber.match(phoneformat)){
        return res.status(422).json({ error: "Phonenumber is not valid" })
    }
    
    const hashedPassword = await bcrypt.hash(Password, 10)

    const regist = await createUser({Username, Password: hashedPassword, Name, Email, Phonenumber, Role})
    if (regist) {
        res.status(200).json({ message: "Register  Successfully" })
    }
    else {
        res.status(404).json({ message: "Something went Wrong..!" })
    }
  }