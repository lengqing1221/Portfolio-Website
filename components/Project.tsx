'use client'

import Image from 'next/image'
import Link from 'next/link';
import React, { useState, useEffect } from 'react'

interface ProjectProps {
  image: string;
  title: string;
  information: string;
  number: string; // Assuming this is a string
  projectUrl: string;
}

const Project = ({ image, title, information, number, projectUrl }: ProjectProps) => {
  const [position, setPosition] = useState(false);

  useEffect(() => {
    // Check if the number is even or odd and set position accordingly
    if (parseInt(number) % 2 === 0) {
      setPosition(false); // Even: cover on the left side
    } else {
      setPosition(true);  // Odd: cover on the right side
    }
  }, [number]);

  return (
    <div className="project_container overflow-hidden h-auto w-[100vw] bg-cover bg-center bg-no-repeat flex relative">
      <Image src={image} width={2000} height={100} alt="project_image" className='project_image relative object-cover bg-center' />

      {position === true ? (
        <div className="w-[50vw] bg-black bg-opacity-60 absolute h-full top-0 right-0 flex flex-col justify-center items-center px-20 text-white font-roboto">
          <h3 className="md:text-8xl sm:text-4xl md:block sm:hidden  opacity-100">{number}</h3>
          <h2 className="md:text-5xl sm:text-3xl font-bold md:text-left sm:text-center text-nowrap">{title}</h2>
          <p className="md:text-xl sm:text-lg mt-4 md:text-left sm:text-center">{information}</p>
          <a href={projectUrl} className="underline mt-6">
            view project
          </a>
        </div>
      ) : (
        <div className="w-[50vw] bg-black bg-opacity-60 absolute h-full top-0 left-0 flex flex-col justify-center items-center px-20 text-white font-roboto">
          <div className="flex flex-col text-right">
            <h3 className="text-8xl opacity-100 text-[#7f8080] text-[80px] mb-4">{number}</h3>
            <h2 className="text-6xl text-white font-bold mt-4">{title}</h2>
            <p className="text-xl mt-8 text-[#7f8080]">{information}</p>
            <Link href={projectUrl} className="underline decoration-[#7f8080] mt-6">
              view project
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
