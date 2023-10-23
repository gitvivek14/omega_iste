import React from 'react'
import landingimg from '../assets/images/bg.jpg'
import Navbar from '../components/Navbar'
import { Code } from '@radix-ui/themes'
import CTAButton from '../components/CTAButton'
import mask from '../assets/images/maskgroup2.png';

import Footer from '../components/Footer'
import ComputersCanvas from '../components/canvas/Computer'
import omega from '../assets/images/omega_nobg.jpg'
import RegistrationModal from '../components/RegistrationModal'
import { ModalOverlay, useDisclosure } from '@chakra-ui/react'
import Contact from './Contact'
import {motion} from "framer-motion"
import {MdOutlinePeopleOutline} from 'react-icons/md'
import { styles} from "../styles"
import { useNavigate } from 'react-router'
import About from '../components/About'
import RuleBook from '../components/RuleBook'
import Sponsor from '../components/Sponsor'
const Home = () => {
    const navigate = useNavigate();
   
    const OverlayOne = () => (
        <ModalOverlay
        bg='blackAlpha.300'
        //   backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
  
  return (
    
    <div className='w-full h-full'>
    <div className='flex flex-col items-center justify-center w-full mx-auto relative mt-36'>
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
                <div className='flex items-center justify-center gap-1'>
                    <MdOutlinePeopleOutline className='text-lg'></MdOutlinePeopleOutline>
                    <p> Register</p>
                </div>
               
            </button>
        </div>
        {/* ball moving downwards */}
    <div className='absolute xs:bottam-32 -bottom-32 w-full flex justify-center items-center'>
      <a href="#about"><div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 '>
        <motion.dev animate={{y:[0,24,0]}} 
        transition={{duration:1.5,
        repeat:Infinity,
        repeatType:'loop' }}
        className="w-3 h-3 rounded-full bg-secondary mb-1 transition-all duration-200 ease-linear"
        ></motion.dev>
        </div></a>
    </div>
    </div>
  

    




 
    <About></About>
   <RuleBook></RuleBook>
   <Sponsor></Sponsor>
    <Contact></Contact>
    <Footer></Footer>


    {
        isOpen && <RegistrationModal isOpen={isOpen} onClose={onClose} overlay={overlay}></RegistrationModal>
    }
    </div>

   
    
  )
}

export default Home