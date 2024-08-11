'use client'
import { updateProfile } from '@/lib/actions';
import { User } from '@prisma/client'
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import React, { useActionState, useState } from 'react'

const UpdateUser = ({ user }: { user: User }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [coverImg, setCoverImg] = useState<any>(null);
  const handleClose = () => {
    setIsOpen(false)
  }

  const [state, updateUser] = useActionState(updateProfile.bind(null, coverImg?.secure_url), null)

  return (
    <div>
      <span className='text-sm text-blue-500 cursor-pointer' onClick={() => setIsOpen(true)}>Update</span>

      {
        isOpen && (
          <div className='absolute w-screen h-screen top-0 left-0 bg-black bg-opacity-65 flex items-center justify-center z-50'>
            <form action={updateUser} className='p-12 relative rounded-lg bg-white shadow-md flex flex-col gap-2 w-full md-1/2 xl:w-1/3'>
              <h1 className=''>Update Profile</h1>
              <div className='mmt-4 text-xs text-gray-500'>
                Use the navbar profile to change the avatar or username.
              </div>

              <CldUploadWidget onSuccess={(res) => {
                setCoverImg(res.info)
                alert("Image added")
              }
              } uploadPreset="x-social">
                {({ open }) => {
                  return (
                    <div className='flex flex-col mt-4 gap-4' onClick={() => open()}>
                      <label >Cover Picture</label>
                      <div className='flex items-center gap-2 cursor-pointer'>
                        <Image alt='cover' width={48} height={32} className='w-12 h-8 rounded-md object-cover' src={user.cover || '/coverImg.png'} />
                        <span className='text-xs text-gray-500 underline'>Change</span>
                      </div>
                    </div>
                  );
                }}
              </CldUploadWidget>



              <div className='flex flex-wrap justify-between gap-2 xl:gap-4'>

                <div className='flex flex-col gap-4'>
                  <label htmlFor="" className='text-xs text-gray-500'>First Name</label>
                  <input className='text-gray-500 ring-1 ring-gray-300 p-[13px] text-xs rounded-md' type="text" name='name' placeholder={user.name || "John"} />
                </div>
                <div className='flex flex-col gap-4'>
                  <label htmlFor="" className='text-xs text-gray-500'>Last Name</label>
                  <input className='text-gray-500 ring-1 ring-gray-300 p-[13px] text-xs rounded-md' type="text" name='surname' placeholder={user.surname || "Doe"} />
                </div>

                <div className='flex flex-col gap-4'>
                  <label htmlFor="" className='text-xs text-gray-500'>Description</label>
                  <input className='text-gray-500 ring-1 ring-gray-300 p-[13px] text-xs rounded-md' type="text" name='description' placeholder={user.description || "Life is good !"} />
                </div>

                <div className='flex flex-col gap-4'>
                  <label htmlFor="" className='text-xs text-gray-500'>City</label>
                  <input className='text-gray-500 ring-1 ring-gray-300 p-[13px] text-xs rounded-md' type="text" name='city' placeholder={user.city || "Nagpur"} />
                </div>

                <div className='flex flex-col gap-4'>
                  <label htmlFor="" className='text-xs text-gray-500'>School</label>
                  <input className='text-gray-500 ring-1 ring-gray-300 p-[13px] text-xs rounded-md' type="text" name='school' placeholder={user.school || "MIT"} />
                </div>

                <div className='flex flex-col gap-4'>
                  <label htmlFor="" className='text-xs text-gray-500'>Work</label>
                  <input className='text-gray-500 ring-1 ring-gray-300 p-[13px] text-xs rounded-md' type="text" name='work' placeholder={user.work || "Google Engg."} />
                </div>

                <div className='flex flex-col gap-4'>
                  <label htmlFor="" className='text-xs text-gray-500'>Website</label>
                  <input className='text-gray-500 ring-1 ring-gray-300 p-[13px] text-xs rounded-md' type="text" name='website' placeholder={user.website || "www.example.com"} />
                </div>

              </div>
              <button className='bg-blue-500 rounded-md  p-2 text-white mt-2'>Update</button>

              <div className='absolute top-2 right-2 cursor-pointer text-lg' onClick={handleClose}>X</div>
                {
                  state?.success && (
                    <span className='text-green-600 text-center'>{state.success}</span>
                  )
                }
                {
                  state?.errors?.length! > 0 && (
                    state?.errors.map(([key,value]) => (
                      <span className='text-red-500'>{key} field error : {value}</span>
                    ))
                  )
                }
            </form>
            

          </div>
        )
      }
    </div>
  )
}

export default UpdateUser