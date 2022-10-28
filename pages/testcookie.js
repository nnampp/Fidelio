import { parseCookies } from 'nookies'
import { useEffect, useState } from 'react'
import cookie from 'js-cookie'

export default function testcookie() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const cookieuser = parseCookies()
    const user =  cookieuser.user ? JSON.parse(cookieuser.user) : ""
    const tok = cookieuser.token;
    //console.log(user);

    if(!tok) {
        handleLogout();
    }

    useEffect(() => { 
        setName(user.Name); 
        setEmail(user.Email); 
    } , [])

    async function handleLogout() {
		cookie.remove('token')
		cookie.remove('user')
        window.location = '/signin';
	}


    return (
        <>
            <h1>Welcome { name } to the darkness</h1>
            <h2>Your email is { email } </h2>
            <button onClick={handleLogout}>Logout</button>
        </>  
    )
}

/*export async function getServerSideProps(ctx){
    const {token} = parseCookies(ctx)
    if(!token){
        const {res} = ctx
        res.writeHead(302,{Location:"/"})
        res.end() 
    }
  
    return {
        props:{}
    }
  }*/