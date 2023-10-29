import React from 'react'
import landingimg from '../assets/images/bg.jpg'
import Navbar from '../components/Navbar'
import { Code } from '@radix-ui/themes'
import CTAButton from '../components/CTAButton'
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
import StarsCanvas from '../components/canvas/Stars'
import { HashLink } from 'react-router-hash-link'
import Team from '../components/Team'
import NewFooter from '../components/NewFooter'
import Countdown from "../components/Countdown"
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
    
    <div className='w-full h-full' id='home'>
    <div className='flex flex-col items-center justify-center w-full mx-auto relative mt-36'>
        <div className='w-full mx-auto flex items-center justify-center z-40 mix-blend-lighten'>
            <img src={omega} className='w-full h-full bg-contain mx-auto sticky z-20 ' ></img>
        </div>

        <div className='flex justify-center items-center absolute z-10 -bottom-20 mx-auto'>
            <button className='text-center
             text-xl px-6 py-3 
            rounded-md font-semibold transition-all duration-200 ease-in hover:scale-125 cursor-pointer 
             bg-yellow-400 text-black' 
             onClick={()=>{
                setOverlay(<OverlayOne/>)
                onOpen();
             }}
             >
                <div className='flex items-center justify-center gap-1'>
                    <MdOutlinePeopleOutline className='text-xl'></MdOutlinePeopleOutline>
                    <p> Register</p>
                </div>
               
            </button>
        </div>

        <div className='w-full flex flex-col items-center justify-evenly mx-auto text-white'>
          <div>
           <p className='text-center font-semibold text-3xl'>Date : 4 November</p>
          </div>
          <div>
            <p className='text-center font-semibold text-2xl'>Time : 5:30 PM</p>
          </div>
          <div>
            <p className='text-center font-semibold text-xl'>
            Venue  : LP-109
            </p>
          </div>
        </div>
        {/* ball moving downwards */}
    {/* <div className='absolute xs:bottam-32 -bottom-32 w-full flex justify-center items-center'>
      <HashLink to="#about" smooth><div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 '>
        <motion.dev animate={{y:[0,24,0]}} 
        transition={{duration:1.5,
        repeat:Infinity,
        repeatType:'loop' }}
        className="w-3 h-3 rounded-full bg-secondary mb-1 transition-all duration-200 ease-linear"
        ></motion.dev>
        </div></HashLink>
    </div> */}
    </div>
  

    




 <div className='relative z-0'>
  <Countdown></Countdown>
 <About></About>
   <RuleBook></RuleBook>
   <Sponsor></Sponsor>
    <Team></Team>
   {/* <StarsCanvas></StarsCanvas> */}
   <Contact></Contact>
   <NewFooter></NewFooter>
  

 </div>
   

  
   
    


    {
        isOpen && <RegistrationModal isOpen={isOpen} onClose={onClose} overlay={overlay}></RegistrationModal>
    }
    </div>

   
    
  )
}

export default Home