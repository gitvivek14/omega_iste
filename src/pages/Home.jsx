import React from 'react'
import landingimg from '../assets/images/bg.jpg'
import Navbar from '../components/Navbar'
import { Code } from '@radix-ui/themes'
import CTAButton from '../components/CTAButton'
import mask from '../assets/images/maskgroup2.png';
import india from '../assets/images/indian.png';
import Footer from '../components/Footer'
import ComputersCanvas from '../components/canvas/Computer'
const Home = () => {
    const data = [
        {
            'title':'Nike',
            'description':"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc",
        },
        {
            'title':'Puma',
            'description':"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc",
        },
        {
            'title':'Puma',
            'description':"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc",
        },
        {
            'title':'Puma',
            'description':"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc",
        },
        {
            'title':'Puma',
            'description':"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc",
        },
        {
            'title':'Puma',
            'description':"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc",
        },
    ]
  return (
    <>
    <div className='flex flex-col items-center justify-center'>
    <h1 className=' font-bold text-[10rem] font-outline-4 text-transparent font-face-sm'>OMEGA</h1>
    </div>

    {/* <div className='mt-3 w-full flex items-center'>
    {/* <ComputersCanvas></ComputersCanvas> */}
  

    <div className='flex justify-center items-center'>
        <CTAButton active={true} linkto={'/'} >
            Register
        </CTAButton>
    </div>




    {/*About-Us Section */}
    <div className='w-11/12 flex flex-col mx-auto items-start justify-start'>
        <div className=' flex w-10/12'>
            <h1 className='text-yellow-50 font-face-sm font-semibold text-[3rem] space-x-2'>About us</h1>
        </div>
    <div className='w-10/12 bg-[#1c1334b3] border
     border-blue-100 h-[400px] flex justify-start items-center mx-auto mt-6 flex-col'>
        <div className='w-full flex items-center justify-start p-4 gap-3'>
            <img src={mask} className='mask1 rounded-full'></img>
            <p className='font-bold text-[1.5rem]
             hover:bg-blue-100 hover:text-white transition-all duration-200 ease-in-out
              text-blue-100 font-face-gm'>About the Event</p>
        </div>

        <div className='text-white p-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aliquid cum voluptas eligendi! Pariatur, deleniti esse est eligendi sint quas? Reprehenderit, explicabo culpa! Quaerat beatae enim perspiciatis aperiam aliquid illo.
        </div>
    </div>

    </div>

    {/* rulebook */}

    <div className='w-11/12 flex flex-col mx-auto mt-12 '>
    <div className=' flex   flex-row items-center justify-center w-full'>
            <h1 className='text-yellow-50 font-face-sm font-semibold text-[3rem] space-x-2 text-center mx-auto'>RuleBook</h1>
        </div>

        <div className='w-10/12 bg-[#1c1334b3] border
     border-blue-100 h-[400px] flex justify-start items-center mx-auto mt-6 flex-col'>
        <div className='w-full flex items-center justify-start p-4 gap-3'>
            <img src={mask} className='mask1 rounded-full'></img>
            <p className='font-extrabold text-[1.5rem] text-red-500 hover:bg-red-500 hover:text-white transition-all 
            ease-in duration-200 font-face-gm'>RULEBOOK</p>
        </div>

        <div className='text-white p-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aliquid cum voluptas eligendi! Pariatur, deleniti esse est eligendi sint quas? Reprehenderit, explicabo culpa! Quaerat beatae enim perspiciatis aperiam aliquid illo.
        </div>
    </div>

    </div>
   
    

    {/* sponsors */}
    <div className='flex items-center justify-center flex-col'>
        <div>
        <h1 className="text-[150px] text-yellow-300 font-bold mx-auto font-face-cm">SPONSORS</h1>
        </div>

    <div className='flex flex-row items-center flex-wrap justify-center gap-10 w-10/12 max-w-full'>
    {
            data.map((card,idx)=>{
                return(
                    <div className='w-60 h-50 rounded-2xl flex-col p-5 backdrop-blur-md spo'>
                        <div className='flex items-center flex-col justify-center gap-4 rounded-xl '>
                            <img src={india} className='w-full h-full'></img>
                        </div>
                        <div className='flex flex-col items-center justify-center mt-4'>
                            <p className='font-bold text-lg text-white'>Nike</p>
                        </div>

                    </div>

                )
            })
        }

    </div>

       


       
    </div>
    <Footer></Footer>
    
    </>



    
    
  )
}

export default Home