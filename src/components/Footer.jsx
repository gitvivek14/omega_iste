import React from 'react'
import {AiFillFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter} from 'react-icons/ai'
import StarsCanvas from './canvas/Stars'
const Footer = () => {
  return (
    <div className='w-11/12 flex flex-col mx-auto p-4 text-white'>

        
        <div className='flex flex-row items-center justify-evenly w-full'>
            <div className='flex flex-col items-start w-[40%] justify-start'>
                <h2 className='font-bold text-lg'>Omega</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aliquid asperiores vero reprehenderit perferendis nam fugiat, minus delectus velit ratione eos, repudiandae id, architecto dolor labore! Id molestias cumque provident?</p>
            </div>

            <div className='flex items-center justify-center flex-row'>
                <ul>
                    <li>About Us</li>
                    <li>FAQs</li>
                    <li>FAQs</li>
                    <li>FAQs</li>
                </ul>
            </div>
        </div>
        <div className='w-[85%] mx-auto  h-[2px] bg-white mt-3 mr-3'>
            {/* divider */}
        </div>
        {/* last */}
        <div className='flex flex-col items-center justify-start w-full mt-3'>
            <div>
            <h5>Connect with us on:</h5>

            </div>
           
            <div className='flex flex-row items-center'>
            <AiOutlineInstagram></AiOutlineInstagram>
            <AiOutlineLinkedin></AiOutlineLinkedin>
            <AiOutlineTwitter></AiOutlineTwitter>
            <AiFillFacebook></AiFillFacebook>
            </div>
            

        </div>

    </div>
  )
}

export default Footer