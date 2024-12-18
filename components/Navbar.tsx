'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
    const [currentActive, setCurrentActive] = useState(0)
        
  return (
    <div className='w-full px-20 absolute z-10 py-10'>
        <nav className='flex justify-between py-6 items-center'>
            <div className='left_nav'>
        <Image src="https://cdn.prod.website-files.com/5b2a8936920a797db4639905/5b2a8936920a798c07639957_logo.png" width="250" height="50" alt="logo_image"/>
        </div>
        <div className='right_nav'>
            <ul className='flex space-x-4'>
            <li className='nav-link text-gray-600 nav-link-fade-up'>
                    <Link href="/" className='md:text-[18px] text-[16px]'>
                    Home
                    </Link>
                    </li>
            <li className='nav-link text-gray-600 nav-link-fade-up'>
                    <Link href="/about" className='md:text-[18px] text-[16px]' onClick={() => setCurrentActive(1)}>
                    About
                    </Link>
                    </li>
            <li className='nav-link text-gray-600 md:text-[18px] text-[16px] nav-link-fade-up'>
                    <Link href="/contact" className='md:text-[18px] text-[16px]'>
                    Contact
                    </Link>
                    </li>
            </ul>
        </div>
        </nav>

    </div>
  )
}

export default Navbar
