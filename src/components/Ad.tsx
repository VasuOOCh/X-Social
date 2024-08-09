import Image from 'next/image'
import React from 'react'

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
    return (
        <div className='p-4 bg-white rounded-lg text-sm shadow-md'>
            {/* TOP  */}
            <div className='flex items-start justify-between font-medium text-gray-500'>
                <span>Sponsered Ads</span>
                <Image src='/more.png' alt='more' width={16} height={16} />
            </div>

            {/* Bottom  */}
            <div className={`flex flex-col mt-4 ${size == "sm" ? "gap-2" : "gap-4"}`}>
                <div className={`relative w-full ${size == "sm" ? "h-24" : size == "md" ? "h-36" : "h-48"}`}>
                    <Image src='https://images.pexels.com/photos/609771/pexels-photo-609771.jpeg?auto=compress&cs=tinysrgb&w=600' className='rounded-lg object-cover' alt='more' fill />
                </div>
                <div className='flex items-center gap-4'>
                    <Image src='https://images.pexels.com/photos/609771/pexels-photo-609771.jpeg?auto=compress&cs=tinysrgb&w=600' className='rounded-full w-6 h-6 object-cover' alt='more' width={24} height={24} />
                    <span className='font-medium tetx-blue-500'>BigChef Luggage</span>
                </div>
                <p className={size == "sm" ? "text-xs"  :'text-sm'}>
                    {
                        size == "sm" ? (
                            "Lorem ipsum dolor sit, amet consectetur adipisicing elit"
                        ) : (
                            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, repellat! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, repellat!"
                        )
                    }

                </p>
                <button className='w-full bg-blue-400 text-xs text-white p-2 rounded-md'>Learn More</button>
            </div>
        </div>
    )
}

export default Ad