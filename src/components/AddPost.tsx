'use client'
import { addPost } from '@/lib/actions'
import { fetchUser } from '@/lib/data'
import { useUser } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import { error } from 'console'
import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'
import React, { useActionState, useRef, useState } from 'react'

const AddPost = () => {
  const { user, isLoaded } = useUser();
  if (!user) return null;
  const [desc, setDesc] = useState('');
  const [img, setImg] = useState<any>();
  const [state, formAction] = useActionState(addPost.bind(null, desc, img?.secure_url), null);

  if (!isLoaded) return null;

  const post = async () => {
    try {
      formAction();
     setDesc("")
     setImg(undefined);
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div className='bg-white rounded-lg shadow-md p-4 flex gap-4 justify-between text-sm'>

      {/* AVATAR  */}
      <Image alt='user' height={48} width={48} src={user.imageUrl!} className='w-12 h-12 object-cover rounded-full' />

      {/* POST  */}
      <div className='flex-1'>
        <form action={post} className='flex gap-4 items-center'>
          <textarea placeholder="What's on your mind" name="desc" onChange={(e) => setDesc(e.target.value)} value={desc} className='bg-slate-100 rounded-lg flex-1 p-2'></textarea>
          <Image alt='emoji' height={20} width={20} src={'/emoji.png'} className='w-5 h-5 cursor-pointer self-end' />
          <button className='p-2 bg-blue-500 text-white rounded-md'>Send</button>
        </form>

        {/* POST OPTIONS  */}
        <div className='flex items-center gap-4 mt-4 text-gray-400 flex-wrap'>

          <CldUploadWidget onSuccess={(res, { widget }) => {
            setImg(res.info)
            // alert("Image added")
            widget.close();
          }
          } uploadPreset="x-social">
            {({ open }) => {
              return (
                <div onClick={() => open()} className='flex items-center gap-2 cursor-pointer'>
                  <Image alt='' height={20} width={20} src={'/addImage.png'} className='w-5 h-5 cursor-pointer self-end' />
                  <span>Photo</span>
                </div>
              );
            }}
          </CldUploadWidget>

          <div className='flex items-center gap-2 cursor-pointer'>
            <Image alt='' height={20} width={20} src={'/addVideo.png'} className='w-5 h-5 cursor-pointer self-end' />
            <span>Video</span>
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image alt='' height={20} width={20} src={'/addEvent.png'} className='w-5 h-5 cursor-pointer self-end' />
            <span>Event</span>
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image alt='' height={20} width={20} src={'/poll.png'} className='w-5 h-5 cursor-pointer self-end' />
            <span>Poll</span>
          </div>
        </div>
        {
          img && (
            <Image src={img.secure_url} width={150} height={100} className='object-cover my-4 rounded-md' alt='post_img' />
          )
        }
        {
          state?.success && (
            <h1 className='text-green-600 text-center mt-4 float-start'>{state.success}</h1>
          )
        }
        {
          state?.error && (
            <span className='text-red-500 text-center  mt-4 float-start'>{state.error}</span>
          )
        }
      </div>

    </div>
  )
}

export default AddPost