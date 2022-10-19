import img_register from '../public/img_register.png'
import Link from 'next/link'
import { useState } from 'react'
import { doc, setDoc } from "firebase/firestore"
import { db } from '../lib/firebase'

export default function register() {

   const [username, setUsername] = useState("")
   const [password, setPassword] = useState("")
   const [fullname, setFullname] = useState("")
   const [email, setEmail] = useState("")
   const [phonenumber, setPhonenumber] = useState("")

   async function createUser(e) {
      var f = document.getElementById("regist-form");
      e.preventDefault();
      try {
        const docName = await doc(db, "User", username+phonenumber);
        const docData = {
          Username: username,
          Password: password,
          Name: fullname,
          Email: email,
          Phonenumber: phonenumber,
          Role: "User"
        };
        const result =  await setDoc(docName, docData);
        alert("Registration successfully !!");
        f.setAttribute('action',"signin");
      } catch (e) {
        console.error("Error adding document: ", e);
        f.setAttribute('action',"register");
      }
      return true;
    }

   return (
      <>
         <div className="bg-[#2D106A] w-full h-screen">
            <div className="mx-auto xl:container">
               <div className="flex flex-row justify-center h-screen items-center ">
                  <div className="flex flex-row w-[1154px] h-[657px]">
                     <div className="basis-2/5 bg-[#8957F8] rounded-l-[10px]">
                        <div style={{ backgroundImage: `url(/img_register.png)` }} className="bg-cover w-full h-full">
                           <div className='flex flex-col justify-end px-[30px] pb-[40px] w-full h-full'>
                              <div className="text-[65px] font-Commissioner font-bold text-[#FFFFFF]">FIDELIO</div>
                              <p className="text-[15px] font-Commissioner font-semibold text-[#FFFFFF]">A web app that enhances the listening experience of the deaf people.</p>
                           </div>
                        </div>
                     </div>
                     <div className="basis-3/5 bg-[#040926] rounded-r-[10px]">
                     <form id="regist-form" onSubmit={createUser}>
                        <div className="flex flex-col w-full h-full items-center pt-[32px]">
                           <div className='text-[48px] font-League_Spartan font-bold text-[#FFFFFF]'>Register</div>
                           <div className='w-[427px] h-[1px] bg-[#6D7097] mb-[24px]'></div>
                           <div className='flex flex-col items-start gap-[4px] mb-[24px]'>
                              <label htmlFor="" className="font-Commissioner text-[14px] font-normal text-[#FFFFFF] ml-[18px] after:content-['*'] after:ml-0.5 after:text-red-500">Username</label>
                              <input type="text" id={username} onChange={(e) => setUsername(e.target.value)} className="bg-[#2C2E47]  w-[445px] h-[56px]  border border-[#D6D5E8] rounded-[10px] pl-[18px] py-[18px] text-[#FFFFFF] font-Commissioner text-[14px] focus:ring-[#5D37AC] focus:ring focus:text-white focus:outline-none " placeholder="Enter your username" required />
                              {/* <p class="text-sm text-green-600 font-Commissioner "><span class="font-medium">Well done!</span> Some success messsage.</p> */}
                           </div>
                           <div className='flex flex-col items-start gap-[4px] mb-[24px]'>
                              <label htmlFor="" className="font-Commissioner text-[14px] font-normal text-[#FFFFFF] ml-[18px] after:content-['*'] after:ml-0.5 after:text-red-500">Password</label>
                              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-[#2C2E47]  w-[445px] h-[56px]  border border-[#D6D5E8] rounded-[10px] pl-[18px] py-[18px] text-[#FFFFFF] font-Commissioner text-[14px] focus:ring-[#5D37AC] focus:ring focus:text-white focus:outline-none " placeholder="Enter your Password" required />
                              {/* <p class="text-sm text-green-600 font-Commissioner "><span class="font-medium">Well done!</span> Some success messsage.</p> */}
                           </div>

                           <div className='flex flex-col items-start gap-[4px] mb-[24px]'>
                              <label htmlFor="" className="font-Commissioner text-[14px] font-normal text-[#FFFFFF] ml-[18px] after:content-['*'] after:ml-0.5 after:text-red-500">Full name</label>
                              <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} className="bg-[#2C2E47]  w-[445px] h-[56px]  border border-[#D6D5E8] rounded-[10px] pl-[18px] py-[18px] text-[#FFFFFF] font-Commissioner text-[14px] focus:ring-[#5D37AC] focus:ring focus:text-white focus:outline-none " placeholder="Enter your Full name" required />
                              {/* <p class="text-sm text-green-600 font-Commissioner "><span class="font-medium">Well done!</span> Some success messsage.</p> */}
                           </div>

                           {/* <div className='flex flex-row gap-[7px] mb-[24px]'>
                              <div className='flex flex-col items-start gap-[4px] '>
                                 <label htmlFor="" className="font-Commissioner text-[14px] font-normal text-[#FFFFFF] ml-[18px] after:content-['*'] after:ml-0.5 after:text-red-500">First Name</label>
                                 <input type="text" className="bg-[#2C2E47]  w-[220px] h-[56px]  border border-[#D6D5E8] rounded-[10px] pl-[18px] py-[18px] text-[#FFFFFF] font-Commissioner text-[14px] focus:ring-[#5D37AC] focus:ring focus:text-white focus:outline-none " placeholder="Enter your first name" required />
                              </div>
                              <div className='flex flex-col items-start gap-[4px] '>
                                 <label htmlFor="" className="font-Commissioner text-[14px] font-normal text-[#FFFFFF] ml-[18px] after:content-['*'] after:ml-0.5 after:text-red-500">Last Name</label>
                                 <input type="text" className="bg-[#2C2E47]  w-[220px] h-[56px]  border border-[#D6D5E8] rounded-[10px] pl-[18px] py-[18px] text-[#FFFFFF] font-Commissioner text-[14px] focus:ring-[#5D37AC] focus:ring focus:text-white focus:outline-none " placeholder="Enter your last name" required />
                              </div>
                           </div> */}
                           <div className='flex flex-row gap-[7px] mb-[37px]'>
                              <div className='flex flex-col items-start gap-[4px] '>
                                 <label htmlFor="" className="font-Commissioner text-[14px] font-normal text-[#FFFFFF] ml-[18px] after:content-['*'] after:ml-0.5 after:text-red-500">Email</label>
                                 <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-[#2C2E47]  w-[220px] h-[56px]  border border-[#D6D5E8] rounded-[10px] pl-[18px] py-[18px] text-[#FFFFFF] font-Commissioner text-[14px] focus:ring-[#5D37AC] focus:ring focus:text-white focus:outline-none " placeholder="Enter your e-mail" required />
                              </div>
                              <div className='flex flex-col items-start gap-[4px] '>
                                 <label htmlFor="" className="font-Commissioner text-[14px] font-normal text-[#FFFFFF] ml-[18px] after:content-['*'] after:ml-0.5 after:text-red-500">Phone Number</label>
                                 <input type="text" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} className="bg-[#2C2E47]  w-[220px] h-[56px]  border border-[#D6D5E8] rounded-[10px] pl-[18px] py-[18px] text-[#FFFFFF] font-Commissioner text-[14px] focus:ring-[#5D37AC] focus:ring focus:text-white focus:outline-none " placeholder="Enter your phone number" required />
                              </div>
                           </div>
                           <button type="submit" href="/signin" className="w-[170px]  h-[41px] rounded-[50px] text-[15px] text-[#FFFFFF] font-medium font-League_Spartan bg-gradient-to-r from-[#794BD9] via-[#A35AAD] to-[#FA59AB] mb-[12px] focus:ring focus:ring-[#5D37AC]" >Register Account</button>
                           <div className="font-League_Spartan text-[#696F79] text-[12px]">Do you already have an account? <Link href="/signin"><span className="text-[#1565D8]"><u className=' cursor-pointer'>Sign in</u></span></Link>  </div>
                        </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
