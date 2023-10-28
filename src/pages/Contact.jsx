import React from 'react'
import {useState,useRef} from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {fadeIn, textVariant,slideIn} from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper'
import emailjs from '@emailjs/browser'
import EarthCanvas from "../components/canvas/Earth"
import StarsCanvas from '../components/canvas/Stars';


const Contact = () => {
  const formref = useRef();
  const [form,setform] = useState({
    name: '',
    email:'',
    message:''
  })
  const[laoding,setload] =useState(false);
  const handlechange = (e)=>{
    const {name,value} = e.target;
    setform({
      ...form,[name]:value
    })
     
  }
  const handlesubmit = (e)=>{
    e.preventDefault();
    setload(true)
    emailjs.send(
      'service_ewu6933',
      // service id
      'template_sa6wwpq',
      // template,
      {
        from_name:form.name,
        to_name:'Vivek',
        from_email:form.email,
        to_email:'streberplatzedu@gmail.com',
        message:form.message,
      },
      '0Ga3Eur_fAR-Ioy2T'
      // id
    ).then(()=>{
      setload(false)
      alert("Message sent Succesfully");
      setform({
        name:'',
        email:'',
        message:''
      })
    },(error)=>{
      setload(false)
      alert('Something went Wrong')
    })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden ' id='contact'>
  <motion.div variants={slideIn('left',"tween",0.2,1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl '>
        <p className={`${styles.sectionSubText} text-white`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact Us.</h3>
        <form ref={formref} onSubmit={handlesubmit} className='mt-12 
        flex flex-col
         gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type='text' name='name' value={form.name} 
            onChange={handlechange} 
            placeholder="What's your Name?" 
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white outline-none border-none rounded-lg font-medium'></input>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type='text' name='email' value={form.email} 
            onChange={handlechange} 
            placeholder="What's your Email?" 
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white outline-none border-none rounded-lg font-medium'></input>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Message</span>
            <textarea  rows="7"
            name='message' 
            value={form.message} 
            onChange={handlechange} 
            placeholder="Type Message?" 
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white outline-none border-none rounded-lg font-medium'></textarea>
          </label>
          <button type='submit' 
          className='w-fit outline-none
           text-white shadow-md font-bold shadow-blue-100
            py-3 px-8 bg-tertiary rounded-xl'>
            {laoding?'Sending..':'Send'} </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right',"tween",0.2,1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
     >
      <EarthCanvas></EarthCanvas>
     </motion.div>

    </div>
    
  )
}

export default SectionWrapper(Contact,"contact")