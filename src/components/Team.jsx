import React from 'react'
import abhinav from '../assets/oc/abhinav.png'
import sarthak from '../assets/oc/Sarthak.jpg'
import sra from '../assets/oc/Sra.jpg'
import jahanvi from '../assets/oc/Jahanvi.jpg'
import chaitanya from '../assets/oc/Chaitanya.jpg'
import arjun from '../assets/oc/Arjun.jpg'
import gargi from '../assets/oc/Gargi.jpg'
import nutan from '../assets/oc/Nutan.jpg'
import aabharan from '../assets/oc/Aabharan.jpg'
import saanya from '../assets/oc/Saanya.jpg'
import vivek from '../assets/oc/Vivek.JPG'
import abhyuday from '../assets/oc/Abhyuday.jpg'
import anushka from '../assets/oc/Anushka.jpg'
import geetansh from '../assets/oc/Geetansh.jpg'
import vanshika from '../assets/oc/Vanshika.jpeg'
import samridhi from '../assets/oc/Samridhi.jpg'
import shreyansh from '../assets/oc/Shreyansh.jpg'
import akshara from '../assets/oc/Akshara.jpeg'
import manya from '../assets/oc/Manya.jpg'
import dhruv from '../assets/oc/Dhruv.jpeg'
import jini from '../assets/oc/Jini.jpeg'

const Team = () => {
  return (
    <div>
    <section className="py-6 dark:text-gray-100">
	<div className="container p-4 mx-auto space-y-16 sm:p-10">
		<div className="space-y-4">
        <h1 className="text-4xl font-bold leadi text-center sm:text-5xl">Our team</h1>
		</div>
         {/* OEC */}
            <div className="grid w-full grid-cols-1 gap-x-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-2">
                <div className="space-y-4">
                    <img alt="Abhinav" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src={sarthak} />
                    <div className="flex flex-col items-center">
                        <h4 className="text-xl font-semibold">Sarthak Srivastava</h4>
                        <p className="text-sm dark:text-gray-400">OEC</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <img alt="Abhinav" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src={abhinav} />
                    <div className="flex flex-col items-center">
                        <h4 className="text-xl font-semibold">Abhinav Jain</h4>
                        <p className="text-sm dark:text-gray-400">OEC</p>
                    </div>
                </div>
            </div>
        {/* EM */}			
        <div className="grid w-full grid-cols-1 gap-x-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-4">
                    <img alt="Abhinav" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src={sra} />
                    <div className="flex flex-col items-center">
                        <h4 className="text-xl font-semibold">Sra Bhatia</h4>
                        <p className="text-sm dark:text-gray-400">EM</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <img alt="Abhinav" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src={chaitanya} />
                    <div className="flex flex-col items-center">
                        <h4 className="text-xl font-semibold">Chaitanya Jayant</h4>
                        <p className="text-sm dark:text-gray-400">EM</p>
                    </div>
                </div>    
                <div className="space-y-4">
                    <img alt="Abhinav" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src={jahanvi} />
                    <div className="flex flex-col items-center">
                        <h4 className="text-xl font-semibold">Jahnvi Ranjan</h4>
                        <p className="text-sm dark:text-gray-400">EM</p>
                    </div>
                </div> 
            </div>
        {/* MARKETING HEADS */}
            <div className="grid w-full grid-cols-1 gap-x-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-4">
                    <img alt="Abhinav" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src={arjun} />
                    <div className="flex flex-col items-center">
                        <h4 className="text-xl font-semibold">Arjun Shekhar</h4>
                        <p className="text-sm dark:text-gray-400">Marketing Head</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <img alt="Abhinav" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src={gargi} />
                    <div className="flex flex-col items-center">
                        <h4 className="text-xl font-semibold">Gargi Mehta</h4>
                        <p className="text-sm dark:text-gray-400">Marketing Head</p>
                    </div>
                </div>    
                <div className="space-y-4">
                    <img alt="Abhinav" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src={nutan} />
                    <div className="flex flex-col items-center">
                        <h4 className="text-xl font-semibold">Nutan</h4>
                        <p className="text-sm dark:text-gray-400">Marketing Head</p>
                    </div>
                </div> 
            </div>
            {/* TECH */}
            <div className="grid w-full grid-cols-1 gap-x-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-4">
                    <img alt="Aabharan" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src={aabharan} />
                    <div className="flex flex-col items-center">
                        <h4 className="text-xl font-semibold">Aabharan Gupta</h4>
                        <p className="text-sm dark:text-gray-400">Technical Head</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <img alt="Abhinav" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src={vivek} />
                    <div className="flex flex-col items-center">
                        <h4 className="text-xl font-semibold">Vivek Arora</h4>
                        <p className="text-sm dark:text-gray-400">Technical Head</p>
                    </div>
                </div>    
                <div className="space-y-4">
                    <img alt="Abhinav" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src={saanya} />
                    <div className="flex flex-col items-center">
                        <h4 className="text-xl font-semibold">Saanya Setia</h4>
                        <p className="text-sm dark:text-gray-400">Technical Head</p>
                    </div>
                </div> 
            </div>
            {/* CONTENT HEADS */}
            <div className="grid w-full grid-cols-1 gap-x-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-4">
                    <img alt="Aabharan" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src={abhyuday} />
                    <div className="flex flex-col items-center">
                        <h4 className="text-xl font-semibold">Abhyuday Venkatesh</h4>
                        <p className="text-sm dark:text-gray-400">Content Head</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <img alt="Abhinav" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src={anushka} />
                    <div className="flex flex-col items-center">
                        <h4 className="text-xl font-semibold">Anushka Sharma</h4>
                        <p className="text-sm dark:text-gray-400">Content Head</p>
                    </div>
                </div>    
            {/* CREATIVITY HEADS */}
                <div className="space-y-4">
                    <img alt="Aabharan" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src={geetansh} />
                    <div className="flex flex-col items-center">
                        <h4 className="text-xl font-semibold">Geetansh Mohindru</h4>
                        <p className="text-sm dark:text-gray-400">Creativity Head</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <img alt="Abhinav" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src={vanshika} />
                    <div className="flex flex-col items-center">
                        <h4 className="text-xl font-semibold">Vanshika Jindal</h4>
                        <p className="text-sm dark:text-gray-400">Creativity Head</p>
                    </div>
                </div>    
            </div>
            {/* DESIGN HEADS */}
            <div className="grid w-full grid-cols-1 gap-x-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-4">
                    <img alt="Aabharan" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src={abhyuday} />
                    <div className="flex flex-col items-center">
                        <h4 className="text-xl font-semibold">Yash Bhargava</h4>
                        <p className="text-sm dark:text-gray-400">Design Head</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <img alt="Abhinav" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src={samridhi} />
                    <div className="flex flex-col items-center">
                        <h4 className="text-xl font-semibold">Samridhi Bhardwaj</h4>
                        <p className="text-sm dark:text-gray-400">Design Head</p>
                    </div>
                </div>    
            {/* MEDIA HEADS */}
                <div className="space-y-4">
                    <img alt="Aabharan" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src={shreyansh} />
                    <div className="flex flex-col items-center">
                        <h4 className="text-xl font-semibold">Shreyansh Sristava</h4>
                        <p className="text-sm dark:text-gray-400">Media Head</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <img alt="Abhinav" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src={vanshika} />
                    <div className="flex flex-col items-center">
                        <h4 className="text-xl font-semibold">Kriti Goyal</h4>
                        <p className="text-sm dark:text-gray-400">Media Head</p>
                    </div>
                </div>    
            </div>
            {/* PUBLICITY HEADS */}
            <div className="grid w-full grid-cols-1 gap-x-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-4">
                    <img alt="Aabharan" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src={dhruv} />
                    <div className="flex flex-col items-center">
                        <h4 className="text-xl font-semibold">Dhruv Sanmotra</h4>
                        <p className="text-sm dark:text-gray-400">Publicity Head</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <img alt="Abhinav" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src={jini} />
                    <div className="flex flex-col items-center">
                        <h4 className="text-xl font-semibold">JIni Manchanda</h4>
                        <p className="text-sm dark:text-gray-400">Publicity Head</p>
                    </div>
                </div>    
                <div className="space-y-4">
                    <img alt="Aabharan" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src={manya} />
                    <div className="flex flex-col items-center">
                        <h4 className="text-xl font-semibold">Manya Bansal</h4>
                        <p className="text-sm dark:text-gray-400">Publicity Head</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <img alt="Abhinav" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src={akshara} />
                    <div className="flex flex-col items-center">
                        <h4 className="text-xl font-semibold">Akshara Manocha</h4>
                        <p className="text-sm dark:text-gray-400">Publicity Head</p>
                    </div>
                </div>    
            </div>
	</div>
</section>
    </div>
  )
}

export default Team