import {ModalFooter,ModalBody,ModalCloseButton,ModalHeader,ModalContent, Modal, Button, Text, ChakraProvider, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {registeruser} from "../services/operations/registerapi"

const RegistrationModal = ({isOpen,onClose,overlay}) => {
    const dispatch = useDispatch();
    const [formdata, setFormdata] = useState({
        name:"",
        rollno:"",
        email:""
    });

    const {name,rollno,email} = formdata;

    const handlechange = (e)=>{
        setFormdata((prevData)=>({
            ...prevData,
            [e.target.name] : e.target.value,
           
        }))
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(registeruser(name,rollno,email));
    }

  return (
    <>
        <ChakraProvider>
        <Modal isCentered={true} isOpen={isOpen} motionPreset='slideInRight' variant={Modal}
        onClose={onClose} size={'lg'} className='w-[50%] flex items-center justify-center bg-black'>
        {overlay}
        <ModalContent>
          <ModalHeader color={'ThreeDShadow'}>Registration</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form className='mt-6 flex w-full flex-col gap-y-4'>
            <label className="w-full">
        <p className="mb-1 text-[1rem] leading-[1.375rem] text-black font-bold p-1">
          Full Name <sup className="text-pink-200">*</sup>
        </p>
        <input
        required
        type='text'
        name='name'
        value={name}
        onChange={handlechange}
        placeholder='Enter your Full Name'
        className='form-style w-full'
        >
        </input>
        </label>
        <label className="w-full">
            <p className="mb-1 text-[1rem] leading-[1.375rem] text-black font-bold p-1">
          Roll Number <sup className="text-pink-200">*</sup>
        </p>
        <input
        required
        type='number'
        name='rollno'
        value={rollno}
        onChange={handlechange}
        placeholder='Enter your Roll Number'
        className='form-style w-full'
        >
        </input>
        </label>
        <label className="w-full">
            <p className="mb-1 text-[1rem] leading-[1.375rem] text-black font-bold p-1">
          Thapar Email Adress <sup className="text-pink-200">*</sup>
        </p>
        <input
        required
        type='email'
        name='email'
        value={email}
        onChange={handlechange}
        placeholder='Enter your Email Adress'
        className='form-style w-full'
        >
        </input>
        </label>
            </form>
            {/* <Text>Custom backdrop filters!</Text> */}
          </ModalBody>
          <ModalFooter>
          <Button colorScheme='blue' onClick={handleSubmit}>Submit</Button>
            <Button onClick={onClose} variant={'ghost'}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </ChakraProvider>
     
      
      
    </>
  )
}

export default RegistrationModal