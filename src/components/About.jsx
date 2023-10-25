import React from 'react'

const About = () => {
  return (
    <div className='w-11/12 flex flex-col mx-auto items-start justify-start mt-[18rem]'id='about'>
    <div className=' flex w-full items-center justify-center mt-10'>
        <h1 className='text-yellow-50 font-face-sm font-semibold text-[3rem] space-x-2 mx-auto text-center'>About The Event</h1>
    </div>
    {/* //bg-[#1c1334b3] */}
<div className='w-10/12  bg-transparent border-[1px] border-solid border-orange-300
 max-h-max flex justify-start items-center mx-auto mt-6 flex-col landing1'>
    {/* that blue ball */}
    {/* <div className='w-full flex items-center justify-start p-4 gap-3'>
        <img src={mask} className='mask1 rounded-full'></img>
        <p className='font-bold text-[1.5rem]
         hover:bg-blue-100 hover:text-white transition-all duration-200 ease-in-out
          text-blue-100 font-face-gm'>About the Event</p>
    </div> */}

    <div className='text-white p-6 text-[20px] font-face-mm flex flex-wrap leading-normal'>
    OMEGA, by the Indian Society for Technical Education (ISTE), is a 
    high-stakes coding competition showcasing top technical talent. 
    It consists of a challenging online Preliminary Round with three programming questions. 
    The top performers advance to a four-hour, in-person showdown featuring one-on-one coding 
    challenges.
    The fastest and most accurate participants progress, culminating in two winners
    </div>
</div>
</div>
  )
}

export default About