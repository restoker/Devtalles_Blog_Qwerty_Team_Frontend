'use client'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import CardNews from './CardNews';

gsap.registerPlugin(ScrollTrigger);

export interface CardInfo {
    id: number;
    title: string;
    description: string;
    image: string;
    etiqueta: string;
}

const News = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const triggerRef = useRef<HTMLHeadingElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    const cardInfo: CardInfo[] = [
        { id: 1, title: "Title 1", description: "Above The card1", image: 'https://cdn.cosmos.so/b8dd2001-cfae-42e1-8345-e5182a8ee2ab?format=jpeg', etiqueta: '/svg/s2.svg' },
        { id: 2, title: "More interesting 2", description: "Above The card2", image: 'https://cdn.cosmos.so/b933778c-15a6-492c-9c8a-de5cb992cae0?format=jpeg', etiqueta: '/svg/s3.svg' },
        { id: 3, title: "Heyyyyoo 3", description: "Above The card3", image: 'https://cdn.cosmos.so/3c6d14b1-6ace-4233-b02d-53b036d9f0a3?format=jpeg', etiqueta: '/svg/s4.svg' },
        { id: 4, title: "This a title 4", description: "Above The card4", image: 'https://cdn.cosmos.so/6346fc28-512a-4d61-af8f-9eb0151c7a26?format=jpeg', etiqueta: '/svg/s5.svg' },
        { id: 5, title: "Another title 5", description: "Above The card5", image: 'https://cdn.cosmos.so/796717fa-e94d-45b4-96e4-14e2734f77df?format=jpeg', etiqueta: '/svg/s6.svg' },
        { id: 6, title: "Title Fast 6", description: "Above The card6", image: 'https://cdn.cosmos.so/1f5258f7-4e45-4110-b006-e3822fde3a97?format=jpeg', etiqueta: '/svg/s7.svg' },
        { id: 7, title: "Title No name 7", description: "Above The card7", image: 'https://cdn.cosmos.so/9c66cd52-d27b-4439-9257-310a53b47f2a?format=jpeg', etiqueta: '/svg/s8.svg' },
    ];

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
                .from(cardsRef.current, {
                    opacity: 0,
                    delay: 0.8,
                }, '<')
        };

        const cleanupAnimations = () => {
            gsap.killTweensOf(videoRef.current);
            gsap.killTweensOf(cardsRef.current);
        };

        initAnimations();

        return cleanupAnimations;
    }, []);


    return (
        <>
            <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8 relative">
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
                    // src="https://cdn.cosmos.so/1075007b-3d56-472b-8e59-71b788887389.mp4"
                    src="https://cdn.cosmos.so/5b4ab569-c375-4f0e-bf59-61dc98375bad.mp4"
                    className="aspect-5/2 w-full object-cover outline-1 -outline-offset-1 outline-white/10 xl:rounded-3xl mt-4 [clip-path:circle(3.5%)] relative z-0"
                    autoPlay
                    loop
                    muted
                />

                <div ref={cardsRef} className='flex justify-center items-center'>
                    <CardNews cardInfo={cardInfo} />
                </div>

            </div>
        </>
    )
}

export default News