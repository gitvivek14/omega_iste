import React from 'react'
import landingimg from '../assets/images/bg.jpg'
import Navbar from '../components/Navbar'
import { Code } from '@radix-ui/themes'
import CTAButton from '../components/CTAButton'
import mask from '../assets/images/maskgroup2.png';
import india from '../assets/sponsors/coding-ninja.png';
import Footer from '../components/Footer'
import ComputersCanvas from '../components/canvas/Computer'
import omega from '../assets/images/omega_nobg.jpg'
import RegistrationModal from '../components/RegistrationModal'
import { ModalOverlay, useDisclosure } from '@chakra-ui/react'
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
    const OverlayOne = () => (
        <ModalOverlay
        bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
  
  return (
    
    <div className='w-full h-full'>

    
    <div className='flex flex-col items-center justify-center w-full mx-auto relative'>
        <div className='w-full mx-auto flex items-center justify-center'>
            <img src={omega} className='w-full h-full bg-contain mix-blend-difference mx-auto' ></img>
        </div>

        <div className='flex justify-center items-center absolute z-10 -bottom-11 mx-auto'>
            <button className='text-center text-[13px] px-6 py-3 
            rounded-md font-bold
             bg-yellow-400 text-black' 
             onClick={()=>{
                setOverlay(<OverlayOne/>)
                onOpen();
             }}
             >
                Register
            </button>
    </div>
    {/* <h1 className=' font-bold text-[10rem] font-outline-4 text-transparent font-face-sm'>OMEGA</h1> */}
    </div>
  

    




    {/*About-Us Section */}
    <div className='w-11/12 flex flex-col mx-auto items-start justify-start'>
        <div className=' flex w-full items-center justify-center mt-10'>
            <h1 className='text-yellow-50 font-face-sm font-semibold text-[3rem] space-x-2 mx-auto'>About The Event</h1>
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

        <div className='text-white p-7 text-[20px] font-face-mm'>
        OMEGA, by the Indian Society for Technical Education (ISTE), is a 
        high-stakes coding competition showcasing top technical talent. 
        It consists of a challenging online Preliminary Round with three programming questions. 
        The top performers advance to a four-hour, in-person showdown featuring one-on-one coding 
        challenges.
        The fastest and most accurate participants progress, culminating in two winners
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
                    <div className='w-60 h-50 rounded-lg flex-col p-5 backdrop-blur-sm spo 
                     hover:scale-125 shadow-lg shadow-purple-400 ease-in duration-200 hover:shadow-orange-400 hover:shadow-md transition-all'>
                        <div className='flex items-center flex-col justify-center gap-4 rounded-xl '>
                            <img src={india} className='w-full h-full'></img>
                            <div className='w-full mx-auto h-[1px] text-white bg-white'></div>
                        </div>
                        <div className='flex flex-col items-center justify-center mt-4'>
                            <p className='font-semibold text-lg text-white'>Coding Ninja</p>
                        </div>

                    </div>

                )
            })
        }

    </div>   
    </div>
    <Footer></Footer>
    {
        isOpen && <RegistrationModal isOpen={isOpen} onClose={onClose} overlay={overlay}></RegistrationModal>
    }
    </div>

   
    
  )
}

export default Home