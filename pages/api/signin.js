import { findUser, getUserbySignin } from "../../lib/firebase";

export default async function handler(req, res) {
    const { Username, Password } = req.body;

    const getUser = await findUser({ Username })
    if (getUser) {
        const user = await getUserbySignin({ Username, Password });
        if(user) {
            const { Email, Name, Password, Phonenumber, Role, Username } = user
            res.status(201).json({
                status: true,
                user: { Email, Name, Password, Phonenumber, Role, Username },
                token: user.token,
                message: "Signin complete !!"
            })
        }
        else {
            res.json({
                status: false,
                error: "Wrong password"
            })
        }
        
    }
    else {
        res.json({
            status: false,
            error1: "Enter a valid username. Please try again."
        })
    }
  }