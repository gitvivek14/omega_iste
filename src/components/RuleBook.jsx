import React from 'react'
import StarsCanvas from './canvas/Stars'

const RuleBook = () => {
  return (
    <div className='w-11/12 flex flex-col mx-auto mt-12'>
    <div className=' flex   flex-row items-center justify-center w-full'>
            <h1 className='text-sky-300 font-face-gm font-bold text-[3rem] space-x-2 text-center mx-auto'>RULEBOOK</h1>
        </div>

        <div className='w-10/12 bg-[#1c1334b3] border
     border-blue-100  flex justify-center items-center mx-auto mt-6 flex-col min-h-min'>
        <div className='text-white p-7 text-[20px] font-face-mm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aliquid cum voluptas eligendi! Pariatur, deleniti esse est eligendi sint quas? Reprehenderit, explicabo culpa! Quaerat beatae enim perspiciatis aperiam aliquid illo.
        </div>
    </div>
    </div>
  )
}

export default RuleBook