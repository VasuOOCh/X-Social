import Image from 'next/image'
import React from 'react'

const Stories = () => {
  return (
    <div  className='bg-white rounded-lg shadow-md overflow-scroll no-scrollbar p-4 text-xs'>
        <div className='flex gap-8 w-max'>

            {/* STORY  */}
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src={'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600'} className='h-20 w-20 rounded-full ring-2' alt='Story' width={80} height={80}/>
                <span className='font-medium'>John Doe</span>
            </div>
            {/* STORY  */}
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src={'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600'} className='h-20 w-20 rounded-full ring-2' alt='Story' width={80} height={80}/>
                <span className='font-medium'>John Doe</span>
            </div>
            {/* STORY  */}
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src={'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600'} className='h-20 w-20 rounded-full ring-2' alt='Story' width={80} height={80}/>
                <span className='font-medium'>John Doe</span>
            </div>
            {/* STORY  */}
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src={'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600'} className='h-20 w-20 rounded-full ring-2' alt='Story' width={80} height={80}/>
                <span className='font-medium'>John Doe</span>
            </div>
            {/* STORY  */}
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src={'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600'} className='h-20 w-20 rounded-full ring-2' alt='Story' width={80} height={80}/>
                <span className='font-medium'>John Doe</span>
            </div>
        </div>
    </div>
  )
}

export default Stories