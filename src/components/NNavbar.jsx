import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { Button } from '@radix-ui/themes'
import {MdOutlinePeopleOutline} from 'react-icons/md'

const NNavbar = () => {
    const NavLinks = [
        {
            title:"Home",
        },
        {
            title:'Our Team',
        },{
            title:'Events',
            
        },
        {
            title:'About',
            
        },
        {
            title:'Sponsors',
            
        }
    ]
  return (
    <div className='w-full flex items-center justify-center h-20 flex-row 
    backdrop-blur-lg text-white'>
      <div className='w-11/12 items-center justify-between flex'>
          {/* <Link to ='/'>
              <img src= {logo} loading='lazy' width={28} height={28}>

              </img>
          </Link> */}
          {/* navlinks */}
          <div>
          <nav>
              <ul className='flex flex-row gap-x-6 items-center justify-center mx-auto'>
                  {
                      NavLinks.map((link,idx)=>{
                          return(
                              <li key={idx}>
                                  <p className='text-white'>
                                      {link.title}
                                  </p>
                              </li>
                          )
                      })
                  }

              </ul>
          </nav>
          </div>
          <div className='flex items-center justify-center gap-2'>
              <Button variant='soft' size="3">
                  <MdOutlinePeopleOutline className='text-lg' />
                  <p className='text-white'>
                  Register
                  </p>             
              </Button>
          </div>
          
      </div>

  </div>
  )
}

export default NNavbar