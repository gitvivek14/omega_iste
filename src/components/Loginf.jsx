import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import {registeruser} from "../services/operations/registerapi"
function LoginForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    name:"",
    rollno:"",
    email:"",
    phone:"",
    cemail:""
});
//https://www.wanderlooms.com/cdn/shop/files/Wanderlooms_black_848bf57c-454a-43a9-b9a9-0e54b9e4f331.png?v=1671802163

  const {name,rollno,email,phone,cemail} = formdata;
  const handleOnChange = (e) => {
    setFormdata((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }


  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(registeruser(name,rollno,email,phone,cemail));
  }
  
  return (
    <form
      onSubmit={handleOnSubmit}
      className="mt-6 flex w-full flex-col gap-y-4"
    >
      
      <label>
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Full Name <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="text"
          name="name"
          value={name}
          onChange={handleOnChange}
          placeholder="Enter Full Name"
          className="rounded-lg bg-richblack-700 p-3 text-[16px] leading-[24px]
           text-richblack-5 shadow-[0_1px_0_0] shadow-white/50
           placeholder:text-richblack-200 focus:outline-none w-full"
        />  
      </label>
      <label className="w-full">
        <p className="mb-1 text-[0.875rem] 
        leading-[1.375rem]
         text-richblack-5">
          Thapar Email Address <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="text"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="Enter Your  Thapar email address"
          className="rounded-lg bg-richblack-700 p-3 text-[16px] leading-[24px] text-richblack-5 shadow-[0_1px_0_0] shadow-white/50 placeholder:text-richblack-200 focus:outline-none w-full"
        />
      </label>
      <label className="w-full">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Roll Number <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="number"
          name="rollno"
          value={rollno}
          onChange={handleOnChange}
          placeholder="Enter Your  Roll Number"
          className="rounded-lg bg-richblack-700 
          p-3 text-[16px] leading-[24px]
           text-richblack-5 shadow-[0_1px_0_0]
            shadow-white/50
             placeholder:text-richblack-200 
             focus:outline-none w-full"
        />
      </label>
      <label>
      
      <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
        Mobile Number <sup className="text-pink-200">*</sup>
      </p>
      <input
        required
        type="number"
        name="phone"
        value={phone}
        onChange={handleOnChange}
        placeholder="Enter Mobile Number"
        className="rounded-lg bg-richblack-700 p-3 text-[16px] leading-[24px]
         text-richblack-5 shadow-[0_1px_0_0] shadow-white/50
         placeholder:text-richblack-200 focus:outline-none w-full scroll-m-1"
      />  
    </label>

      <div>
        <p className='text-xl text-white font-bold'>Coding Ninja's Link For Registration</p>
        <Link to="https://bit.ly/3tHwsPa">
        <span className='text-2xl text-red-700 font-extrabold cursor-pointer'>https://bit.ly/3tHwsPa</span>
        </Link>
        
      </div>
      <label>
      
      <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
        Registered Email on Coding Ninja Platform <sup className="text-pink-200">*</sup>
      </p>
      <input
        required
        type="email"
        name="cemail"
        value={cemail}
        onChange={handleOnChange}
        placeholder="Enter Registered Email"
        className="rounded-lg bg-richblack-700 p-3 text-[16px] leading-[24px]
         text-richblack-5 shadow-[0_1px_0_0] shadow-white/50
         placeholder:text-richblack-200 focus:outline-none w-full"
      />  
    </label>


      <button
        type="submit"
        className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] mb-40 px-[12px] font-medium text-richblack-900"
      >
        Register
      </button>
    </form>
  )
}

export default LoginForm
