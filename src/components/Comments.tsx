import Image from 'next/image'
import React from 'react'

const Comments = () => {
  return (
    <div>
        {/* Write  */}
        <div className='flex items-center gap-4'>
            <Image src={'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='img'  className='w-8 h-8 rounded-full' height={32} width={32}/>
            <div className='flex items-center bg-slate-100 rounded-lg text-sm px-6 py-2 flex-1'>
                <input type="text" placeholder='Write a comment' className='outline-none bg-transparent flex-1' name="" id="" />
                <Image alt='emoji' src={'/emoji.png'} width={16} height={16} className='cursor-pointer' />
            </div>
        </div>

        {/* Comments  */}
        <div>
            <div className='flex items-start gap-4 justify-between mt-6'>
                {/* Avatar  */}
                <Image src={'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='img'  className='w-10 h-10 rounded-full' height={40} width={40}/>

                {/* Desc  */}
                <div className='flex flex-col gap-2 flex-1'>
                    <div className='font-medium'>Vasu Choudhari</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, perspiciatis laborum? Mollitia soluta reprehenderit consequatur, natus est unde enim aliquam obcaecati veritatis magnam impedit? Corporis quibusdam ipsum est ut harum!</p>

                    <div className='flex items-center gap-8 text-xs text-gray-500 mt-2'>
                        <div className='flex items-center gap-4'>
                            <Image src={'/like.png'} alt='' width={16} height={16} className='w-4 h-4 cursor-pointer' />
                            <span className='text-gray-300'>|</span>
                            <span className='text-gray-500'>300 likes
                                
                            </span>
                        </div>
                        <div>
                            Reply
                        </div>
                    </div>
                </div>

                {/* Options  */}
                <Image src={'/more.png'} alt='' width={16} height={16} className='w-4 h-4 cursor-pointer' />
            </div>
        </div>
    </div>
  )
}

export default Comments