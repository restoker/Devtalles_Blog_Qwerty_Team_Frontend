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
                        // translateX: progress,
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


    return (
        <>
            <section className="hero relative w-full h-dvh p-10 flex flex-col justify-center items-center overflow-x-hidden my-5">
                <div className="hero-header-wrapper">
                    <div className="hero-header hero-header-1 relative translate-x-[-40%] z-[-1] mix-blend-color-dodge">
                        <h1 className='text-[13vw] leading-[0.9] mix-blend-color-dodge'>Dev/</h1>
                    </div>
                    <div className="hero-header hero-header-2 relative translate-x-[40%] z-[2] mix-blend-difference">
                        <h1 className='text-[13vw] leading-[0.9]'>Blog</h1>
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