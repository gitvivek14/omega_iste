import React from 'react'
import codingninja from '../assets/sponsors/coding-ninja.png';
import StarsCanvas from './canvas/Stars';
import {SponsLinks} from "../data/Sponsorlinks"
const Sponsor = () => {
  return (
    <div className='flex items-center justify-center flex-col mt-24' id='sponsors'>
    <div>
    <h1 className="text-[3rem] text-sky-300 font-bold mx-auto font-face-gm">SPONSORS</h1>
    </div>

<div className='flex flex-row items-center flex-wrap justify-center gap-10 w-10/12 max-w-full mt-10 '>
    
{
        SponsLinks.map((card,idx)=>{
            return(
                <div className={`w-60 h-50 rounded-lg flex-col p-5 backdrop-blur-2xl spo 
                 hover:scale-125 shadow-lg shadow-purple-400 ease-in duration-200 hover:${card.color}
                  hover:shadow-md transition-all flex`} key={idx}>
                    <div className='flex items-center flex-col justify-center gap-4 rounded-2xl '>
                        <img src={card.path}  width={200} height={140}></img>
                        <div className='w-full mx-auto h-[1px] text-white bg-white'></div>
                    </div>
                    <div className='flex flex-col items-center justify-center mt-4'>
                        <p className='font-semibold text-lg text-white'>{card.title}</p>
                    </div>

                </div>
            )
        })
    }
</div>   
</div>
  )
}

export default Sponsor