import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='footer_container text-gray-600 bg-[#FAFAFA] md:px-40 px-20  w-screen min-h-[50vh] flex justify-center flex-col z-50'>
            <Image src="https://cdn.prod.website-files.com/5b2a8936920a797db4639905/5b2a8936920a798c07639957_logo.png" width="188" height="50" alt="logo_image" className='bg-[#FAFAFA]'/>
            <div className='social-media mt-20 flex flex-row items-center bg-[#FAFAFA]'>
                <ul className='flex flex-col md:flex-row md:space-x-10 sm:space-y-0 space-y-20 md:text-xl text-lg'>
                <li className="underline decoration-gray-200 hover:decoration-gray-900 decoration-3 underline-offset-8"><Link href="https://www.linkedin.com/in/daniel-xu-2a23b1256/">Linked In</Link></li>
                <li className="underline decoration-gray-200 hover:decoration-gray-900 decoration-3 underline-offset-8"><Link href="https://github.com/lengqing1221">Github</Link></li>
                <li className="underline decoration-gray-200 hover:decoration-gray-900 decoration-3 underline-offset-8"><Link href="https://x.com/LengQin22835482">X</Link></li>
                </ul>
            </div> 
        </div>
    )
}

export default Footer
