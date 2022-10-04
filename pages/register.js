import img_register from '../public/img_register.png'

export default function register() {
   return (
      <>
         <div className="bg-[#2D106A] w-full h-screen">
            <div className="mx-auto xl:container">
               <div className="flex flex-row justify-center h-screen items-center ">
                  <div className="flex flex-row w-[1040px] h-[640px]">
                     <div className="basis-2/5 bg-[#8957F8] rounded-l-[10px]">
                        <div style={{ backgroundImage: `url(/img_register.png)` }} className="bg-cover w-full h-full">
                           <div className='flex flex-col justify-end px-[30px] pb-[40px] w-full h-full'>
                              <div className="text-[64px] font-Commissioner font-bold text-[#FFFFFF]">FIDELIO</div>
                              <p className="text-[15px] font-Commissioner font-normal text-[#FFFFFF]">A web app that enhances the listening experience of the deaf people.</p>
                           </div>
                        </div>
                     </div>
                     <div className="basis-3/5 bg-[#040926] rounded-r-[10px]">
                        <div className="flex flex-col w-full h-full items-center pt-[44px]">
                           <div className='text-[40px] font-Commissioner font-bold text-[#FFFFFF] mb-[11px]'>Register</div>
                           <div className='w-[427px] h-[1px] bg-[#6D7097] mb-[14px]'></div>
                           <div className='flex flex-col items-start gap-[7px] mb-[16px]'>
                              <label htmlFor="" className="font-Commissioner font-extralight text-[#FFFFFF] after:content-['*'] after:ml-0.5 after:text-red-500">Username</label>
                              <input type="text" className="bg-[#2C2E47]  w-[434px] h-[53px]  border border-gray-400 rounded-[10px] pl-[16px] px-[16px] text-[#FFFFFF] focus:ring-[#5D37AC] focus:ring focus:text-white focus:outline-none " placeholder="Enter your username" required/>
                              {/* <p class="text-sm text-green-600 font-Commissioner "><span class="font-medium">Well done!</span> Some success messsage.</p> */}
                           </div>
                           <div className='flex flex-col items-start gap-[7px] mb-[16px]'>
                              <label htmlFor="" className="font-Commissioner font-extralight text-[#FFFFFF]">Username</label>
                              <input type="text" className="bg-[#2C2E47]  w-[434px] h-[53px]  border border-gray-400 rounded-[10px] pl-[16px] px-[16px] text-[#FFFFFF] focus:ring-[#5D37AC] focus:ring focus:text-white focus:outline-none " placeholder="Enter your username" />
                           </div>
                           <div className='flex flex-col items-start gap-[7px] mb-[16px]'>
                              <label htmlFor="" className="font-Commissioner font-extralight text-[#FFFFFF]">Username</label>
                              <input type="text" className="bg-[#2C2E47]  w-[434px] h-[53px]  border border-gray-400 rounded-[10px] pl-[16px] px-[16px] text-[#FFFFFF] focus:ring-[#5D37AC] focus:ring focus:text-white focus:outline-none " placeholder="Enter your username" />
                           </div>
                           <div className='flex flex-col items-start gap-[7px] mb-[22px]'>
                              <label htmlFor="" className="font-Commissioner font-extralight text-[#FFFFFF]">Username</label>
                              <input type="text" className="bg-[#2C2E47]  w-[434px] h-[53px]  border border-gray-400 rounded-[10px] pl-[16px] px-[16px] text-[#FFFFFF] focus:ring-[#5D37AC] focus:ring focus:text-white focus:outline-none " placeholder="Enter your username" />
                           </div>
                           
                           
                           {/* <div className="w-[427px] mb-[21px]">
                              <input type="checkbox" className="bg-[#D9D9D9] w-[15px] h-[15px] mr-[9px] rounded-sm focus:ring-2 focus:ring-[#5D37AC]"/>
                              <label htmlFor="" className="text-[13px] font-Commissioner text-[#696F79]">I agree to<span className="text-[#1565D8]"><u> terms & conditions</u></span> </label>
                           </div> */}
                           <button type="submit" className="w-[170px] h-[41px] rounded-[50px] text-[15px] text-[#FFFFFF] font-medium font-Commissioner bg-gradient-to-r from-[#794BD9] via-[#A35AAD] to-[#FA59AB] mb-[12px] focus:ring focus:ring-[#5D37AC]" >
                              Register Account
                           </button>
                           <div className="text-[14px] font-Commissioner text-[#696F79]">Do you already have an account?  <span className="text-[#1565D8]"><u>Sign in</u></span> </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
