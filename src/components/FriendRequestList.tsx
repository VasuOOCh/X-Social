'use client'
import { acceptRequest, declineRequest } from '@/lib/actions';
import { FollowRequest, User } from '@prisma/client'
import Image from 'next/image';
import React, { useOptimistic, useState } from 'react'

type RequestWithUser = FollowRequest & {
    Sender: User
}

const FriendRequestList = ({ requests }: { requests: RequestWithUser[] }) => {
    const [friendRequests, setFriendRequests] = useState(requests);
    const [optimisticFirendRequests, addOptimisticFriendRequest] = useOptimistic(friendRequests, (state, value : string) => (state.filter((req) => req.SenderId !== value)));

    const accept = async (userId : string) => {
        try {
            console.log(userId);
            
            addOptimisticFriendRequest(userId)
            await acceptRequest(userId);
            setFriendRequests((prev) => prev.filter((req) => req.SenderId != userId))

        } catch (error) {
            console.log(error);
            
        }
    }

    const decline = async (userId : string) => {
        try {
            addOptimisticFriendRequest(userId)
            await declineRequest(userId);
            setFriendRequests((prev) => prev.filter((req) => req.SenderId != userId));
        } catch (error) {
            console.log(error);
            
        }
    }

    return (
        <>
            {
                optimisticFirendRequests.map((req) => (
                    <div key={req.id} className='flex justify-between'>
                        <div className='flex gap-2 items-center'>
                            <Image src={req.Sender.avatar!} alt='img' className='w-10 h-10 rounded-full object-cover' height={40} width={40} />
                            <span className='font-semibold'>{req.Sender?.name ? req.Sender.name + " " + req.Sender.surname : req.Sender?.username}</span>
                        </div>

                        <div className='flex gap-3 items-center'>
                            <form action={() => accept(req.SenderId)}>
                                <button>
                                    <Image src={'/accept.png'} alt='img' className='cursor-pointer' height={20} width={20} />
                                </button>
                            </form>
                            <form action={() => decline(req.SenderId)}>
                                <Image src={'/reject.png'} alt='img' className='cursor-pointer' height={20} width={20} />
                            </form>
                        </div>
                    </div>
                ))
            }</>
    )
}

export default FriendRequestList