import bcrypt from 'bcryptjs';
import { createUser,findUser } from "../../lib/firebase";

export default async function handler(req, res) {
    const {Username, Password, Name, Email, Phonenumber, Role} = req.body;
    
    var usernameformat = /^([A-Za-z0-9.!@#$%&"<>,:()'*+/=?^_`{|}~-])+$/;
    if(await findUser({ Username }) || !Username.match(usernameformat)) {
        return res.status(422).json({ usererror: "Can't use this username" })
    }

    var thaiformat = /[ก-๛]/;
    var passwordformat = /^(?=.*\d)(?=.*[a-z]).{8,}$/;
    if(!Password.match(passwordformat) || Password.match(thaiformat)){
        return res.status(422).json({ passworderror: "Password is not valid" })
    }

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!Email.match(mailformat) || Email.match(thaiformat)){
        return res.status(422).json({ mailerror: "Email is not valid" })
    }

    var phoneformat = /^[0]+?(\d{2})?[- ]?(\d{3})[- ]?(\d{4})$/;
    if(!Phonenumber.match(phoneformat)){
        return res.status(422).json({ phoneerror: "Phone number is not valid" })
    }
    
    const hashedPassword = await bcrypt.hash(Password, 10)

    const regist = await createUser({Username, Password: hashedPassword, Name, Email, Phonenumber, Role})
    if (regist) {
        res.status(200).json({ message: "Register Successfully" })
    }
    else {
        res.status(404).json({ message: "Something went Wrong..!" })
    }
  }