'use client'

import { addComment } from '@/lib/actions'
import { useUser } from '@clerk/nextjs'
import { Comment, Like, User } from '@prisma/client'
import Image from 'next/image'
import React, { useOptimistic, useState } from 'react'

type CommentType = Comment & { user: User }

const CommentList = ({ comments, postId }: { comments: CommentType[], postId: string }) => {

    const { user } = useUser();

    // defining states :-
    const [desc, setDesc] = useState('')
    const [postComments, setPostComments] = useState(comments);
    const [optimusticPostComments, addOptimisticPostComments] = useOptimistic(postComments, (state, value: CommentType) => [...state, value])

    const comment = async () => {
        try {
            addOptimisticPostComments({
                id: "123",
                desc,
                userId: user?.id!,
                createdAt: new Date(Date.now()),
                postId : postId,
                user: {
                    id: user?.id!,
                    name: "Adding comment....",
                    surname: "",
                    avatar: user?.imageUrl!,
                    username: "Adding comment....",
                    city: "",
                    school: "",
                    description: "",
                    createdAt: new Date(Date.now()),
                    cover : "",
                    website : "",
                    work : ""
                    
                }

            })
            const newComment = await addComment(postId, desc);
            setPostComments((prev) => [newComment!,...prev])
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <>
            {
                user && (
                    <form action={comment}>
                        <div className='flex items-center gap-4'>
                            <Image src={user?.imageUrl!} alt='img' className='w-8 h-8 rounded-full' height={32} width={32} />
                            <div className='flex items-center bg-slate-100 rounded-lg text-sm px-6 py-2 flex-1'>
                                <input onChange={(e) => setDesc(e.target.value)} type="text" placeholder='Write a comment' className='outline-none bg-transparent flex-1' name="desc" id="" />
                                <Image alt='emoji' src={'/emoji.png'} width={16} height={16} className='cursor-pointer' />
                            </div>
                        </div>
                    </form>
                )
            }
            <div>
                {
                    optimusticPostComments.map((comment) => (
                        <div key={comment.id} className='flex items-start gap-4 justify-between mt-6'>
                            {/* Avatar  */}
                            <Image src={comment.user.avatar!} alt='img' className='w-10 h-10 rounded-full' height={40} width={40} />

                            {/* Desc  */}
                            <div className='flex flex-col gap-2 flex-1'>
                                <div className='font-medium'>{comment.user?.name ? comment.user.name + " " + comment.user.surname : comment.user?.username}</div>
                                <p>{comment.desc}</p>

                                <div className='flex items-center gap-8 text-xs text-gray-500 mt-2'>
                                    <div className='flex items-center gap-4'>
                                        <Image src={'/like.png'} alt='' width={16} height={16} className='w-4 h-4 cursor-pointer' />
                                        <span className='text-gray-300'>|</span>
                                        <span className='text-gray-500'>{123} likes

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
                    ))
                }
            </div></>
    )
}

export default CommentList