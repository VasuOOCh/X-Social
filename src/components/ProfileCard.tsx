import Image from 'next/image'
import React from 'react'

const ProfileCard = () => {
    return (
        <div className='flex flex-col gap-6 shadow-md rounded-lg p-4 text-sm bg-white'>
            <div className='h-20 relative'>
                <Image alt='' src={'https://images.pexels.com/photos/3175983/pexels-photo-3175983.jpeg?auto=compress&cs=tinysrgb&w=600'} className='rounded-md object-cover' fill />
                <Image alt='profile' src={'https://images.pexels.com/photos/7773738/pexels-photo-7773738.jpeg?auto=compress&cs=tinysrgb&w=600'} width={48} height={48} className='object-cover ring-1 ring-white z-10 rounded-full w-12 h-12 absolute -bottom-6 left-0 right-0 m-auto' />
            </div>

            <div className='h-20 flex flex-col gap-2 items-center'>
                <span className='font-semibold'>Vasu Choudhari</span>
                <div className='flex items-center gap-4'>
                    <div className='flex'>
                    <Image alt='profile' src={'https://images.pexels.com/photos/7773738/pexels-photo-7773738.jpeg?auto=compress&cs=tinysrgb&w=600'} width={12} height={12} className='object-cover ring-1 ring-white z-10 rounded-full w-3 h-3' />
                    <Image alt='profile' src={'https://images.pexels.com/photos/7773738/pexels-photo-7773738.jpeg?auto=compress&cs=tinysrgb&w=600'} width={12} height={12} className='object-cover ring-1 ring-white z-10 rounded-full w-3 h-3' />
                    <Image alt='profile' src={'https://images.pexels.com/photos/7773738/pexels-photo-7773738.jpeg?auto=compress&cs=tinysrgb&w=600'} width={12} height={12} className='object-cover ring-1 ring-white z-10 rounded-full w-3 h-3' />
                    </div>
                    <span className='text-gray-500 text-xs'>500 followers</span>
                </div>

                <button className='bg-blue-500 text-white text-xs rounded-md p-2'>My Profile</button>

            </div>
        </div>
    )
}

export default ProfileCard