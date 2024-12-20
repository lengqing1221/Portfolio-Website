'use client'


import Project from '@/components/Project'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ProductData } from '@/data/productData'
import Footer from '@/components/Footer'

gsap.registerPlugin(ScrollTrigger)

const HomePage = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const firstName = useRef(null)
  const information = useRef<HTMLParagraphElement>(null)
  const innerContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (heroRef.current) {
      gsap.from(heroRef.current, {
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

      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current, // The hero-container acts as the trigger
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
        display: 'hidden',
      })

    }
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [])

  // x: 0,         // translateX (equivalent to 0px in translate3d)
  // y: "0%",      // translateY (equivalent to 0% in translate3d)
  // z: 0,         // translateZ (equivalent to 0px in translate3d)
  // scaleX: .95,    // scaleX (equivalent to scale3d on X-axis)
  // scaleY: .95,    // scaleY (equivalent to scale3d on Y-axis)
  // scaleZ: 1,    // scaleZ (equivalent to scale3d on Z-axis)
  // rotateX: 0,   // rotateX (equivalent to 0deg)
  // rotateY: 0,   // rotateY (equivalent to 0deg)
  // rotateZ: 0,   // rotateZ (equivalent to 0deg)
  // skewX: "0deg", // skewX (equivalent to skew on X-axis)
  // skewY: "0deg", // skewY (equivalent to skew on Y-axis)
  // transformStyle: "preserve-3d", // Sets the 3D rendering context
  // duration: 1,
  // ease: 'none',
  // display: 'hidden',
 
  
  

  return (
    <div className='min-h-[150vh] max-w-[100vw] hero_container relative overflow-x-hidden overflow-y-visible' id='hero-section'>
      <div ref={heroRef} className='h-[100vh] w-[100vw] fixed top-0 bg-white lg:px-20 md:px-[65px] sm:px-[40px] z-0'> 
        <div ref={innerContainer} className='main_text_container h-auto max-w-[400px] font-roboto flex flex-col pt-80'>
          <h1 className='main_text text-black font-extrabold text-[180px] relative leading-[140px] overflow-hidden min-w-[550px] -z-10'>
            <div ref={firstName} className='relative overflow-hidden min-w-[0px] upwardAnimation transform translate-y-[-100%]'>Daniel</div><br /><div className='downwardAnimation-1 transform translate-y-[100%]'>Xu</div> 
          </h1>
          <p ref={information} className='sub_text text-gray-400 text-2xl relative overflow-hidden text-wrap mt-8'>
            Hi I&apos;m a fullStack developer based in Boston
          </p>
        </div>
      </div>
      <div className='min-h-[100vh] h-auto bg-white top-[100vh] w-[100vw] relative z-50'>
        {ProductData.projects.map((project, index) => (
          <Project 
            key={index}
            image={project.image.src} 
            title={project.title} 
            number={project.number} 
            projectUrl={project.projectUrl}  
            information={project.information}
            />
        ))
          }
          <Footer />
      </div>
    </div>
  )
}

export default HomePage
