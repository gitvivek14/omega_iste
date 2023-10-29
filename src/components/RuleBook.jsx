import React from 'react'
import StarsCanvas from './canvas/Stars'

const RuleBook = () => {
  return (
    <div className='w-11/12 flex flex-col mx-auto mt-12'>
    <div className=' flex   flex-row items-center justify-center w-full'>
            <h1 className='text-sky-300 font-face-gm font-bold text-[3rem] 
            space-x-2 text-center mx-auto'>RULEBOOK</h1>
        </div>

        <div className='w-10/12  flex justify-center items-center mx-auto mt-6 flex-col min-h-min'>
        <div className='text-white md:p-7  p-4 text-[20px] font-face-gm md:leading-10 leading-normal backdrop-blur-3xl'>
           1. Participants must log in to the designated platform on the specified date.
           <br></br>
            2. Each participant will have 60 minutes to solve 3 coding questions.
            <br></br>
            3. The final showdown will feature the top 48 participants based on their performance.
            <br></br>
            4. The main event is an in-person, one-on-one competition with no team participation.
            <br></br>
            5.  The duration of the entire event is 4 hours.
            <br></br>
            6.  There will be one question for all the  participants in each round
            <br></br> 
            7.  Each round is set at a 20-minute duration. 
            <br></br>
            8.  Fastest problem-solver or participants successfully satisfying the most test cases (in cases where time becomes a factor) will earn the right to progress to the next round.
            <br></br>
            9.  The process is repeated until two winners emerge.
            <br></br>
            10. Tie breaker will be a rapid-fire round consisting of 5 questions. The quickest and the most accurate participants will advance to the next level.
            <br></br>

            11. Each candidate must bring their laptops and other necessary technical equipment required for the contest.
            <br></br>


        </div>
    </div>
    </div>
  )
}

export default RuleBook