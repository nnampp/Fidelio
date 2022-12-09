import { useState} from "react"
import img_register from '../public/img_register.png'
import Link from 'next/link'
import { parseCookies } from 'nookies'
import { sign } from 'jsonwebtoken';
import notificationimg from "../public/notificationimg.png"

export default function Register() {
   const cookieuser = parseCookies()
   const tok = cookieuser.token;
   const [inputUsername , setWarningUsername] = useState(0)
   const [inputPassword ,setWarningPassword] = useState(0)
   const [inputEmail , setWarningEmail] = useState(0)
   const [inputPhoneNumber ,setWarningPhoneNumber] = useState(0)

   if(tok) {
      history.back();
   }

   async function handleSubmit(e) {
      e.preventDefault();
      const body = {
         Username: e.currentTarget.username.value,
         Password: e.currentTarget.password.value,
         Name: e.currentTarget.fullname.value,
         Email: e.currentTarget.email.value,
         Phonenumber: e.currentTarget.phonenumber.value,
         Role: "User"
      };
      
      const res = await fetch('/api/regist', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(body)
      });
      
      const res2 = await res.json();
      if (res2.usererror) {
         setWarningUsername(1);
      }
      else if (res2.passworderror) {
            //focus(res2.error);
            //alert(res2.error);
         //setWarningUsername(0);
         setWarningUsername(0);
         setWarningPassword(1);
      } 
      else if (res2.mailerror) {
         //setWarningUsername(0);
         setWarningUsername(0);
         setWarningPassword(0);
         setWarningEmail(1);
      }
      else if (res2.phoneerror) {
         //setWarningUsername(0);
         setWarningUsername(0);
         setWarningPassword(0);
         setWarningEmail(0);
         setWarningPhoneNumber(1);
      }
      else {
         alert(res2.message);
         window.location = '/signin';
      } 
   }

   //notification extension
   const showWarnUsername = () => {
      return (
         <>
            <div className='flex flex-row gap-[6px] mb-[10px] ml-[10px]'>
               <div className='flex flex-col items-center w-full h-full'>
                  <img src={notificationimg.src} alt="" className="w-[11px] h-[11px]" /> 
               </div>
               <div className='flex flex-col items-center w-full h-full'>
                  <p className="text-[10px] w-[420px] font-Commissioner font-normal text-[#DC1414]">Invalid username. Please try again. (Username must be English.)</p>
               </div>
            </div>
         </>
      )
   }
   const showWarnPassword = () => {
      return (
         <>
            <div className='flex flex-row gap-[6px] mb-[10px] ml-[10px]'>
               <div className='flex flex-col items-center w-full h-full'>
                  <img src={notificationimg.src} alt="" className="w-[11px] h-[11px]" /> 
               </div>
               <div className='flex flex-col items-center w-full h-full'>
                  <p className="text-[10px] w-[420px] font-Commissioner font-normal text-[#DC1414]">Invalid password. Please try again. (Password must be English at least 8 characters and it must contain at least one number and lowercase.)</p>
               </div>
            </div>
         </>
      )
   }
   const showWarnEmail = () => {
      return (
         <>
            <div className='flex flex-row gap-[6px] mb-[10px] ml-[10px]'>
               <div className='flex flex-col items-center w-full h-full'>
                  <img src={notificationimg.src} alt="" className="w-[11px] h-[11px]" /> 
               </div>
               <div className='flex flex-col items-center w-full h-full'>
                  <p className="text-[10px] w-[220px] font-Commissioner font-normal text-[#DC1414]">Enter a valid email address. Please try again.</p>
               </div>
            </div>
         </>
      )
   }
   const showWarnPhoneNumber = () => {
      return (
         <>
            <div className='flex flex-row gap-[6px] mb-[10px] ml-[10px]'>
               <div className='flex flex-col items-center w-full h-full'>
                  <img src={notificationimg.src} alt="" className="w-[11px] h-[11px]" /> 
               </div>
               <div className='flex flex-col items-center w-full h-full'>
                  <p className="text-[10px] w-[220px] font-Commissioner font-normal text-[#DC1414]">Enter a valid phone number. Please try again.</p>
               </div>
            </div>
         </>
      )
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
                              <p className="text-[15px] font-Commissioner font-semibold text-[#FFFFFF]">A web application that enhances the listening experience of the deaf people.</p>
                           </div>
                        </div>
                     </div>
                     <div className="basis-3/5 bg-[#040926] rounded-r-[10px]">
                     <form id="regist-form" onSubmit={handleSubmit}>
                        <div className="flex flex-col w-full h-full items-center pt-[32px]">
                           <div className='text-[48px] font-League_Spartan font-bold text-[#FFFFFF]'>Register</div>
                           <div className='w-[427px] h-[1px] bg-[#6D7097] mb-[24px]'></div>
                           <div className='flex flex-col items-start gap-[4px] mb-[24px]'>
                              <label htmlFor="" className="font-Commissioner text-[14px] font-normal text-[#FFFFFF] ml-[18px] after:content-['*'] after:ml-0.5 after:text-red-500">Username</label>
                              <input type="text" id="username" name="username" className={`${inputUsername ? "border-[#FA3939]" : "border-[#D6D5E8]"} bg-[#2C2E47]  w-[445px] h-[56px] border  rounded-[10px] pl-[18px] py-[18px] text-[#FFFFFF] font-Commissioner text-[14px] focus:ring-[#5D37AC] focus:ring focus:text-white focus:outline-none `} placeholder="Enter your username" required />
                              {/* <p class="text-sm text-green-600 font-Commissioner "><span class="font-medium">Well done!</span> Some success messsage.</p> */}
                           </div>
                           <div className='flex flex-col items-start gap-[4px] mb-[24px]'>
                              <label htmlFor="" className="font-Commissioner text-[14px] font-normal text-[#FFFFFF] ml-[18px] after:content-['*'] after:ml-0.5 after:text-red-500">Password</label>
                              <input type="password" id="password" name="password" className={`${inputPassword ? "border-[#FA3939]" : "border-[#D6D5E8]"} bg-[#2C2E47]  w-[445px] h-[56px] border  rounded-[10px] pl-[18px] py-[18px] text-[#FFFFFF] font-Commissioner text-[14px] focus:ring-[#5D37AC] focus:ring focus:text-white focus:outline-none `} placeholder="Enter your password" required />
                              {/* <p class="text-sm text-green-600 font-Commissioner "><span class="font-medium">Well done!</span> Some success messsage.</p> */}
                           </div>

                           <div className='flex flex-col items-start gap-[4px] mb-[24px]'>
                              <label htmlFor="" className="font-Commissioner text-[14px] font-normal text-[#FFFFFF] ml-[18px] after:content-['*'] after:ml-0.5 after:text-red-500">Full name</label>
                              <input type="text" id="fullname" name="fullname"  className="bg-[#2C2E47]  w-[445px] h-[56px] border border-[#D6D5E8]  rounded-[10px] pl-[18px] py-[18px] text-[#FFFFFF] font-Commissioner text-[14px] focus:ring-[#5D37AC] focus:ring focus:text-white focus:outline-none" placeholder="Enter your full name" required />
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
                           <div className='flex flex-row gap-[7px] mb-[37px] h-[60px]'>
                              <div className='flex flex-col items-start gap-[4px] '>
                                 <label htmlFor="" className="font-Commissioner text-[14px] font-normal text-[#FFFFFF] ml-[18px] after:content-['*'] after:ml-0.5 after:text-red-500">Email</label>
                                 <input type="text" id="email" name="email" className={`${inputEmail ? "border-[#FA3939]" : "border-[#D6D5E8]"} bg-[#2C2E47]  w-[220px] h-[56px] border  rounded-[10px] pl-[18px] py-[18px] text-[#FFFFFF] font-Commissioner text-[14px] focus:ring-[#5D37AC] focus:ring focus:text-white focus:outline-none `} placeholder="Enter your e-mail" required />
                              </div>
                              <div className='flex flex-col items-start gap-[4px] '>
                                 <label htmlFor="" className="font-Commissioner text-[14px] font-normal text-[#FFFFFF] ml-[18px] after:content-['*'] after:ml-0.5 after:text-red-500">Phone Number</label>
                                 <input type="text" id="phonenumber" name="phonenumber" className={`${inputPhoneNumber ? "border-[#FA3939]" : "border-[#D6D5E8]"} bg-[#2C2E47]  w-[220px] h-[56px] border  rounded-[10px] pl-[18px] py-[18px] text-[#FFFFFF] font-Commissioner text-[14px] focus:ring-[#5D37AC] focus:ring focus:text-white focus:outline-none `} placeholder="Enter your phone number" required />
                              </div>
                           </div>

                           <div className={`${inputUsername ? "" : "hidden" } `}>
                              {showWarnUsername()}
                           </div>
                           <div className={`${inputPassword ? "" : "hidden" } `}>
                              {showWarnPassword()}
                           </div>
                           <div className={`${inputEmail ? "" : "hidden" } `}>
                              {showWarnEmail()}
                           </div>
                           <div className={`${inputPhoneNumber ? "" : "hidden" } `}>
                              {showWarnPhoneNumber()}
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
