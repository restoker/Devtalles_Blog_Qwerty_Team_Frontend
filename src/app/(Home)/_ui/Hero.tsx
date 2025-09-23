'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

    const imgRef = useRef<HTMLImageElement>(null);
    const heroImgHolderRef = useRef<HTMLDivElement>(null);
    const heroImgRef = useRef<HTMLDivElement>(null);
    const svg1Ref = useRef<HTMLImageElement>(null);
    const svg2Ref = useRef<HTMLImageElement>(null);
    let currentImageIndex = 1;
    const totalImages = 6;
    let scrollTriggerInstance: ScrollTrigger | null = null;

    useEffect(() => {
        const interval = setInterval(() => {
            currentImageIndex =
                currentImageIndex >= totalImages ? 1 : currentImageIndex + 1;
            imgRef.current!.src = `/img/img${currentImageIndex}.webp`;
        }, 500);

        return () => {
            clearInterval(interval);
        }
    }, [])


    useGSAP(() => {
        const initAnimations = () => {
            if (scrollTriggerInstance) {
                scrollTriggerInstance.kill();
            }

            scrollTriggerInstance = ScrollTrigger.create({
                trigger: heroImgHolderRef.current,
                start: "top bottom",
                end: "top top",
                onUpdate: (self) => {
                    const progress = self.progress;
                    gsap.set(heroImgRef.current, {
                        y: `${-110 + 110 * progress}%`,
                        scale: 0.25 + 0.75 * progress,
                        rotation: -15 + 15 * progress,
                    });
                },
            });
        };

        initAnimations();

        window.addEventListener("resize", () => {
            initAnimations();
        });

        return () => {
            window.removeEventListener("resize", () => {
                initAnimations();
            });
        }

    }, [])

    useGSAP(() => {
        const tl = gsap.timeline();
        tl
            .from(svg1Ref.current, {
                opacity: 0,
                scale: 0,
                duration: 0.7,
                ease: "elastic.out",
                rotation: -15,
            })
            .from(svg2Ref.current, {
                opacity: 0,
                scale: 0,
                duration: 0.7,
                ease: "elastic.out",
                rotation: 45,
            }, '+0.2')
    }, [])


    return (
        <>
            <section className="hero relative w-full h-dvh p-10 flex flex-col justify-center items-center overflow-x-hidden my-5">
                <div className="hero-header-wrapper">
                    <div className="hero-header hero-header-1 relative translate-x-[-40%] z-[-1] mix-blend-color-dodge">
                        <img ref={svg1Ref} src="/svg/25.svg" alt="" className='absolute -top-20 right-10 size-20 lg:size-36' />
                        <h1 className='text-[13vw] leading-[0.9] text-white'>Dev/</h1>
                    </div>
                    <div className="hero-header hero-header-2 relative translate-x-[40%] z-[2] mix-blend-difference">
                        <h1 className='text-[13vw] leading-[0.9]'>Blog</h1>
                        <img ref={svg2Ref} src="/svg/5.svg" alt="" className='absolute bottom-0 -right-30 rotate-45 size-20 lg:size-36' />
                    </div>
                </div>
                <div className="hero-footer absolute bottom-0 w-full p-10 flex justify-between">
                    {/* <div className="hero-footer-symbols">
                        <img src="/images/global/symbols.png" alt="" />
                    </div> */}
                    <div className="hero-footer-scroll-down absolute right-0 -translate-x-1/2">
                        <p className="text-xs">querty team - 2025</p>
                    </div>
                    {/* <div className="hero-footer-tags">
                        <p className="mn">Portfolio Mode: ON</p>
                    </div> */}
                </div>
            </section>

            <section ref={heroImgHolderRef} className="hero-img-holder relative w-full h-dvh p-[2em]">
                <div ref={heroImgRef} className="hero-img relative w-full h-full transform translate-y-[-109%] scale-[0.25] rotate-[-15deg] border-[0.3em] border-zinc-800 rounded-[2em] overflow-hidden">
                    <img ref={imgRef} src="/img/img5.webp" alt="" className="w-full h-full object-cover" />
                </div>
            </section>
        </>
    )
}

export default Hero