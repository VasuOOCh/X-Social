import LeftMenu from '@/components/LeftMenu'
import PostFeed from '@/components/PostFeed';
import RightMenu from '@/components/RightMenu'
import prisma from '@/lib/client';
import { fetchUser } from '@/lib/data';
import { auth } from '@clerk/nextjs/server';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react'

const ProfilePage = async ({ params }: { params: { id: string } }) => {

  const { id } = params;
  const user = await fetchUser(id);
  // console.log(user);
  const {userId : currentUser} = auth();

  if (!user) {
    return null
  }

  let isBlocked : boolean;
  if(currentUser) {
    const res=  await prisma.block.findFirst({
      where : {
        BlockerId : id,
        BlockedId : currentUser
      }
    }) 

    if(res) isBlocked = true;
  }else {
    isBlocked = false;
  }

  if(isBlocked!) {
    return notFound();
  }


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
              <Image alt='' src={user.cover || '/coverImg.png'} className='rounded-md object-cover' fill />
              <Image alt='profile' src={user.avatar || '/noAvatar.png'} width={128} height={128} className='object-cover ring-4 ring-white z-10 rounded-full w-32 h-32 absolute -bottom-16 left-0 right-0 m-auto' />
            </div>

            <h1 className='mt-20 mb-4 text-2xl font-medium'>{user?.name ? user.name + " " + user.surname : user?.username}</h1>
            <div className='flex items-center justify-center gap-12 mb-4'>
              <div className='flex flex-col items-center'>
                <span className='font-medium'>{user._count.posts}</span>
                <span className='text-sm'>Posts</span>

              </div>
              <div className='flex flex-col items-center'>
                <span className='font-medium'>{user._count.followers}</span>
                <span className='text-sm'>Followers</span>

              </div>
              <div className='flex flex-col items-center'>
                <span className='font-medium'>{user._count.followings}</span>
                <span className='text-sm'>Following</span>

              </div>
            </div>
          </div>

          <PostFeed userId={user.id} />
        </div>
      </div>

      {/* Right  */}
      <div className="hidden lg:block lg:w-[30%]">
        <RightMenu user={user} />
      </div>
    </div>
  )
}

export default ProfilePage