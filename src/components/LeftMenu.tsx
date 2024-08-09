import React from 'react'
import ProfileCard from './ProfileCard'
import Link from 'next/link'
import Image from 'next/image'
import Ad from './Ad'

const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div className='flex flex-col gap-6'>
      {type == "home" && (
        <ProfileCard />
      )}
      <div className='shadow-md rounded-lg p-4 text-sm bg-white text-gray-500 flex flex-col gap-2'>
        <Link className='flex p-2 items-center gap-4 hover:bg-slate-100 rounded-lg' href={'/'}>
          <Image src={'/posts.png'} className='' width={20} height={20} alt='img' />
          <span>My Posts</span>
        </Link>
        <hr className='bt-1 border-gray-200 w-36 self-center' />
        <Link className='flex p-2 items-center gap-4 hover:bg-slate-100 rounded-lg' href={'/'}>
          <Image src={'/activity.png'} className='' width={20} height={20} alt='img' />
          <span>Activity</span>
        </Link>
        <hr className='bt-1 border-gray-200 w-36 self-center' />
        <Link className='flex p-2 items-center gap-4 hover:bg-slate-100 rounded-lg' href={'/'}>
          <Image src={'/lists.png'} className='' width={20} height={20} alt='img' />
          <span>Marketplace</span>
        </Link>
        <hr className='bt-1 border-gray-200 w-36 self-center' />
        
        <Link className='flex p-2 items-center gap-4 hover:bg-slate-100 rounded-lg' href={'/'}>
          <Image src={'/events.png'} className='' width={20} height={20} alt='img' />
          <span>Events</span>
        </Link>
        <hr className='bt-1 border-gray-200 w-36 self-center' />
        <Link className='flex p-2 items-center gap-4 hover:bg-slate-100 rounded-lg' href={'/'}>
          <Image src={'/albums.png'} className='' width={20} height={20} alt='img' />
          <span>Albums</span>
        </Link>
        <hr className='bt-1 border-gray-200 w-36 self-center' />
        <Link className='flex p-2 items-center gap-4 hover:bg-slate-100 rounded-lg' href={'/'}>
          <Image src={'/videos.png'} className='' width={20} height={20} alt='img' />
          <span>Videos</span>
        </Link>
        <hr className='bt-1 border-gray-200 w-36 self-center' />
        <Link className='flex p-2 items-center gap-4 hover:bg-slate-100 rounded-lg' href={'/'}>
          <Image src={'/news.png'} className='' width={20} height={20} alt='img' />
          <span>News</span>
        </Link>
        <hr className='bt-1 border-gray-200 w-36 self-center' />
        <Link className='flex p-2 items-center gap-4 hover:bg-slate-100 rounded-lg' href={'/'}>
          <Image src={'/courses.png'} className='' width={20} height={20} alt='img' />
          <span>Courses</span>
        </Link>
        <hr className='bt-1 border-gray-200 w-36 self-center' />
        <Link className='flex p-2 items-center gap-4 hover:bg-slate-100 rounded-lg' href={'/'}>
          <Image src={'/lists.png'} className='' width={20} height={20} alt='img' />
          <span>Lists</span>
        </Link>
        <hr className='bt-1 border-gray-200 w-36 self-center' />
        <Link className='flex p-2 items-center gap-4 hover:bg-slate-100 rounded-lg' href={'/'}>
          <Image src={'/settings.png'} className='' width={20} height={20} alt='img' />
          <span>Settings</span>
        </Link>
      </div>

      <Ad size='sm' />
    </div>
  )
}

export default LeftMenu