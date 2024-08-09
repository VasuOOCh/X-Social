import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FriendRequest = () => {
    return (
        <div className='p-4 bg-white rounded-lg text-sm shadow-md flex flex-col gap-4'>
            {/* Top  */}
            <div className='flex justify-between items-center font-medium'>
                <span className='tetx-gray-500'>Friend Requests</span>
                <Link href={'/'} className='text-blue-500 text-xs'>See all</Link>
            </div>

            {/* User  */}
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center'>
                    <Image src={'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='img' className='w-10 h-10 rounded-full object-cover' height={40} width={40} />
                    <span className='font-semibold'>Harshit Verma</span>
                </div>

                <div className='flex gap-3 items-center'>
                    <Image src={'/accept.png'} alt='img' className='cursor-pointer' height={20} width={20} />
                    <Image src={'/reject.png'} alt='img' className='cursor-pointer' height={20} width={20} />
                </div>
            </div>

            <div className='flex justify-between'>
                <div className='flex gap-2 items-center'>
                    <Image src={'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='img' className='w-10 h-10 rounded-full object-cover' height={40} width={40} />
                    <span className='font-semibold'>Harshit Verma</span>
                </div>

                <div className='flex gap-3 items-center'>
                    <Image src={'/accept.png'} alt='img' className='cursor-pointer' height={20} width={20} />
                    <Image src={'/reject.png'} alt='img' className='cursor-pointer' height={20} width={20} />
                </div>
            </div>

            <div className='flex justify-between'>
                <div className='flex gap-2 items-center'>
                    <Image src={'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='img' className='w-10 h-10 rounded-full object-cover' height={40} width={40} />
                    <span className='font-semibold'>Harshit Verma</span>
                </div>

                <div className='flex gap-3 items-center'>
                    <Image src={'/accept.png'} alt='img' className='cursor-pointer' height={20} width={20} />
                    <Image src={'/reject.png'} alt='img' className='cursor-pointer' height={20} width={20} />
                </div>
            </div>
        </div>
    )
}

export default FriendRequest