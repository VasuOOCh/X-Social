'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const MobileMenu = () => {
    const [isOpen,setIsOpen] = useState(false)
  return (
    <div className='md:hidden'>
        <div className='flex flex-col gap-[4.5px] cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
            <div className={`w-6 h-1 bg-blue-500 rounded-sm transition-all ${isOpen ? "rotate-45" : ""} origin-left ease-in-out duration-500`} />
            <div className={`w-6 h-1 bg-blue-500 rounded-sm transition-all ${isOpen ? "opacity-0" : ""} ease-in-out duration-500`} />
            <div className={`w-6 h-1 bg-blue-500 rounded-sm transition-all ${isOpen ? "-rotate-45" : ""} origin-left ease-in-out duration-500`} />
        </div>
        {
            isOpen && (
                <div className='absolute left-0 top-16 bg-white gap-8 font-medium text-xl z-10 flex flex-col items-center justify-center h-[calc(100vh-64px)] w-full'>
                    <Link href={''}>Home</Link>
                    <Link href={''}>Friends</Link>
                    <Link href={''}>Groups</Link>
                    <Link href={''}>Stories</Link>
                    <Link href={''}>Profile</Link>
                </div>
            )
        }
    </div>
  )
}

export default MobileMenu