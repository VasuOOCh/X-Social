'use client'
import { toggleBlock, toggleFollow } from '@/lib/actions'
import React, { useOptimistic, useState } from 'react'

const UserInfoCardInteraction = ({ isFollowingRequestSent, isFollowing, isUserBlocked, userId }: { isFollowingRequestSent: boolean, isFollowing: boolean, isUserBlocked: boolean, userId: string }) => {

    //decalring states :-
    const [userState,setUserState] = useState({
        following : isFollowing,
        blocked : isUserBlocked,
        followingRequestSent : isFollowingRequestSent
    })

    const [optimisticUserState, addOptimisticUserState] = useOptimistic(userState, (state, newState) => ({
        ...state,
        ...newState!
    })) //the value returned form the update function will be the new state value until the async task is done

    const follow = async () => {
        try {
            
            addOptimisticUserState({
                following : userState.following && false,
                followingRequestSent : !userState.followingRequestSent && !userState.following ? true : false
            }) // the value passed in addOptimisticUserState will be the newState value (temp.)

            const resp = await toggleFollow(userId); //this function will perform backend server action

            // setting the actual state after performing backend
            setUserState((prev) => (
                {
                    ...prev,
                    ...resp
                }
            ))
        } catch (error) {
            console.log(error);
            
        }
    }

    const block = async () => {
        try {
            addOptimisticUserState({
                blocked : userState.blocked ? false : true
            })

            const resp = await toggleBlock(userId);
            setUserState((prev) => ({
                ...prev,
                ...resp
            }))
        } catch (error) {
            
        }
    }

    return (
        <>
            {/* here we do not directly trigger server action, we linked action to a fucntion, that further called the server action */}
            <form action={follow}> 
                <button className='bg-blue-500 text-white p-2 text-sm rounded-md'>
                    {optimisticUserState.following ? "Following" : optimisticUserState.followingRequestSent ? "Friend Request Sent" : "follow"}
                </button>
            </form>
            
            <form action={block} className='self-end'>
                <button className='text-red-400 text-xs  cursor-pointer'>
                    {
                        optimisticUserState.blocked ? "Unblock User" : "Block User"
                    }
                </button>
            </form>
        </>
    )
}

export default UserInfoCardInteraction