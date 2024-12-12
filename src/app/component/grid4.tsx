import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TwoColumnGrid = () => {
  return (
    <div className="w-full max-w-[600px] mx-auto py-8">
      <div className="grid grid-cols-[152px_444px] gap-4">
        {/* First Column */}
        <div className="grid grid-rows-3 gap-4">
          <div className="w-[152px] h-[162px] rounded overflow-hidden group">
            <Link href="/casual">
              <Image
                src="/images/image 2.png"
                width={152}
                height={162}
                alt="Image 1"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="w-[152px] h-[162px] rounded overflow-hidden group">
            <Link href="/formal">
              <Image
                src="/images/image 5.png"
                width={152}
                height={162}
                alt="Image 2"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="w-[152px] h-[162px] rounded overflow-hidden group">
            <Link href="/party">
              <Image
                src="/images/image 6.png"
                width={152}
                height={162}
                alt="Image 3"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>
        </div>

        {/* Second Column */}
        <div className="w-[444px] h-[530px] rounded overflow-hidden group">
          <Link href="/evening-style">
            <Image
              src="/images/image 1.png"
              width={500}
              height={500}
              alt="Image 4"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnGrid;



