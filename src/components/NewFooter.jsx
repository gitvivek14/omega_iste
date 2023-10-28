import { Footer } from 'flowbite-react'
import React from 'react'
import omega from "../assets/images/omega.jpg"
import { Brackets } from 'lucide-react'


const NewFooter = () => {
  return (
    <div>
      
<Footer class="bg-transparent rounded-lg shadow dark:bg-gray-900 m-4 text-white">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
                {/* <img src={omega} class=" mr-3" alt="Omega Logo" width={150} height={150}/> */}
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Omega</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-white">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6  text-white">About</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 text-white">Contact</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 text-white">Home</a>
                </li>
                <li>
                    <a href="#" class="hover:underline text-white">Our Team</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        
        <span class="block text-sm text-gray-500 sm:text-center
         dark:text-white">© 2023 <a href="" class="hover:underline">Omega™</a>. All Rights Reserved.
        
         </span>
         <span className='text-center flex items-center justify-center mx-auto text-sm'>Made with ❤️ by ISTE Team.
          </span>
      
         
    </div>
</Footer>


    </div>
  )
}

export default NewFooter