'use client'
import { deletePost } from '@/lib/actions';
import { useUser } from '@clerk/nextjs';
import Image from 'next/image'
import React, { useState } from 'react'

const MoreOptions = ({postUser, postId} : {postUser : string, postId : string}) => {
    const [isOpen,setIsOpen] = useState(false);
    const {user} = useUser();

    const deleteAction = async () => {
        setIsOpen(false);
        try {
            
            await deletePost(postId, postUser);
        } catch (error) {
            console.log(error);
            
        }
    }

    const handleBlur = (e : any) => {
        // Check if the new focus target is outside the component
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsOpen(false);
        }
    };

  return (
    <div onBlur={handleBlur} tabIndex={0}>
    <Image className='hover:rotate-90 ease-in-out transition-all' src={'/more.png'} height={16} width={16} onClick={() => setIsOpen(!isOpen)} alt='more' />

    {
        isOpen && (
            <div   className='absolute flex flex-col gap-1 shadow-md z-50 rounded-md bg-white'>
                <div className='hover:bg-gray-200 p-2 px-4 cursor-pointer'>Profile</div>
                {
                    postUser == user?.id && (
                        <form action={deleteAction}>
                            <button className='hover:bg-gray-200 p-2 px-4 cursor-pointer'>Delete</button>
                        </form>
                    )
                }
            </div>
        )
    }
    </div>
  )
}

export default MoreOptions