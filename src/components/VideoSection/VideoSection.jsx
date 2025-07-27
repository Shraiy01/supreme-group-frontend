'use client'
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const VideoSection = () => {
    const videos = [
        {
            title: 'Passenger Vehicles',
            description: 'Revving up innovation from interior to exterior.',
            src: '/videos/PassengerAlpha.mp4',
        },
        {
            title: 'Commercial Vehicles',
            description: 'Advancing engineering for heavy-duty vehicles.',
            src: '/videos/Commercial.mp4',
        },
        {
            title: 'Trunk Solutions',
            description: 'Revving up Nonwoven innovation from interior to exterior.',
            src: '/videos/Trunk.mp4',
        },
        {
            title: 'Exterior Solutions',
            description: 'Premium nonwoven solutions for vehicle exteriors.',
            src: '/videos/Exterior.mp4',
        },
    ];

    const containerRef = useRef(null);
    const heroRef = useRef(null);
    const [heroFixed, setHeroFixed] = useState(false);
    const [activeVideo, setActiveVideo] = useState(0);


    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const activeVideoProgress = useTransform(
        scrollYProgress,
        [0, 1],
        [0, videos.length - 1]
    );

    const heroScrollProgress = useTransform(
        scrollYProgress,
        [0, 0.1],
        [0, 1]
    );


    useEffect(() => {
        const unsubscribe = activeVideoProgress.onChange((latest) => {
            setActiveVideo(Math.min(Math.round(latest), videos.length - 1));
        });

        const heroUnsubscribe = heroScrollProgress.onChange((latest) => {
            setHeroFixed(latest > 0.5);
        });

        return () => {
            unsubscribe();
            heroUnsubscribe();
        };
    }, [activeVideoProgress, heroScrollProgress]);

    return (
        <div className='bg-black'>
            <div ref={containerRef} className="relative max-w-[1200px] mx-auto w-full  text-white">
                <motion.section
                    ref={heroRef}
                    className={`flex items-center justify-center w-full ${heroFixed ? 'sticky top-10 z-10' : 'h-screen relative'}`}
                    initial={false}
                    animate={{
                        scale: heroFixed ? 0.9 : 1,
                        opacity: heroFixed ? 0.95 : 1,
                        transition: { type: 'spring', damping: 50, stiffness: 100 }
                    }}
                >
                    <div className=" px-4">
                        <h1 className="text-4xl md:text-5xl text-center font-light text-white tracking-[-0.5%]">
                            Evolving the drive with
                            <span className="font-semibold"> 360-degree </span>
                            <span>nonwoven solutions</span>
                        </h1>
                    </div>
                </motion.section>
                {heroFixed && <div className="h-screen w-full" />}
                <div className="relative flex justify-between w-full min-h-[400vh]">
                    <div className="sticky top-[150px] h-screen w-full flex justify-center overflow-hidden">
                        <div className="w-[40%] h-full flex">

                            <div className="w-[90%] h-full flex flex-col justify-center pl-6 pr-4">
                                {videos.map((video, index) => (
                                    <div key={index} className="relative mb-16">
                                        <motion.div
                                            className={`absolute left-0 top-0 h-full w-[3px] ${activeVideo === index ? 'bg-white' : 'bg-gray-600'}`}
                                            animate={{
                                                opacity: activeVideo === index ? 1 : 0.6,
                                                transition: { duration: 0.3 }
                                            }}
                                        />
                                        <motion.div
                                            className={`pl-6 ${activeVideo === index ? 'opacity-100' : 'opacity-60'}`}
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{
                                                y: 0,
                                                opacity: activeVideo === index ? 1 : 0.6,
                                                transition: {
                                                    y: { duration: 0.4 },
                                                    opacity: { duration: 0.3 }
                                                }
                                            }}
                                        >
                                            <h2 className={`text-3xl mb-4 ${activeVideo === index ? 'font-bold text-white' : 'font-medium text-gray-300'}`}>
                                                {video.title}
                                            </h2>
                                            <p className={`text-lg ${activeVideo === index ? 'font-medium text-white' : 'font-normal text-gray-400'}`}>
                                                {video.description}
                                            </p>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-[50%] h-full relative">
                            {videos.map((video, index) => (
                                <AnimatePresence key={index}>
                                    {activeVideo === index && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                       animate={{
                                                opacity: 1,
                                                scale: 1,
                                                transition: {
                                                    duration: 0.5,
                                                    ease: [0.33, 1, 0.68, 1]
                                                }
                                            }}
                                            exit={{ opacity: 0, scale: 1.02 }}
                                            className="absolute inset-0"
                                        >
                                            <video
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className="h-full w-full "
                                            >
                                                <source src={video.src} type="video/mp4" />
                                            </video>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default VideoSection;