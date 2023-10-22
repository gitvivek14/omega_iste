import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { Button } from '@radix-ui/themes'
import {MdOutlinePeopleOutline} from 'react-icons/md'
import backgroundimg from '../assets/images/bg3.png';


const Navbar = () => {
    const NavLinks = [
        {
            title:"Home",
        },
        {
            title:'Our Team',
        },{
            title:'Events',
            
        }
    ]
  return (
    <>
    {/* section-1 */}
    <div className='w-full relative h-[100vh]'>
        {/* <div className='flex items-center justify-center mx-auto w-full h-full -z-10'>
        <img src={backgroundimg} className='w-[100vw] mx-auto -z-10'></img>
        </div> */}
        
    <div className='w-full flex items-center justify-center h-20 flex-row 
      backdrop-blur-lg text-white absolute top-0 z-10'>
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

    {/* landingtext */}
    <div className='flex flex-col items-center justify-center absolute left-[50%] top-[25%] right-[50%]'>
        <h1 className=' font-bold text-[10rem] font-outline-4 text-transparent'>OMEGA</h1>

    </div>

    </div>
     
    </>
   
  )
}

export default Navbar