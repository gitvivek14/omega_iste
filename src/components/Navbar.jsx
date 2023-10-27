import React, { useState } from 'react'
import {NavBarLinks} from "../data/NavBarLinks"
import { HashLink } from 'react-router-hash-link'
const Navbar = () => {

  const [current, setCurrent] = useState('Home')
  return (
    <div className='z-40 flex visible bg-transparent backdrop-blur-xl'>
    <nav>
      {/* 'flex lg:flex-row gap-x-6 items-center 
        justify-center mx-auto  */}
        <ul className="flex md:flex-row md:gap-x-6 items-center 
        md:justify-center mx-auto flex-col
          z-20"
        >
            {
                NavBarLinks.map((link,idx)=>{
                    return(
                        <li key={idx}>
                         <HashLink to={`${link.path}`} className={`hover:text-blue-100
                         transition-all duration-100  ${current==link.title ? "text-blue-100":"text-white"} 
                         ease-in-out hover:text-lg font-face-gm`} smooth onClick={()=>{
                          setCurrent(link.title)
                         }}>{link.title}
                         </HashLink>
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