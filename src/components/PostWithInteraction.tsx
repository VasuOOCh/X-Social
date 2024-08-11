'use client'
import { toggleLike } from '@/lib/actions'
import { useAuth } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import { Like } from '@prisma/client'
import Image from 'next/image'
import React, { useOptimistic, useState } from 'react'

const PostWithInteraction = ({ postId, likes, comments }: { postId: string, likes: string[], comments: number }) => {

    const { userId: currentUserId, isLoaded } = useAuth();
    if (!currentUserId) return null;

    const [likeState, setLikesState] = useState({
        likeCount: likes.length,
        isLiked: currentUserId ? likes.includes(currentUserId): false
    })
    const [optimisticLikeState, addOptimisticLikeState] = useOptimistic(likeState, (state, value: "liked" | 'disliked') => {
        if (value == 'liked') {
            return {
                likeCount: state.likeCount + 1,
                isLiked: true
            }
        }else {
            return {
                likeCount: state.likeCount - 1,
                isLiked: false
            }
        }
    

    })

    const like =async () => {
        try {
            likeState.isLiked ? addOptimisticLikeState('disliked') : addOptimisticLikeState('liked');
            await toggleLike(postId);
            setLikesState((prev) => ({
                isLiked : !prev.isLiked,
                likeCount : prev.isLiked ? prev.likeCount - 1: prev.likeCount + 1
            }))
        } catch (error) {
            
        }
    }

    return (
        <div className='flex item justify-between text-sm my-4'>
            <div className='flex gap-8'>
                <form action={like}>
                    <button>
                        <div className={`flex items-center gap-4 p-2 rounded-xl ${optimisticLikeState.isLiked ? 'bg-blue-50' : 'bg-slate-50'}`}>
                            <Image src={optimisticLikeState.isLiked ? '/liked.png' : '/like.png'} className='cursor-pointer' height={16} width={16} alt='more' />
                            <span className='text-gray-300'>
                                |
                            </span>
                            <span className='text-gray-500 flex gap-1'>
                                {optimisticLikeState.likeCount}
                                <span className='hidden lg:block'>Likes</span>
                            </span>
                        </div>
                    </button>
                </form>

                <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                    <Image src={'/comment.png'} className='cursor-pointer' height={16} width={16} alt='more' />
                    <span className='text-gray-300'>
                        |
                    </span>
                    <span className='text-gray-500 flex gap-1'>
                        {comments}
                        <span className='hidden lg:block'>Comments</span>
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

                        <span className='hidden lg:block'>Share</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PostWithInteraction