import React from 'react'

const About = () => {
  return (
    <div className='w-11/12 flex flex-col mx-auto items-start justify-center mt-[5rem]'>
      <div></div>
    <div className=' flex w-full items-center justify-center mt-10' id='about'>
        <h1 className='text-sky-300 font-face-gm font-bold text-[3rem] space-x-2 mx-auto text-center'>ABOUT THE EVENT</h1>
    </div>
    {/* //bg-[#1c1334b3] */}
    <div className='w-10/12  bg-transparent 
 max-h-max flex justify-start items-center mx-auto mt-6 flex-col landing1'>
    {/* that blue ball */}
    {/* <div className='w-full flex items-center justify-start p-4 gap-3'>
        <img src={mask} className='mask1 rounded-full'></img>
        <p className='font-bold text-[1.5rem]
         hover:bg-blue-100 hover:text-white transition-all duration-200 ease-in-out
          text-blue-100 font-face-gm'>About the Event</p>
    </div> */}

    <div className='text-white md:p-6 p-4 text-[20px] font-face-gm flex flex-wrap leading-normal backdrop-blur-3xl bg-transparent '>
    The Indian Society for Technical Education (ISTE) is set to host an exhilarating event named OMEGA, a head-to-head coding competition designed to bring 
    out the best in technical minds. The event is divided into two stages, starting with a Preliminary Round conducted on a designated online platform. Here, participants will be given a challenging set of three Data Structures and Algorithms (DSA) questions, with a strict time limit of 60 minutes to demonstrate their problem-solving prowess. The top  participants showcasing exceptional performance will advance to the main event, ensuring that only the best of the best move forward to the next stage.
<br></br>
<br></br>
The main event of OMEGA promises to be a thrilling 
in-person showdown, where the shortlisted participants will face off in a 
series of one-on-one coding challenges. This intense competition spans over a 
duration of four hours, testing not only technical acumen but also resilience and adaptability under 
pressure. The rounds will consist of one question for all participants where each round will be of 20 minutes. 

The participants who manage to solve the question first or satisfy maximum test cases 
(in case the time exceeds) will advance to the next round. This process continues until we are 
finally left with the top two candidates who emerge as winners.
    </div>
</div>
</div>
  )
}

export default About