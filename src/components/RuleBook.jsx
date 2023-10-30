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
           1. Omega is a competitive programming event with two distinct rounds
           <br></br>
            2. Registration of participants will be individual.
            <br></br>
            3. A Preliminary round will be on November 3, 2023 in online mode where participants will be allotted 60 minutes to solve three coding questions.
            <br></br>
            4. Top performers of the preliminary round will advance to the main event, which is on November 4, 2023 in offline mode.
            <br></br>
            5.  The main event will be in a knockout format. Each round will consist of a duel of participants in which they will have to solve a given  question within a stipulated time.
            <br></br>
            6.  The participant who solves the question first or passes the most test cases within the time limit will advance to the next round while the opponent gets knocked out.
            <br></br> 
            7.  The competition continues until one winner emerges. 
            <br></br>
            8.  In case of a tie, a rapid fire round of 5 questions will be held. The quickest and most and the accurate participants will advance to the next level.
            <br></br>
            9.  All participants must bring their laptops and necessary technical equipment for the contest.
            <br></br>
            10. Any participant cheating in any form will be disqualified then and there. The organizing committee reserves the right to qualify or disqualify teams at any stage, and its decision will be final.
            <br></br>

           


        </div>
    </div>
    </div>
  )
}

export default RuleBook