import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Birthdays = () => {
    return (
        <div className='p-4 bg-white rounded-lg text-sm shadow-md flex flex-col gap-4'>
            {/* Top  */}
            <div className='flex justify-between items-center font-medium'>
                <span className='tetx-gray-500'>Birthdays</span>
            </div>

            {/* User  */}
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center'>
                    <Image src={'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='img' className='w-10 h-10 rounded-full object-cover' height={40} width={40} />
                    <span className='font-semibold'>Harshit Verma</span>
                </div>

                <div className='flex gap-3 items-center'>
                    <button className='bg-blue-500 text-white rounded-md text-xs px-2 py-1'>Celebrate</button>
                </div>
            </div>

            {/* Upcoming  */}
            <div className='rounded-lg flex items-center gap-4 p-4 bg-slate-100'>
                <Image src={'/gift.png'} alt='img' className='' height={24} width={24} />
                <Link href={'/'} className='flex flex-col text-xs gap-1'>
                    <span className='text-gray-700 font-semibold'>Upcoming Birthdays</span>
                    <span className='text-gray-500 '>See other 16 haveing upcoming birthdays</span>
                </Link>
            </div>
        </div>
    )
}

export default Birthdays