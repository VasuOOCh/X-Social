import prisma from '@/lib/client'
import { auth } from '@clerk/nextjs/server'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FriendRequestList from './FriendRequestList'

const FriendRequest = async () => {

    const { userId: currentUser } = auth()

    if (!currentUser) {
        return null;
    }

    const requests = await prisma.followRequest.findMany({
        where: {
            RecieverId: currentUser!
        },
        include: {
            Sender: true
        }
    })

    if (requests.length == 0) return null;
    return (
        <div className='p-4 bg-white rounded-lg text-sm shadow-md flex flex-col gap-4'>
            {/* Top  */}
            <div className='flex justify-between items-center font-medium'>
                <span className='tetx-gray-500'>Friend Requests</span>
                <Link href={'/'} className='text-blue-500 text-xs'>See all</Link>
            </div>

            {/* User  */}
            <FriendRequestList requests={requests} />

        </div>
    )
}

export default FriendRequest