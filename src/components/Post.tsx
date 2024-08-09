import Image from 'next/image'
import React from 'react'
import Comments from './Comments'

const Post = () => {
    return (
        <div className='flex flex-col gap-4'>
            {/* User  */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <Image className='h-10 w-10 rounded-full object-cover' src={'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=600'} alt='User' height={40} width={40} />
                    <span className='font-medium'>Jane Doe</span>
                </div>
                <Image src={'/more.png'} height={16} width={16} alt='more' />
            </div>

            {/* Desc  */}
            <div className='flex flex-col gap-4'>
                <div className='w-full min-h-96 relative'>
                    <Image src={'https://images.pexels.com/photos/5214139/pexels-photo-5214139.jpeg?auto=compress&cs=tinysrgb&w=600'} alt='User' fill className='rounded-md object-cover' />

                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, porro sapiente sequi nobis fuga doloremque magnam illum quidem neque omnis!</p>
            </div>

            {/* Interaction  */}
            <div className='flex item justify-between text-sm my-4'>
                <div className='flex gap-8'>
                    <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                        <Image src={'/like.png'} className='cursor-pointer' height={16} width={16} alt='more' />
                        <span className='text-gray-300'>
                            |
                        </span>
                        <span className='text-gray-500 flex gap-1'>
                            300
                            <span className='hidden lg:block'>Likes</span>
                        </span>
                    </div>

                    <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                        <Image src={'/comment.png'} className='cursor-pointer' height={16} width={16} alt='more' />
                        <span className='text-gray-300'>
                            |
                        </span>
                        <span className='text-gray-500 flex gap-1'>
                            123
                            <span className='hidden lg:block'>Comment</span>
                        </span>
                    </div>

                </div>

                <div>
                <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                        <Image src={'/share.png'} className='cursor-pointer' height={16} width={16} alt='more' />
                        <span className='text-gray-300'>
                            |
                        </span>
                        <span className='text-gray-500 flex gap-1'>
                            222
                            <span className='hidden lg:block'>Share</span>
                        </span>
                    </div>
                </div>
            </div>
            <Comments />
        </div>
    )
}

export default Post