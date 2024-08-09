import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserInfoCard = ({ userId }: { userId?: string }) => {
  return (
    <div className='p-4 bg-white rounded-lg text-sm shadow-md flex flex-col gap-4'>
      {/* Top  */}
      <div className='flex justify-between items-center font-medium'>
        <span className='tetx-gray-500'>User Information</span>
        <Link href={'/'} className='text-blue-500 text-xs'>See all</Link>
      </div>

      {/* Bottom  */}
      <div className='flex flex-col gap-4 text-gray-500'>
        <div className='flex items-center gap-2'>
          <span className='text-xl text-black font-semibold'>Vasu Choudhari</span>
          <span className='text-sm'>Vasu_1204</span>
        </div>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi non amet sequi, mollitia officiis labore? Voluptatum obcaecati dolorum hic dolores!
        </p>
        <div className='items-center flex gap-2'>
          <Image height={16} width={16} src={'/map.png'} alt='img' />
          <span>Living in <b>Gondia</b></span>
        </div>
        <div className='items-center flex gap-2'>
          <Image height={16} width={16} src={'/school.png'} alt='img' />
          <span>Went to <b>GPS</b></span>
        </div>
        <div className='items-center flex gap-2'>
          <Image height={16} width={16} src={'/work.png'} alt='img' />
          <span>Works at <b>Google inc.</b></span>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex gap-1 items-center'>
            <Image height={16} width={16} src={'/link.png'} alt='img' />
            <Link className='text-blue-500 font-medium' href={'https://google.com'}>vasu.com</Link>
          </div>

          <div className='flex gap-1 items-center'>
            <Image height={16} width={16} src={'/date.png'} alt='img' />
            <span>Joined 12 April, 2005</span>
          </div>

        </div>

        <button className='bg-blue-500 text-white p-2 text-sm rounded-md'>Follow</button>
        <span className='text-red-400 text-xs self-end cursor-pointer'>Block User</span>
      </div>
    </div>
  )
}

export default UserInfoCard