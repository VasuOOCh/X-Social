import Image from 'next/image'
import React from 'react'
import Comments from './Comments'
import { Like, Post as PostFromPrisma, User } from '@prisma/client'
import PostWithInteraction from './PostWithInteraction'
import MoreOptions from './MoreOptions'

type PostType = PostFromPrisma & { user: User } & { likes: Like[] } & { _count: { comments: number } }

const Post = ({ post }: { post: PostType }) => {
    
    return (
        <div className='flex flex-col gap-4'>
            {/* User  */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <Image className='h-10 w-10 rounded-full object-cover' src={post.user.avatar!} alt='User' height={40} width={40} />
                    <span className='font-medium'> {post.user.name ? post.user.name + " " + post.user.surname : post.user.username}</span>
                </div>
                <MoreOptions postUser={post.userId} postId={post.id} />
            </div>

            {/* Desc  */}
            <div className='flex flex-col gap-4'>
                {post.img && (
                    <div className='w-full min-h-96 relative'>
                        <Image src={post.img} alt='User' fill className='rounded-md object-cover' />

                    </div>
                )}
                <p>{post.desc}</p>
            </div>

            {/* Interaction  */}
            <PostWithInteraction postId={post.id} likes={post.likes.map((obj) => obj.userId)} comments={post._count.comments} />

            <Comments postId={post.id} />
            
        </div>
    )
}

export default Post