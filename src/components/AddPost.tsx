import Image from 'next/image'
import React from 'react'

const AddPost = () => {
  return (
    <div className='bg-white rounded-lg shadow-md p-4 flex gap-4 justify-between text-sm'>

      {/* AVATAR  */}
      <Image alt='user' height={48} width={48} src={'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=600'} className='w-12 h-12 object-cover rounded-full' />

      {/* POST  */}
      <div className='flex-1'>
        <div className='flex gap-4 items-center'>
          <textarea placeholder="What's on your mind" name="" className='bg-slate-100 rounded-lg flex-1 p-2'></textarea>
          <Image alt='emoji' height={20} width={20} src={'/emoji.png'} className='w-5 h-5 cursor-pointer self-end' />
        </div>

        {/* POST OPTIONS  */}
        <div className='flex items-center gap-4 mt-4 text-gray-400 flex-wrap'>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image alt='' height={20} width={20} src={'/addImage.png'} className='w-5 h-5 cursor-pointer self-end' />
            <span>Photo</span>
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image alt='' height={20} width={20} src={'/addVideo.png'} className='w-5 h-5 cursor-pointer self-end' />
            <span>Video</span>
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image alt='' height={20} width={20} src={'/addEvent.png'} className='w-5 h-5 cursor-pointer self-end' />
            <span>Event</span>
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image alt='' height={20} width={20} src={'/poll.png'} className='w-5 h-5 cursor-pointer self-end' />
            <span>Poll</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPost