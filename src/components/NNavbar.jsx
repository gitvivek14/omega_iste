import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import logo from '../assets/images/logo.png'
import {MdOutlinePeopleOutline} from 'react-icons/md'
import omega from '../assets/images/omega_nobg.jpg'
import {NavBarLinks} from "../data/NavBarLinks"
import { ModalOverlay, useDisclosure } from '@chakra-ui/react'
import RegistrationModal from './RegistrationModal'
import {Menu} from "lucide-react"
import Navbar from './Navbar'



const NNavbar = () => {
    const [Open, setOpen] = useState(false)
    console.log("opemo",Open)
    const OverlayOne = () => (
        <ModalOverlay
        bg='blackAlpha.300'
        //   backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne/>)

    const toggleNavbar = ()=>{
      setOpen(!Open);
    }
  return (
    <div className='w-full flex lg:flex-row items-center justify-center h-20 flex-row 
    text-white fixed max-w-[98%] z-10 fill-transparent mx-auto backdrop-blur-[28px] mix-blend-screen
      '>
      <div className='w-11/12 items-center justify-between flex sm:justify-between
       sm:items-center relative'>
          {/* navlinks */}
          <div>
            <img src={logo} width={140} height={140} className='mix-blend-difference'></img>
          </div>
          <div className='hidden md:flex relative'>
          <Navbar></Navbar>
          </div>
         
          {/* <div className='md:hidden sm:flex
           flex-col justify-between items-baseline absolute top-[3.25rem] right-1 w-[2rem] h-[2rem] '
           onClick={()=>{
            setOpen(!Open)
           }}
           >

            <span className='h-[0.3rem] w-[100%] bg-white'></span>
            <span className='h-[0.3rem] w-[100%] bg-white'></span>
            <span className='h-[0.3rem] w-[100%] bg-white'></span>
          </div> */}

          <div className='md:hidden absolute right-0 transition-all duration-100 ease-in'>
            <button onClick={toggleNavbar}>
              <Menu></Menu>
            </button>
          </div>

          {/* <div className={`${Open ? "flex items-center w-full justify-center mx-auto":"hidden"} relative`}>
            <nav className='flex flex-col items-center absolute top-[20%] right-[50%] justify-center mx-auto'>
              <ul className='flex-col items-center justify-between'>
              {
                      NavBarLinks.map((link,idx)=>{
                          return(
                              <li key={idx}>
                               <a href={`${link.path}`} className='hover:text-blue-100
                               transition-all duration-100 
                               ease-in-out hover:text-lg font-face-gm bg-white text-violet-600 p-4'>{link.title}</a>
                              </li>
                          )
                      })
                  }

              </ul>

            </nav>

          </div> */}

          <div className='md:flex items-center justify-center gap-2 hidden'>
              {/* Button */}
            <button className="border-2 border-yellow-600 rounded-lg px-3 py-2 text-yellow-400 
            cursor-pointer hover:bg-yellow-600 hover:text-yellow-200" onClick={()=>{
                onOpen();
            }}>
                <div className='flex items-center justify-center gap-3'>
                    <MdOutlinePeopleOutline></MdOutlinePeopleOutline>
                    <p>Register</p>
                </div>
            </button>
          </div>
      </div>
    {
        isOpen && <RegistrationModal isOpen={isOpen} onClose={onClose} overlay={overlay}></RegistrationModal>
    }
    {
      Open && <div className='absolute md:hidden top-8 z-50'>
        <Navbar></Navbar>
      </div>
    }
  </div>
   

  )
}
export default NNavbar