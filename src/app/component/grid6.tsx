import Image from "next/image";
import Link from "next/link";


const MobileGrid = () => {
    return (
      <div className="w-full max-w-[600px] mx-auto py-8">
        {/* Large Image */}
        <div className="w-full h-[530px] rounded overflow-hidden mb-4">
          <Link href="/large-image">
            <div className="group relative">
              <Image
                src="/images/image 1.png"
                width={500}
                height={500}
                alt="Large Image"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
              />
            </div>
          </Link>
        </div>
  
        {/* Row of Smaller Images */}
        <div className="grid grid-cols-3 gap-4">
          <div className="w-full h-[162px] rounded overflow-hidden">
            <Link href="/small-image-1">
              <div className="group relative">
                <Image
                  src="/images/image 2.png"
                  width={152}
                  height={162}
                  alt="Small Image 1"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
                />
              </div>
            </Link>
          </div>
          <div className="w-full h-[162px] rounded overflow-hidden">
            <Link href="/small-image-2">
              <div className="group relative">
                <Image
                  src="/images/image 5.png"
                  width={152}
                  height={162}
                  alt="Small Image 2"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
                />
              </div>
            </Link>
          </div>
          <div className="w-full h-[162px] rounded overflow-hidden">
            <Link href="/small-image-3">
              <div className="group relative">
                <Image
                  src="/images/image 6.png"
                  width={152}
                  height={162}
                  alt="Small Image 3"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default MobileGrid;
  
  