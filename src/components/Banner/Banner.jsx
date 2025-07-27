import React from 'react';
import Image from 'next/image';

const Banner = () => {
    return (
        <section className="relative h-[90vh] min-h-[450px] max-h-[1200px] overflow-hidden bg-blue-900">
            <div className="absolute inset-0">
                <video
                    autoPlay
                    playsInline
                    loop
                    muted
                    className="h-full w-full object-cover object-center"

                    // poster="/static/media/automotive-poster.webp"
                >
                    <source src="/videos/automotive.mp4" type="video/mp4" />
                    {/* <Image
                        src="/static/media/automotive-fallback.jpg"
                        alt="Performance in motion"
                        layout="fill"
                        objectFit="cover"
                        priority
                    /> */}
                </video>
            </div>
            
            <div className="absolute inset-0 bg-black/60"></div>
        
            <div className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-center">
                <span className="font-light text-white text-lg sm:text-xl lg:text-[1.375rem] leading-snug mb-2 sm:mb-3 lg:mb-4">
                    Performance in motion
                </span>
            
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[48px] font-light text-white leading-tight max-w-4xl mx-auto">
                    <span className="font-semibold">
                        Soft trims and <span className="text-cyan-400">NVH solutions</span>
                    </span>
                    <br className="hidden sm:block" />
                    <span>for seamless rides</span>
                </h1>
            
            </div>
        </section>
    );
};

export default Banner;