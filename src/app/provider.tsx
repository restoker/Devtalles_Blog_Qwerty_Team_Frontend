'use client';
import React, { useEffect, useRef, useState } from 'react'
import { SessionProvider } from 'next-auth/react'
// import type { LenisRef } from 'lenis/react';
import type { Orientation } from "lenis";
import { ReactLenis } from 'lenis/react'
// import gsap from 'gsap'
import { Toaster } from 'sonner'

export const RootProvider = ({ children }: { children: React.ReactNode }) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 1000);
        };

        checkMobile();

        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const scrollSettings = isMobile
        ? {
            duration: 0.8,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: "vertical",
            gestureDirection: "vertical",
            smooth: true,
            smoothTouch: true,
            touchMultiplier: 1.5,
            infinite: false,
            lerp: 0.09,
            wheelMultiplier: 1,
            orientation: "vertical" as Orientation,
            smoothWheel: true,
            syncTouch: true,
            // onScroll: () => { },
        }
        : {
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: "vertical",
            gestureDirection: "vertical",
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
            lerp: 0.1,
            wheelMultiplier: 1,
            orientation: "vertical" as Orientation,
            smoothWheel: true,
            syncTouch: true,
            // onScroll: () => { },
        };

    return (
        <div className="bg-zinc-950">
            <SessionProvider>
                <Toaster />
                <ReactLenis root options={scrollSettings}>
                    {children}
                </ReactLenis>
            </SessionProvider>
        </div>
    )
}
