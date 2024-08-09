import { User } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserMediaCard = ({ user }: { user?: User }) => {
    return (
        <div className='p-4 bg-white rounded-lg text-sm shadow-md flex flex-col gap-4'>
            {/* Top  */}
            <div className='flex justify-between items-center font-medium'>
                <span className='tetx-gray-500'>User Media</span>
                <Link href={'/'} className='text-blue-500 text-xs'>See all</Link>
            </div>

            {/* Bottom  */}

            <div className='flex gap-4 justify-between flex-wrap'>
                <div className='h-24 w-1/5 relative'>
                    <Image alt='image' fill className='object-cover rounded-md' src={'https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=600'} />
                </div>
                <div className='h-24 w-1/5 relative'>
                    <Image alt='image' fill className='object-cover rounded-md' src={'https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=600'} />
                </div>
                <div className='h-24 w-1/5 relative'>
                    <Image alt='image' fill className='object-cover rounded-md' src={'https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=600'} />
                </div>
                <div className='h-24 w-1/5 relative'>
                    <Image alt='image' fill className='object-cover rounded-md' src={'https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=600'} />
                </div>
                <div className='h-24 w-1/5 relative'>
                    <Image alt='image' fill className='object-cover rounded-md' src={'https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=600'} />
                </div>
                <div className='h-24 w-1/5 relative'>
                    <Image alt='image' fill className='object-cover rounded-md' src={'https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=600'} />
                </div>

            </div>
            
        </div>
    )
}

export default UserMediaCard