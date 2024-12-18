'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger }  from 'gsap/ScrollTrigger'
import signature from '@/public/images/signature.png'
import Image from 'next/image'
import Footer from '@/components/Footer'

gsap.registerPlugin(ScrollTrigger)

const AboutPage = () => {
  const about = useRef<HTMLDivElement>(null)


  useEffect(() => {
    if (about.current) {
      gsap.from(about.current, {
        scale3d: '1, 1, 1',
        backgroundColor: 'rgb(225, 225, 225)',
        ease: 'none'
      })

      gsap.to(about.current, {
        scrollTrigger: {
          trigger: about.current, // The hero-container acts as the trigger
          start: 'top top', // Start when hero-container's top reaches center of viewport
          end: 'bottom 80%', // End when hero-container's bottom hits the top of viewport
          scrub: true,
        },
        backgroundColor: 'rgb(22, 22, 22)',
        ease: 'none'
      })
    }
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [])
  return (
    <div className='min-h-[150vh] max-w-[100vw] hero_container relative overflow-x-hidden overflow-y-visible' id='hero-section'>
      <div ref={about} className='h-[100vh] min-w-[100vw] z-0 top-0 backdrop-brightness-full'> 
        <div className="project_container overflow-hidden h-auto max-h-[100vh] overflow-y-hidden min-w-[100vw] bg-cover bg-center bg-no-repeat flex relative top-[50vh]">
        <Image src='https://wallpapers.com/images/hd/bmw-m8-4k-6r9v8qbfbg42vv9l.jpg' width={2000} height={100} alt="project_image" className='project_image relative object-cover bg-center' />
        <div className="w-[50vw] bg-black bg-opacity-60 absolute h-full top-0 right-0 flex flex-col justify-center items-center px-20 text-white font-roboto">
          <h3 className="text-8xl opacity-100">Daniel Xu</h3>
          <p className="text-xl mt-4">I have a background in computer science and am continuously learnng and improving my skills in web development</p>
          </div>
        </div>
      </div>
      <section className='information_section relative max-h-[1600px] h-auto flex lg:mb-[800px] sm:mb-auto lg:top-[50vh] flex-col lg:items-center lg:mt-40 md:mt-20 lg:px-[600px] sm:items-start md:px-[200px] font-roboto'>
        <div className='header flex flex-col items-start min-w-[400px] text-wrap'>
          <h1 className='subHeader'>About me</h1>
          <p className='mt-10 mainColor text-2xl font-thin h-auto text-wrap overflow-visible'>I am a full stack developer with a passion for creating innovative and user-friendly web applications.</p>
        </div>
        <div className='experiences flex flex-col items-start mt-80'>
          <h1 className='subHeader'>
            Experiences
          </h1>
          <h2 className='text mt-10'>
          TITLE, DISRUPTION & CO.
          </h2>
          <h3 className='mainColor mt-4 text-2xl font-thin'>
          Experiences.
          </h3>
          <h2 className='text mt-10'>
          TITLE, BLUE SKY THINKING
          </h2>
          <h3 className='mainColor mt-4 text-2xl font-thin'>
          So many experiences.
          </h3>
          <h2 className='text mt-10'>
          TITLE, & OTHER JARGON, INC.
          </h2>
          <h3 className='mainColor mt-4 text-2xl font-thin'>By now, you&apos;re Chief Experience Officer, or CEO, as it’s commonly called. Right?</h3>
          <div className='mt-40 items-start mr-100 mb-40'>
          <Image src={signature} alt='signature image' width={250} height={100} className='items-start flex text-wrap'/>
        </div>
        </div>
        </section>
        <Footer />
    </div>
  )
}

export default AboutPage
