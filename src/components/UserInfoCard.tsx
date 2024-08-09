import prisma from '@/lib/client'
import { fetchUser } from '@/lib/data'
import { auth } from '@clerk/nextjs/server'
import { User } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserInfoCard = async ({ user }: { user?: User }) => {

  let isUserBlocked = false;
  let isFollowing = false;
  let isFollowingRequestSent = false;

  const {userId : currentUser} = auth();

  if(currentUser) {
    const res1 = await prisma.block.findFirst({
      where : {
        BlockerId : user?.id,
        BlockedId : currentUser!
      }
    })
    if(res1) isUserBlocked = true;
    
    const res2 = await prisma.follower.findFirst({
      where : {
        followingId : user?.id,
        followerId : currentUser!
      }
    })
    if(res2) isUserBlocked = true;
    
    
    
    const res3 = await prisma.followRequest.findFirst({
      where : {
        RecieverId : user?.id,
        SenderId : currentUser!
      }
    })
    if(res3) isUserBlocked = true;
    
  }

  return (
    <div className='p-4 bg-white rounded-lg text-sm shadow-md flex flex-col gap-4'>
      {/* Top  */}
      <div className='flex justify-between items-center font-medium'>
        <span className='tetx-gray-500'>User Information</span>
        <Link href={'/'} className='text-blue-500 text-xs'>See all</Link>
      </div>

      {/* Bottom  */}
      <div className='flex flex-col gap-4 text-gray-500'>
        <div className='flex flex-col gap-2'>
          <span className='text-xl text-black font-semibold'>{user?.name ? user.name + " " + user.surname : user?.username}</span>

          <span className='text-sm'>{user?.id}</span>
        </div>

        {user?.description && (
          <p>
          {user.description}
        </p>
        )}
        {
          user?.city && (
            <div className='items-center flex gap-2'>
          <Image height={16} width={16} src={'/map.png'} alt='img' />
          <span>Living in <b>{user?.city}</b></span>
        </div>
          )
        }
        {
          user?.school && (
            <div className='items-center flex gap-2'>
          <Image height={16} width={16} src={'/school.png'} alt='img' />
          <span>Went to <b>{user?.school}</b></span>
        </div>
          )
        }

        {
          user?.work && (
<div className='items-center flex gap-2'>
          <Image height={16} width={16} src={'/work.png'} alt='img' />
          <span>Works at <b>{user?.work}</b></span>
        </div>
          )
        }
        
        <div className='flex items-center justify-between'>
          {
            user?.website && (
              <div className='flex gap-1 items-center'>
                <Image height={16} width={16} src={'/link.png'} alt='img' />
                <Link className='text-blue-500 font-medium' href={user?.website}>{user?.website}</Link>
              </div>
            )
          }

          <div className='flex gap-1 items-center'>
            <Image height={16} width={16} src={'/date.png'} alt='img' />
            <span>Joined {(new Date(user?.createdAt!)).toLocaleDateString()}</span>
          </div>

        </div>

        <button className='bg-blue-500 text-white p-2 text-sm rounded-md'>Follow</button>
        <span className='text-red-400 text-xs self-end cursor-pointer'>Block User</span>
      </div>
    </div>
  )
}

export default UserInfoCard