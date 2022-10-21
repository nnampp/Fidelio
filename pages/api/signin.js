import { findUser, getUserbySignin } from "../../lib/firebase";

export default async function handler(req, res) {
    const { Username, Password } = req.body;

    const getUser = await findUser({ Username })
    if (getUser) {
        const user = await getUserbySignin({ Username, Password });
        if(user) {
            res.status(201).json({
                status: true,
                user: user,
                //token: user.token,
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
            error: "Enter a valid username. Please try again."
        })
    }
  }