import LeftMenu from '@/components/LeftMenu'
import PostFeed from '@/components/PostFeed';
import RightMenu from '@/components/RightMenu'
import Image from 'next/image';
import React from 'react'

const ProfilePage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div className='flex gap-6 pt-6'>

      {/* Left  */}
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type='profile' />
      </div>

      {/* Center  */}
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className='flex flex-col items-center justify-center'>
            <div className='w-full h-64 relative'>
              <Image alt='' src={'https://images.pexels.com/photos/3175983/pexels-photo-3175983.jpeg?auto=compress&cs=tinysrgb&w=600'} className='rounded-md object-cover' fill />
              <Image alt='profile' src={'https://images.pexels.com/photos/7773738/pexels-photo-7773738.jpeg?auto=compress&cs=tinysrgb&w=600'} width={128} height={128} className='object-cover ring-4 ring-white z-10 rounded-full w-32 h-32 absolute -bottom-16 left-0 right-0 m-auto' />
            </div>

            <h1 className='mt-20 mb-4 text-2xl font-medium'>Vasu Choudhari</h1>
            <div className='flex items-center justify-center gap-12 mb-4'>
              <div className='flex flex-col items-center'>
                <span className='font-medium'>123</span>
                <span className='text-sm'>Posts</span>

              </div>
              <div className='flex flex-col items-center'>
                <span className='font-medium'>200</span>
                <span className='text-sm'>Followers</span>

              </div>
              <div className='flex flex-col items-center'>
                <span className='font-medium'>300</span>
                <span className='text-sm'>Following</span>

              </div>
            </div>
          </div>

          <PostFeed />
        </div>
      </div>

      {/* Right  */}
      <div className="hidden lg:block lg:w-[30%]">
        <RightMenu userId={id} />
      </div>
    </div>
  )
}

export default ProfilePage