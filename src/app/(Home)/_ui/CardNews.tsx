import React, { useRef, useState } from 'react'
import { CardInfo } from './News'
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { useGSAP } from '@gsap/react';
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(Draggable, ScrambleTextPlugin, DrawSVGPlugin);



const CardNews = ({ cardInfo }: { cardInfo: CardInfo[] }) => {

    const [title, setTitle] = useState(cardInfo[3].title);
    const [etiqueta, setEtiqueta] = useState(cardInfo[3].etiqueta);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const etiquetaRef = useRef<HTMLImageElement>(null);
    // const [currentCard, setCurrentCard] = useState(cardInfo[3])
    const first = useRef(4);

    const initialCardSettings = [
        { rot: -24, scale: 0.7, origin: "bottom left", opacity: 0, z: 1 },
        { rot: -16, scale: 0.8, origin: "bottom left", z: 2 },
        { rot: -8, scale: 0.9, origin: "bottom left", z: 3 },
        { rot: 0, scale: 1.0, origin: "bottom center", z: 4 },
        { rot: 8, scale: 0.9, origin: "bottom right", z: 3 },
        { rot: 16, scale: 0.8, origin: "bottom right", z: 2 },
        { rot: 24, scale: 0.7, origin: "bottom right", opacity: 0, z: 1 }
    ];

    useGSAP(() => {
        function initDrawRandomUnderline() {
            const svgVariants = [
                `<svg width="100%" height="15" viewBox="-320 0 910 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 20.9999C26.7762 16.2245 49.5532 11.5572 71.7979 14.6666C84.9553 16.5057 97.0392 21.8432 109.987 24.3888C116.413 25.6523 123.012 25.5143 129.042 22.6388C135.981 19.3303 142.586 15.1422 150.092 13.3333C156.799 11.7168 161.702 14.6225 167.887 16.8333C181.562 21.7212 194.975 22.6234 209.252 21.3888C224.678 20.0548 239.912 17.991 255.42 18.3055C272.027 18.6422 288.409 18.867 305 17.9999" stroke="currentColor" stroke-width="10" stroke-linecap="round"/></svg>`,
                `<svg width="100%" height="15" viewBox="-320 0 910 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 24.2592C26.233 20.2879 47.7083 16.9968 69.135 13.8421C98.0469 9.5853 128.407 4.02322 158.059 5.14674C172.583 5.69708 187.686 8.66104 201.598 11.9696C207.232 13.3093 215.437 14.9471 220.137 18.3619C224.401 21.4596 220.737 25.6575 217.184 27.6168C208.309 32.5097 197.199 34.281 186.698 34.8486C183.159 35.0399 147.197 36.2657 155.105 26.5837C158.11 22.9053 162.993 20.6229 167.764 18.7924C178.386 14.7164 190.115 12.1115 201.624 10.3984C218.367 7.90626 235.528 7.06127 252.521 7.49276C258.455 7.64343 264.389 7.92791 270.295 8.41825C280.321 9.25056 296 10.8932 305 13.0242" stroke="#E55050" stroke-width="10" stroke-linecap="round"/></svg>`,
                `<svg width="310" height="15" viewBox="-320 0 910 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 29.5014C9.61174 24.4515 12.9521 17.9873 20.9532 17.5292C23.7742 17.3676 27.0987 17.7897 29.6575 19.0014C33.2644 20.7093 35.6481 24.0004 39.4178 25.5014C48.3911 29.0744 55.7503 25.7731 63.3048 21.0292C67.9902 18.0869 73.7668 16.1366 79.3721 17.8903C85.1682 19.7036 88.2173 26.2464 94.4121 27.2514C102.584 28.5771 107.023 25.5064 113.276 20.6125C119.927 15.4067 128.83 12.3333 137.249 15.0014C141.418 16.3225 143.116 18.7528 146.581 21.0014C149.621 22.9736 152.78 23.6197 156.284 24.2514C165.142 25.8479 172.315 17.5185 179.144 13.5014C184.459 10.3746 191.785 8.74853 195.868 14.5292C199.252 19.3205 205.597 22.9057 211.621 22.5014C215.553 22.2374 220.183 17.8356 222.979 15.5569C225.4 13.5845 227.457 11.1105 230.742 10.5292C232.718 10.1794 234.784 12.9691 236.164 14.0014C238.543 15.7801 240.717 18.4775 243.356 19.8903C249.488 23.1729 255.706 21.2551 261.079 18.0014C266.571 14.6754 270.439 11.5202 277.146 13.6125C280.725 14.7289 283.221 17.209 286.393 19.0014C292.321 22.3517 298.255 22.5014 305 22.5014" stroke="#E55050" stroke-width="10" stroke-linecap="round"/></svg>`,
                `<svg width="310" height="15" viewBox="-320 0 910 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.0039 32.6826C32.2307 32.8412 47.4552 32.8277 62.676 32.8118C67.3044 32.807 96.546 33.0555 104.728 32.0775C113.615 31.0152 104.516 28.3028 102.022 27.2826C89.9573 22.3465 77.3751 19.0254 65.0451 15.0552C57.8987 12.7542 37.2813 8.49399 44.2314 6.10216C50.9667 3.78422 64.2873 5.81914 70.4249 5.96641C105.866 6.81677 141.306 7.58809 176.75 8.59886C217.874 9.77162 258.906 11.0553 300 14.4892" stroke="#E55050" stroke-width="10" stroke-linecap="round"/></svg>`,
                `<svg width="310" height="15" viewBox="-320 0 910 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.99805 20.9998C65.6267 17.4649 126.268 13.845 187.208 12.8887C226.483 12.2723 265.751 13.2796 304.998 13.9998" stroke="currentColor" stroke-width="10" stroke-linecap="round"/></svg>`,
                `<svg width="310" height="15" viewBox="-320 0 910 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 29.8857C52.3147 26.9322 99.4329 21.6611 146.503 17.1765C151.753 16.6763 157.115 15.9505 162.415 15.6551C163.28 15.6069 165.074 15.4123 164.383 16.4275C161.704 20.3627 157.134 23.7551 153.95 27.4983C153.209 28.3702 148.194 33.4751 150.669 34.6605C153.638 36.0819 163.621 32.6063 165.039 32.2029C178.55 28.3608 191.49 23.5968 204.869 19.5404C231.903 11.3436 259.347 5.83254 288.793 5.12258C294.094 4.99476 299.722 4.82265 305 5.45025" stroke="#E55050" stroke-width="10" stroke-linecap="round"/></svg>`
            ];
            // Add attributes to <svg> elements
            function decorateSVG(svgEl: SVGElement) {
                svgEl.setAttribute('class', 'text-draw__box-svg');
                svgEl.setAttribute('preserveAspectRatio', 'none');
                svgEl.querySelectorAll('path').forEach(path => {
                    path.setAttribute('stroke', 'currentColor');
                });
            }
            let nextIndex: number | null = null;
            document.querySelectorAll('[data-draw-line]').forEach(container => {
                const box = container.querySelector('#draw-line');
                if (!box) return;
                let enterTween: gsap.core.Tween | null = null;
                let leaveTween: gsap.core.Tween | null = null;
                container.addEventListener('mouseenter', () => {
                    // Don't restart if still playing
                    if (enterTween && enterTween.isActive()) return;
                    if (leaveTween && leaveTween.isActive()) leaveTween.kill();
                    // Random Start
                    if (nextIndex === null) {
                        nextIndex = Math.floor(Math.random() * svgVariants.length);
                    }
                    // Animate Draw
                    box.innerHTML = svgVariants[nextIndex];
                    const svg = box.querySelector('svg');
                    if (svg) {
                        decorateSVG(svg);
                        const path = svg.querySelector('path');
                        if (path) {
                            gsap.set(path, { drawSVG: '0%' });
                            enterTween = gsap.to(path, {
                                duration: 0.5,
                                drawSVG: '100%',
                                ease: 'power2.inOut',
                                onComplete: () => { enterTween = null; }
                            });
                        }
                    }
                    // Advance for next hover across all items
                    nextIndex = (nextIndex + 1) % svgVariants.length;
                });
                container.addEventListener('mouseleave', () => {
                    const path = box.querySelector('path');
                    if (!path) return;
                    const playOut = () => {
                        // Don't restart if still drawing out
                        if (leaveTween && leaveTween.isActive()) return;
                        leaveTween = gsap.to(path, {
                            duration: 0.5,
                            drawSVG: '100% 100%',
                            ease: 'power2.inOut',
                            onComplete: () => {
                                leaveTween = null;
                                box.innerHTML = ''; // remove SVG when done
                            }
                        });
                    };
                    if (enterTween && enterTween.isActive()) {
                        // Wait until draw-in finishes
                        enterTween.eventCallback('onComplete', playOut);
                    } else {
                        playOut();
                    }
                });
            });
        }

        initDrawRandomUnderline();

    }, [])

    useGSAP(() => {
        // INITIAL CONFIGURATION
        let cards = gsap.utils.toArray(".card") as HTMLDivElement[];

        const EASE = "back.out(1.7)";
        const SHADOW = "0px 22px 70px 4px rgba(1, 14, 39, 1)";
        const MAX_DRAG_DISTANCE = 300;
        let direction: string;

        // chnage title when change card
        const changeTitle = (isPositiveOrNegative: number) => {
            // console.log(isPositiveOrNegative);
            if (isPositiveOrNegative > 0) {
                // setTitle((latestTitle) => cardInfo[0].title);
                if (first.current === 1) {
                    first.current = 7;
                    setTitle(cardInfo[first.current - 1].title);
                    setEtiqueta(cardInfo[first.current - 1].etiqueta);
                } else {
                    first.current--;
                    setTitle(cardInfo[first.current - 1].title);
                    setEtiqueta(cardInfo[first.current - 1].etiqueta);
                }
            } else {
                if (first.current === 7) {
                    first.current = 1;
                    setTitle(cardInfo[first.current - 1].title);
                    setEtiqueta(cardInfo[first.current - 1].etiqueta);
                } else {
                    first.current++;
                    setTitle(cardInfo[first.current - 1].title);
                    setEtiqueta(cardInfo[first.current - 1].etiqueta);
                }
            }
            // console.log(first.current);
        };

        cards.forEach((card: HTMLDivElement, i: number) => {
            gsap.set(card, {
                rotation: initialCardSettings[i].rot,
                scale: initialCardSettings[i].scale,
                transformOrigin: initialCardSettings[i].origin,
                opacity: initialCardSettings[i].opacity ?? 1,
                boxShadow: SHADOW,
                zIndex: initialCardSettings[i].z
            });
        });

        // DRAGGABLE SETUP
        let proxy = document.createElement("div");

        Draggable.create(proxy, {
            trigger: ".demo",
            type: "x,y",
            bounds: { minX: -MAX_DRAG_DISTANCE, maxX: MAX_DRAG_DISTANCE },
            onDrag() {
                direction = Math.sign(this.x) === 1 ? "bottom right" : "bottom left";
                const distance = this.x / MAX_DRAG_DISTANCE;
                animateCardsOnDrag(distance);
            },
            onDragEnd() {
                if (this.x > 50) {
                    changeTitle(1);
                    // console.log(first.current);
                } else if (this.x < -50) {
                    changeTitle(-1);
                    // console.log(first.current);

                }
                // changeTitle(Math.round(this.x));
                if (Math.abs(this.x) > 50) {
                    flipCards();
                }
                resetDraggablePosition();
                gsap.set(this.target, { x: 0 });
            },
            inertia: true,
            // liveSnap: {
            //     rotation: function (value) {
            //         //snap to the closest increment of 10.
            //         return Math.round(value / 10) * 10;
            //     },
            // },
        });

        // ANIMATE CARDS ON DRAG
        function animateCardsOnDrag(distance: number) {
            const d = gsap.utils.clamp(-1, 1, distance);
            const absD = Math.abs(d);

            const dragTweens = [
                { index: 0, rot: -26 + d, scale: (7 + d) / 10, opacity: d / 2 + 0.2 },
                { index: 1, rot: -16 + d * 2, scale: (8 + d) / 10 },
                { index: 2, rot: -8 + d * 4, scale: (9 + d) / 10 },
                {
                    index: 3,
                    rot: d * 8,
                    origin: direction,
                    ease: "power4.out",
                    boxShadow: `0px 22px ${70 - absD * 20}px 4px 1, 14, 39, ${1 - absD / 4})`
                },
                { index: 4, rot: 8 + d * 4, scale: (-d + 9) / 10 },
                { index: 5, rot: 16 + d * 2, scale: (-d + 8) / 10 },
                { index: 6, rot: 26 + d, scale: (-d + 7) / 10, opacity: -d / 2 + 0.2 }
            ];

            dragTweens.forEach(
                ({ index, rot, scale, opacity, origin, boxShadow, ease }) => {
                    gsap.to(cards[index], {
                        rotation: gsap.utils.clamp(-30, 30, rot),
                        ...(scale !== undefined && { scale: gsap.utils.clamp(0.6, 1, scale) }),
                        ...(opacity !== undefined && { opacity }),
                        ...(origin && { transformOrigin: origin }),
                        ...(boxShadow && { boxShadow }),
                        ...(ease !== undefined && { ease })
                    });
                    gsap.fromTo(titleRef.current, {
                        opacity: 0,
                        xPercent: direction.includes("right") ? -100 : 100,
                        ease: "elastic.in(1,0.4)"
                    }, {
                        opacity: 1,
                        xPercent: 0,
                        duration: 1,
                        ease: "elastic.out(1,0.4)"
                    });
                    gsap.fromTo(etiquetaRef.current, {
                        opacity: 0,
                        scale: 0,
                        ease: "elastic.in(1,0.4)"
                    }, {
                        opacity: 1,
                        scale: 1,
                        rotate: (Math.round(Math.random()) * 2 - 1) * 30,
                        ease: "elastic.out(1,0.4)"
                    });
                    // gsap.to(titleRef.current, {
                    //     opacity: 1,
                    //     yPercent: 0,
                    //     ease: "power3.out",
                    //     scrambleText: {
                    //         text: cardInfo[first.current].title,
                    //         chars: 'X0',
                    //  newClass: "myClass"
                    //     }
                    // });
                }
            );
        }

        // RESET CARDS POSITION
        function resetDraggablePosition() {
            cards.forEach((card, i) => {
                gsap.to(card, {
                    rotation: initialCardSettings[i].rot,
                    scale: initialCardSettings[i].scale,
                    transformOrigin: initialCardSettings[i].origin,
                    opacity: initialCardSettings[i].opacity ?? 1,
                    boxShadow: SHADOW,
                    ease: EASE
                });
            });
        }

        // FLIP CARDS
        function flipCards() {
            if (direction === "bottom right") {
                cards.unshift(cards.pop() as HTMLDivElement);
            } else {
                cards.push(cards.shift() as HTMLDivElement);
            }

            let zIndex = gsap.utils.distribute({ base: 1, amount: 3, from: "edges" });
            gsap.set(cards, { zIndex });
        }

    }, [])

    return (
        <>
            <img ref={etiquetaRef} className='absolute z-30 bottom-32 sm:bottom-52 lg:bottom-32 size-24 object-contain rounded-lg left-1/3' src={etiqueta} />

            <div ref={titleRef} className="flex justify-between items-center text-center mt-5 flex-col">
                <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-3xl">{title}</h2>
                <div data-draw-line='' className="flex flex-col items-center gap-1">
                    <p className="text-white/50 flex items-center gap-1 group cursor-pointer mt-5">
                        View new
                        {/* right arrow */}
                        {/* <ChevronRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-all duration-300" /> */}
                    </p>
                    <div id="draw-line" className="text-draw__box text-purple-500 w-[20rem] h-2.5 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="-320 0 910 41" fill="none" preserveAspectRatio="none" className="text-draw__box-svg w-full h-full absolute overflow-visible">
                            <path d="M17.0039 33.582C32.2307 33.7406 47.4552 33.7271 62.676 33.7113C67.3044 33.7064 96.546 33.9549 104.728 32.9769C113.615 31.9146 104.516 29.2022 102.022 28.1821C89.9573 23.2459 77.3751 19.9248 65.0451 15.9546C57.8987 13.6536 37.2813 9.3934 44.2314 7.00157C50.9667 4.68363 64.2873 6.71856 70.4249 6.86582C105.866 7.71618 141.306 8.48751 176.75 9.49827C217.874 10.671 258.906 11.9547 300 15.3886" stroke="currentColor" strokeWidth="10" strokeLinecap="round"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="demo z-10 absolute top-[20%] md:top-[40%] lg:top-10 xl:top-20 left-1/2 -translate-x-40 sm:-translate-x-36 md:-translate-x-36 -translate-y-1/2">
                {/* <!-- Cards --> */}
                {cardInfo.map((card, i) => (
                    <div key={`key-${i}`} className="card absolute w-2xs h-[26rem] border-[6px] border-white/5 overflow-hidden rounded-2xl backdrop-blur-xl">
                        {/* <img className='absolute bottom-0 size-24 object-contain rounded-lg -left-20' src={card.etiqueta} /> */}
                        {/* <h1 className="text-2xl font-semibold tracking-tight text-pretty text-white sm:text-3xl absolute top-2 left-2">{card.title}</h1> */}
                        <img className='w-full h-full object-cover rounded-lg' src={card.image} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default CardNews