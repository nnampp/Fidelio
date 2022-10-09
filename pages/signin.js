import img_register from '../public/img_register.png'
import Link from 'next/link'

export default function register() {
   return (
      <>
         <div className="bg-[#00205F] w-full h-screen">
            <div className="mx-auto xl:container">
               <div className="flex flex-row justify-center h-screen items-center ">
                  <div className="flex flex-row w-[1026px] h-[639px]">
                     <div className="basis-[54.67%] bg-[#7BB2E5] rounded-l-[10px]">
                        <div style={{ backgroundImage: `url(/img_register.png)` }} className="bg-cover w-full h-full">
                           <div className='flex flex-col justify-end px-[30px] pb-[40px] w-full h-full'>
                              <div className="text-[65px] font-Commissioner font-bold text-[#FFFFFF]">FIDELIO</div>
                              <p className="text-[15px] font-Commissioner font-semibold text-[#FFFFFF]">A web app that enhances the listening experience of the deaf people.</p>
                           </div>
                        </div>
                     </div>
                     <div className="basis-[45.33%] bg-[#040926] rounded-r-[10px]">
                        <div className="flex flex-col w-full h-full items-center pt-[80px]">
                           <div className='text-[55px] font-League_Spartan font-bold text-[#FFFFFF] mb-[18px]'>Sign in</div>
                           <div className='font-Commissioner font-normal text-[#FFFFFF] mb-[40px]'>Welcome ! Let's log in before to the website.</div>
                           <div className='flex flex-col items-start gap-[8px] mb-[24px]'>
                              <label htmlFor="" className="font-Commissioner text-[14px] font-normal text-[#FFFFFF] ml-[18px] after:content-['*'] after:ml-0.5 after:text-red-500">Username</label>
                              <input type="text" className="bg-[#2C2E47]  w-[343px] h-[56px]  border border-[#D6D5E8] rounded-[10px] pl-[18px] py-[18px] text-[#FFFFFF] font-Commissioner text-[14px] focus:ring-[#7BB2E5] focus:ring focus:text-white focus:outline-none " placeholder="Enter your username" required />
                              {/* <p class="text-sm text-green-600 font-Commissioner "><span class="font-medium">Well done!</span> Some success messsage.</p> */}
                           </div>
                           <div className='flex flex-col items-start gap-[8px] mb-[51px]'>
                              <label htmlFor="" className="font-Commissioner text-[14px] font-normal text-[#FFFFFF] ml-[18px] after:content-['*'] after:ml-0.5 after:text-red-500">Password</label>
                              <input type="password" className="bg-[#2C2E47]  w-[343px] h-[56px]  border border-[#D6D5E8] rounded-[10px] pl-[18px] py-[18px] text-[#FFFFFF] font-Commissioner text-[14px] focus:ring-[#7BB2E5] focus:ring focus:text-white focus:outline-none " placeholder="Enter your Password" required />
                              {/* <p class="text-sm text-green-600 font-Commissioner "><span class="font-medium">Well done!</span> Some success messsage.</p> */}
                           </div>

                           
                           <button type="submit" className="w-[170px] h-[41px] rounded-[50px] text-[15px] text-[#FFFFFF] font-bold font-League_Spartan bg-gradient-to-r from-[#723AE8] via-[#6763CE] to-[#7BB2E5] mb-[44px] focus:ring focus:ring-[#7BB2E5]" >Login</button>
                           <div className="font-League_Spartan text-[#696F79]">I don't have an account? <Link href="/register"><span className="text-[#1565D8]"><u className=' cursor-pointer'>Register</u></span></Link>  </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
