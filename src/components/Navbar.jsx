import React, { useState } from 'react'
import {NavBarLinks} from "../data/NavBarLinks"
import { HashLink } from 'react-router-hash-link'
const Navbar = () => {

  const [current, setCurrent] = useState('Home')
  return (
    <div>
    <nav>
      {/* 'flex lg:flex-row gap-x-6 items-center 
        justify-center mx-auto  */}
        <ul className="flex md:flex-row gap-x-6 items-center 
        justify-center mx-auto sm:flex-col transition-all duration-150 ease-linear sm:justify-between "
        >
            {
                NavBarLinks.map((link,idx)=>{
                    return(
                        <li key={idx} className='flex flex-col scroll-smooth'>
                         <HashLink to={`${link.path}`} className={`hover:text-blue-100
                         transition-all duration-100 scroll-smooth ${current==link.title ? "text-blue-100":"text-white"} 
                         ease-in-out hover:text-lg font-face-gm`} smooth onClick={()=>{
                          setCurrent(link.title)
                         }}>{link.title}</HashLink>
                        </li>
                    )
                })
            }
        </ul>
    </nav>
    </div>
  )
}

export default Navbar