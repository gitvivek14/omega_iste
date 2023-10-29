import React from 'react'

import Loginf from '../components/Loginf'


const Template = () => {
  return (
    <div className='md:flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-20 gap-y-0 justify-between flex-col md:flex-row'>
       <div className='w-11/12 max-w-[450px] mx-auto'>
         <h1 className='text-richblack-100 font-semibold text-[1.875rem] leading-[2.375rem]'>form</h1>
         <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
            <span className='text-richblack-100 font-bold '>Omega</span>
            <br></br>
            <span className='text-blue-100 italic'>Register for the Event</span>
         </p>
         <Loginf></Loginf>
          {/* <div className='flex flex-col w-full items-center gap-y-4'>
            <div className='h-[1px] bg-richblack-700 w-full'></div>
            <p className='text-richblack-100'>OR</p>
            <div className='h-[1px] bg-richblack-700 w-full'></div>
          </div> */}

          {/* <button
          className='text-richblack-100 flex w-full
          items-center justify-center 
          rounded-[4px] font-md
           border-richblack-100 
           px-[12px] py-[8px] 
           gap-x-2 mt-6'>
            <FcGoogle className='text-3xl'></FcGoogle>
            
            Sign up With Google</button> */}

       </div>
       {/* <div className='relative w-11/12 max-w-[450px] mx-auto'>
            <img src={frame}
            alt='pattern'
            loading='lazy'
            width={558}
            height={584}></img>

<img src={frame}
            alt='pattern'
            loading='lazy'
            width={558}
            height={490}
            className='absolute -top-4 right-4'
            ></img>
          </div> */}
    </div>
  )
}

export default Template