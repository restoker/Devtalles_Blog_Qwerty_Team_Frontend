'use client'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);

const News = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const triggerRef = useRef<HTMLHeadingElement>(null);
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "100% 45%",
                end: "top top",
                // markers: true,
            }
        });
        const initAnimations = () => {
            tl.fromTo(videoRef.current, {
                yPercent: 180,
            }, {
                duration: 1,
                yPercent: -16,
                ease: "elastic.out(1,0.9)",
            })
                .to(videoRef.current, {
                    duration: 1.5,
                    yPercent: 0,
                    clipPath: 'circle(100%)',
                    delay: 0.8,
                }, '<')
        };

        const cleanupAnimations = () => {
            gsap.killTweensOf(videoRef.current);
        };

        initAnimations();

        return cleanupAnimations;
    }, []);

    return (
        <>
            <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
                <div className='flex justify-between items-center'>
                    <h2 ref={triggerRef} className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-3xl">News: </h2>
                    <p className='text-white/50 flex items-center gap-1 group cursor-pointer'>
                        View all news
                        {/* right arrow */}
                        <ChevronRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-all duration-300" />
                    </p>
                </div>
                <video
                    ref={videoRef}
                    src="https://cdn.cosmos.so/1075007b-3d56-472b-8e59-71b788887389.mp4"
                    className="aspect-5/2 w-full object-cover outline-1 -outline-offset-1 outline-white/10 xl:rounded-3xl mt-4 [clip-path:circle(3.5%)]"
                    autoPlay
                    loop
                    muted
                />
            </div>
        </>
    )
}

export default News