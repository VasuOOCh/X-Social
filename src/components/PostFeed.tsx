import React from 'react'
import Post from './Post'
import prisma from '@/lib/client'
import { auth } from '@clerk/nextjs/server'

const PostFeed =async ({userId} : {userId? : string}) => {
  const {userId : currentUserId} = auth();
  let posts : any[] = [];
  
  if(userId) {
    posts = await prisma.post.findMany({
      where : {
        userId
      },
      include : {
        user : true,
        likes : {
          select : {
            userId : true
          }
        },
        _count : {
          select : {
            comments : true
          }
        }
      },
      orderBy : {
        createdAt  : 'desc'
      }
    })
  }

  if(!userId && currentUserId) {
    const following = await prisma.follower.findMany({
      where : {
        followerId : currentUserId
      },
      select : {
        followingId : true
      }
    })

    const followingIds = following.map((obj) => obj.followingId)
    
    posts = await prisma.post.findMany({
      where : {
        userId : {
          in : followingIds
        },
      },
      include : {
        user : true,
        likes : {
          select : {
            userId : true
          }
        },
        _count : {
          select : {
            comments : true
          }
        }
      },
      orderBy : {
        createdAt : 'desc'
      }
    })
    
  }
  
  return (
    <div className='bg-white rounded-lg shadow-md p-4 flex flex-col gap-12'>
      {
        posts?.length > 0 ? (
          posts?.map((post) => (
            <Post key={post.id} post={post} />
          ))
        ) : "No post exists"
      }
    </div>
  )
}

export default PostFeed