import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'
import Image from 'next/image'
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between h-16'>
            {/* Left  */}
            <div className='md:hidden lg:block w-[20%]'>
                <Link className='font-bold text-xl text-blue-600' href={'/'}>X-SOCIAL</Link>
            </div>

            {/* Center  */}
            <div className='hidden md:flex w-[50%] text-sm items-center justify-between'>
                <div className='flex gap-6 text-gray-600'>
                    <Link className='flex gap-2 items-center' href={'/'}>
                        <Image alt='Home' src={'/home.png'} width={16} className='w-4 h-4' height={16} />
                        <span>Homepage</span>
                    </Link>
                    <Link className='flex gap-2 items-center' href={'/'}>
                        <Image alt='Home' src={'/friends.png'} width={16} className='w-4 h-4' height={16} />
                        <span>Friends</span>
                    </Link>
                    <Link className='flex gap-2 items-center' href={'/'}>
                        <Image alt='Home' src={'/stories.png'} width={16} className='w-4 h-4' height={16} />
                        <span>Stories</span>
                    </Link>
                </div>
                <div className='hidden xl:flex p-2 items-center bg-slate-100 rounded-xl'>
                    <input type="text" className='bg-transparent outline-none' placeholder='search....' />
                    <Image width={14} height={14} alt='search' src={'/search.png'} />
                </div>
            </div>

            {/* Right  */}
            <div className='w-[30%] flex items-center gap-4 xl:gap-8 justify-end'>
                <ClerkLoading>

                    <div className="inline-block h-6 w-6 animate-spin rounded-full border-gray-500 border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"></div>
                </ClerkLoading>

                <ClerkLoaded>
                    <SignedOut>
                        <div className='flex items-center gap-2 text-sm'>
                        <Image src={'/people.png'} height={20} width={20} alt='people'/>
                        <Link href={'/sign-in'}>Login / Register</Link>
                        </div>
                    </SignedOut>
                    <SignedIn>
                        <div className='cursor-pointer'>
                            <Image src={'/people.png'} height={20} width={20} alt='people'/>
                        </div>
                        <div className='cursor-pointer'>
                            <Image src={'/messages.png'} height={20} width={20} alt='people'/>
                        </div>
                        <div className='cursor-pointer'>
                            <Image src={'/notifications.png'} height={20} width={20} alt='people'/>
                        </div>
                        <UserButton />
                    </SignedIn>

                </ClerkLoaded>
                <MobileMenu />
            </div>
        </div>
    )
}

export default Navbar