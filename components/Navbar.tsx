'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathName = usePathname()

    return (
        <div className='w-full px-4 md:px-20 absolute z-10 py-6'>
            <nav className='flex justify-between py-4 md:py-6 items-center'>
                <div className='left_nav'>
                    <Image
                        src="https://cdn.prod.website-files.com/5b2a8936920a797db4639905/5b2a8936920a798c07639957_logo.png"
                        width="250" height="50" alt="logo_image"
                    />
                </div>
                <div className='right_nav'>
                    <ul className='flex'>
                    <li className={`nav-link ${pathName === '/' ? 'before:mt-8 before:mr-[10px] block before:opacity-100 before:content-[""] before:h-[5px] before:w-full before:absolute before:bg-[#031D44] relative' : 'hover nav-link-fade-up'} text-gray-600`}>
                            <Link href="/" className='md:text-lg text-base'>
                                Home
                            </Link>
                        </li>
                        <li className={`nav-link ${pathName === '/about' ? 'before:mt-8 before:mr-[10px] block before:opacity-100 before:content-[""] before:h-[5px] before:w-full before:absolute before:bg-[#031D44] relative' : 'hover nav-link-fade-up'} text-gray-600`}>
                            <Link href="/about" className='md:text-lg text-base'>
                                About
                            </Link>
                        </li>
                        <li className={`nav-link ${pathName === '/contact' ? 'before:mt-8 before:mr-[10px] block before:opacity-100 before:content-[""] before:h-[5px] before:w-full before:absolute before:bg-[#031D44] relative' : 'hover nav-link-fade-up'} text-gray-600`}>
                            <Link href="/contact" className='md:text-lg text-base'>
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
