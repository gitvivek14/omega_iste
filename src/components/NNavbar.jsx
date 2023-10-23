import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import logo from '../assets/images/logo.png'
import {MdOutlinePeopleOutline} from 'react-icons/md'
import omega from '../assets/images/omega.jpg'
import {NavBarLinks} from "../data/NavBarLinks"
import { ModalOverlay, useDisclosure } from '@chakra-ui/react'
import RegistrationModal from './RegistrationModal'


const NNavbar = () => {
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
    <div className='w-full flex items-center justify-center h-20 flex-row 
    backdrop-blur-3xl text-white'>
      <div className='w-11/12 items-center justify-between flex'>
          {/* navlinks */}
          <div>
            <img src={omega} width={140} height={140} className='mix-blend-multiply'></img>
          </div>
          <div>
          <nav>
              <ul className='flex flex-row gap-x-6 items-center justify-center mx-auto'>
                  {
                      NavBarLinks.map((link,idx)=>{
                          return(
                              <li key={idx}>
                                <Link to={link.path} className='transition-all duration-200 ease-in-out'>
                                  <p className='text-white hover:text-blue-100 font-face-gm
                                  transition-all ease-in duration-100 hover:scale-105' onClick={()=>{
                                    navigate(`${link.path}`)
                                  }}>
                                      {link.title}
                                  </p>
                                  </Link>
                              </li>
                          )
                      })
                  }

              </ul>
          </nav>
          </div>
          <div className='flex items-center justify-center gap-2'>
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
  </div>
  )
}

export default NNavbar