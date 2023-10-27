import React from 'react'
import loader from "../assets/video/Loader.mp4"
import "./Preloader.css"
import { Circles } from 'react-loader-spinner'
import { Video } from 'lucide-react'

const PreLoader = () => {
  return (
  <div className='w-[100vw] h-[100vh] flex items-center justify-center mx-auto -z-10 bg-black'>
    <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
	<div class="wheel"></div>
	<div class="hamster">
		<div class="hamster__body">
			<div class="hamster__head">
				<div class="hamster__ear"></div>
				<div class="hamster__eye"></div>
				<div class="hamster__nose"></div>
			</div>
			<div class="hamster__limb hamster__limb--fr"></div>
			<div class="hamster__limb hamster__limb--fl"></div>
			<div class="hamster__limb hamster__limb--br"></div>
			<div class="hamster__limb hamster__limb--bl"></div>
			<div class="hamster__tail"></div>
		</div>
	</div>
	<div class="spoke"></div>
</div>
    {/* <Circles
  height="80"
  width="80"
    color="#00008B"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/> */}

  </div>
  )
}

export default PreLoader