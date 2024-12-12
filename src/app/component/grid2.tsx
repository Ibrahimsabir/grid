import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Grid2 = () => {
  return (
    <div className='w-full max-w-[1240px] h-auto rounded-[40px] items-center m-auto py-8 bg-gray-100'>
      {/* Heading */}
      <h1 className='font-[Integral CF] text-3xl sm:text-4xl md:text-5xl font-semibold text-center my-8'>
        BROWSE BY DRESS STYLE
      </h1>

      {/* Single Column Grid */}
      <div className='grid grid-cols-1 my-0 w-[90%] max-w-[600px] mx-auto'>
        {/* Image 1 */}
        <div className='w-full aspect-square rounded-3xl overflow-hidden'>
          <Link href={"/casual"} className='block'>
            <div className='group relative'>
              <Image
                src={"/images/Frame 105.png"}
                width={1000}
                height={1000}
                alt='Casual'
                className='w-full h-full object-cover rounded-3xl transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl'
              />
            </div>
          </Link>
        </div>

        {/* Image 2 */}
        <div className='w-full aspect-square rounded-3xl overflow-hidden'>
          <Link href={"/formal"} className='block'>
            <div className='group relative'>
              <Image
                src={"/images/Frame 106.png"}
                width={1000}
                height={1000}
                alt='Formal'
                className='w-full h-full object-cover rounded-3xl transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl'
              />
            </div>
          </Link>
        </div>

        {/* Image 3 */}
        <div className='w-full aspect-square rounded-3xl overflow-hidden'>
          <Link href={"/formal-style"} className='block'>
            <div className='group relative'>
              <Image
                src={"/images/Frame 107.png"}
                width={1000}
                height={1000}
                alt='Formal Style'
                className='w-full h-full object-cover rounded-3xl transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl'
              />
            </div>
          </Link>
        </div>

        {/* Image 4 */}
        <div className='w-full aspect-square rounded-3xl overflow-hidden'>
          <Link href={"/other-style"} className='block'>
            <div className='group relative'>
              <Image
                src={"/images/Frame 108.png"}
                width={1000}
                height={1000}
                alt='Other Style'
                className='w-full h-full object-cover rounded-3xl transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl'
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Grid2
