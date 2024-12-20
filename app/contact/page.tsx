'use client'

import Footer from '@/components/Footer'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const sendEmail = async (name: string, email: string,  message: string) => {
  const response = await axios.post('http://localhost:3000/api/sendEmail', {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: [email],
      to: 'danielxu122178@gmail.com',
      content: [message, name],
    }),
  });

  const result = await response.data;
  console.log(result);
};

interface formData {
  name: string,
  email: string,
  message: string
}

const ContactPage = () => {
  const contactRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState<formData>({
    name: '', 
    email: '',
    message: ''})

  useEffect(() => {
    if (contactRef.current) {
      gsap.from(contactRef.current, {
        scale3d: '1, 1, 1',
        backgroundColor: 'rgb(222, 222, 222)',
        ease: 'none',
        x: 0,         // translateX (equivalent to 0px in translate3d)
        y: "0%",      // translateY (equivalent to 0% in translate3d)
        z: 0,         // translateZ (equivalent to 0px in translate3d)
        scaleX: 1,    // scaleX (equivalent to scale3d on X-axis)
        scaleY: 1,    // scaleY (equivalent to scale3d on Y-axis)
        scaleZ: 1,    // scaleZ (equivalent to scale3d on Z-axis)
        rotateX: 0,   // rotateX (equivalent to 0deg)
        rotateY: 0,   // rotateY (equivalent to 0deg)
        rotateZ: 0,   // rotateZ (equivalent to 0deg)
        skewX: "0deg", // skewX (equivalent to skew on X-axis)
        skewY: "0deg", // skewY (equivalent to skew on Y-axis)
        transformStyle: "preserve-3d", // Sets the 3D rendering context
        duration: 1 
      })

      gsap.to(contactRef.current, {
        scrollTrigger: {
          trigger: contactRef.current, // The hero-container acts as the trigger
          start: 'top top', // Start when hero-container's top reaches center of viewport
          end: 'bottom 50%', // End when hero-container's bottom hits the top of viewport
          scrub: true,
        },
        x: 0,         // translateX (equivalent to 0px in translate3d)
        y: "0%",      // translateY (equivalent to 0% in translate3d)
        z: 0,         // translateZ (equivalent to 0px in translate3d)
        scaleX: .95,    // scaleX (equivalent to scale3d on X-axis)
        scaleY: .95,    // scaleY (equivalent to scale3d on Y-axis)
        scaleZ: 1,    // scaleZ (equivalent to scale3d on Z-axis)
        rotateX: 0,   // rotateX (equivalent to 0deg)
        rotateY: 0,   // rotateY (equivalent to 0deg)
        rotateZ: 0,   // rotateZ (equivalent to 0deg)
        skewX: "0deg", // skewX (equivalent to skew on X-axis)
        skewY: "0deg", // skewY (equivalent to skew on Y-axis)
        transformStyle: "preserve-3d", // Sets the 3D rendering context
        duration: 1,
        backgroundColor: 'rgb(22, 22, 22)',
        ease: 'none',
        display: 'hidden',
      })

    }
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    sendEmail(formData.name, formData.email, formData.message)   
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }


  return (
    <div className='contact_container relative'>
      <div ref={contactRef} className='relative h-[70vh]'></div>
      <div className='max-h-[300vh] flex flex-col items-center justify-center '>
      <h1 className='text-black font-roboto font-extrabold mt-20 text-6xl mb-20 min-w-[300px]'>Get In Touch</h1>
          <form action="submit" onSubmit={onSubmit} className='flex flex-col space-y-20 xl:px-[500px] lg:px-[80px] lg:flex-1 h-auto md:px-[100px] sm:px-[150px] min-w-[600px] mb-20 w-full justify-center items-start'>
            <input onChange={handleChange} type="text" placeholder='Your Name' className='mainColor focus:border-blue-600 focus:border-[.5px] border-[1px] text-3xl py-6 border-t-0 border-r-0 border-l-0 border-b-[1px] border-slate-600 w-full min-w-[300px]'/>
            <input onChange={handleChange} type="text" placeholder='Your Email' className='mainColor focus:border-blue-600 border-[1px] text-3xl py-6 border-t-0 border-r-0 border-l-0 border-b-[1px] border-slate-600 w-full min-w-[300px]'/>
            <input onChange={handleChange} type="text" placeholder='Message' className='mainColor focus:border-blue-600 border-[1px] text-3xl py-6 border-t-0 border-r-0 border-l-0 border-b-[1px] border-slate-600 w-full min-w-[300px]'/>
            <button className='py-6 px-6 text-3xl hover:text-black transition-colors bg-black hover:bg-white text-white border border-1 w-[240px] mt-40 mb-40 border-black cursor-pointer'>Submit</button>
          </form>
      </div>
      <Footer />
    </div>
  )
}

export default ContactPage
