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
import kriti from '../assets/oc/Kriti.png'
import akshara from '../assets/oc/Akshara.jpeg'
import manya from '../assets/oc/Manya.jpg'
import dhruv from '../assets/oc/Dhruv.jpeg'
import jini from '../assets/oc/Jini.jpeg'

const Team = () => {
  return (
    <div>
    <section className="py-6 dark:text-gray-100">
	<div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
		<h1 className="text-green-500  font-bold leadi text-center sm:text-5xl">OUR TEAM</h1>
		{/* OEC */}
		
			<div className="flex flex-row flex-wrap-reverse justify-center">
				<div className="flex flex-col justify-center m-8 text-center">
					<img alt="Sarthak" className="self-center flex-shrink-0 w-72 h-72 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={sarthak} />
					<p className="text-xl font-semibold leadi">Sarthak Srivastava</p>
					<p className="dark:text-gray-400">OEC</p>
				</div>
				<div className="flex flex-col justify-center m-8 text-center">
					<img alt="Abhinav" className="self-center flex-shrink-0 w-72 h-72 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={abhinav} />
					<p className="text-xl font-semibold leadi">Abhinav Jain</p>
					<p className="dark:text-gray-400">OEC</p>
				</div>
			</div>	
		{/* EM */}	
		<div className="flex flex-row flex-wrap-reverse justify-center">
				<div className="flex flex-col justify-center m-16 text-center">
					<img alt="Jahanvi" className="self-center flex-shrink-0 w-72 h-72 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={jahanvi} />
					<p className="text-xl font-semibold leadi">Jahnvi Ranjan</p>
					<p className="dark:text-gray-400">EM</p>
				</div>
				<div className="flex flex-col justify-center m-16 text-center">
					<img alt="Sra" className="self-center flex-shrink-0 w-72 h-72 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={sra} />
					<p className="text-xl font-semibold leadi">Sra Bhatia</p>
					<p className="dark:text-gray-400">EM</p>
				</div>
				<div className="flex flex-col justify-center m-16 text-center">
					<img alt="Chaitanya" className="self-center flex-shrink-0 w-72 h-72 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={chaitanya} />
					<p className="text-xl font-semibold leadi">Chaitanya Jayant</p>
					<p className="dark:text-gray-400">EM</p>
				</div>
		</div>
		{/* MARKETING HEADS */}
		<div className="flex flex-row flex-wrap-reverse justify-center">
				<div className="flex flex-col justify-center m-16 text-center">
					<img alt="Arjun" className="self-center flex-shrink-0 w-72 h-72 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={arjun} />
					<p className="text-xl font-semibold leadi">Arjun Shekhar</p>
					<p className="dark:text-gray-400">Marketing Head</p>
				</div>
				<div className="flex flex-col justify-center m-16 text-center">
					<img alt="Gargi" className="self-center flex-shrink-0 w-72 h-72 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={gargi} />
					<p className="text-xl font-semibold leadi">Gargi Mehta</p>
					<p className="dark:text-gray-400">Marketing Head</p>
				</div>
				<div className="flex flex-col justify-center m-16 text-center">
					<img alt="Nutan" className="self-center flex-shrink-0 w-72 h-72 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={nutan} />
					<p className="text-xl font-semibold leadi">Nutan</p>
					<p className="dark:text-gray-400">Marketing Head</p>
				</div>
		</div>
		{/* TECH HEADS */}
		<div className="flex flex-row flex-wrap-reverse justify-center">
				<div className="flex flex-col justify-center m-16 text-center">
					<img alt="Aabharan" className="self-center flex-shrink-0 w-72 h-72 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={aabharan} />
					<p className="text-xl font-semibold leadi">Aabharan Gupta</p>
					<p className="dark:text-gray-400">Technical Head</p>
				</div>
				<div className="flex flex-col justify-center m-16 text-center">
					<img alt="Vivek" className="self-center flex-shrink-0 w-72 h-72 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={vivek} />
					<p className="text-xl font-semibold leadi">Vivek Arora</p>
					<p className="dark:text-gray-400">Technical Head</p>
				</div>
				<div className="flex flex-col justify-center m-16 text-center">
					<img alt="Saanya" className="self-center flex-shrink-0 w-72 h-72 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={saanya} />
					<p className="text-xl font-semibold leadi">Saanya Setia</p>
					<p className="dark:text-gray-400">Technical Head</p>
				</div>
		</div>
		<div className="flex flex-row flex-wrap-reverse justify-center">
		{/* CONTENT HEADS */}
				<div className="flex flex-col justify-center m-8 text-center">
					<img alt="Anushka" className="self-center flex-shrink-0 w-72 h-72 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={anushka} />
					<p className="text-xl font-semibold leadi">Anushka Sharma</p>
					<p className="dark:text-gray-400">Content Head</p>
				</div>
				<div className="flex flex-col justify-center m-8 text-center">
					<img alt="Abhyuday" className="self-center flex-shrink-0 w-72 h-72 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={abhyuday} />
					<p className="text-xl font-semibold leadi">Abhyuday Venkatesh</p>
					<p className="dark:text-gray-400">Content Head</p>
				</div>
		{/* CREATIVITY HEADS */}		
				<div className="flex flex-col justify-center m-8 text-center">
					<img alt="Geetansh" className="self-center flex-shrink-0 w-72 h-72 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={geetansh} />
					<p className="text-xl font-semibold leadi">Geetansh Mohindru</p>
					<p className="dark:text-gray-400">Creativity Head</p>
				</div>
				<div className="flex flex-col justify-center m-8 text-center">
					<img alt="Vanshika" className="self-center flex-shrink-0 w-72 h-72 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={vanshika} />
					<p className="text-xl font-semibold leadi">Vanshika Jindal</p>
					<p className="dark:text-gray-400">Creativity Head</p>
				</div>
		</div>
		<div className="flex flex-row flex-wrap-reverse justify-center">
		{/* DESIGN HEADS */}
				<div className="flex flex-col justify-center m-8 text-center">
					<img alt="Yash" className="self-center flex-shrink-0 w-72 h-72 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={anushka} />
					<p className="text-xl font-semibold leadi">Yash Bhargava</p>
					<p className="dark:text-gray-400">Design Head</p>
				</div>
				<div className="flex flex-col justify-center m-8 text-center">
					<img alt="Samridhi" className="self-center flex-shrink-0 w-72 h-72 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={samridhi} />
					<p className="text-xl font-semibold leadi"></p>
					<p className="dark:text-gray-400">Design Head</p>
				</div>
		{/* MEDIA HEADS */}		
				<div className="flex flex-col justify-center m-8 text-center">
					<img alt="Shreyansh" className="self-center flex-shrink-0 w-72 h-72 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={shreyansh} />
					<p className="text-xl font-semibold leadi">Shreyansh Srivastava</p>
					<p className="dark:text-gray-400">Media Head</p>
				</div>
				<div className="flex flex-col justify-center m-8 text-center">
					<img alt="Kriti" className="self-center flex-shrink-0 w-72 h-72 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={kriti} />
					<p className="text-xl font-semibold leadi">Kriti Goyal</p>
					<p className="dark:text-gray-400">Media Head</p>
				</div>
		</div>	
		{/* PUBLICITY HEADS */}
			<div className="flex flex-row flex-wrap-reverse justify-center">
				<div className="flex flex-col justify-center m-8 text-center">
					<img alt="Jini" className="self-center flex-shrink-0 w-72 h-72 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={jini} />
					<p className="text-xl font-semibold leadi">Jini Manchanda</p>
					<p className="dark:text-gray-400">Publicity Head</p>
				</div>
				<div className="flex flex-col justify-center m-8 text-center">
					<img alt="Akshara" className="self-center flex-shrink-0 w-72 h-72 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={akshara} />
					<p className="text-xl font-semibold leadi">Akshara Manocha</p>
					<p className="dark:text-gray-400">Publicity Head</p>
				</div>	
				<div className="flex flex-col justify-center m-8 text-center">
					<img alt="Dhruv" className="self-center flex-shrink-0 w-72 h-72 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={dhruv} />
					<p className="text-xl font-semibold leadi">Dhruv Sanmotra</p>
					<p className="dark:text-gray-400">Publicity Head</p>
				</div>
				<div className="flex flex-col justify-center m-8 text-center">
					<img alt="Manya" className="self-center flex-shrink-0 w-72 h-72 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={manya} />
					<p className="text-xl font-semibold leadi">Manya Bansal</p>
					<p className="dark:text-gray-400">Publicity Head</p>
				</div>
		</div>	
		
	</div>
</section>
    </div>
  )
}

export default Team