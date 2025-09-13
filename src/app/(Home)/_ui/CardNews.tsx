import React, { useRef, useState } from 'react'
import { CardInfo } from './News'
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { useGSAP } from '@gsap/react';
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';

gsap.registerPlugin(Draggable, ScrambleTextPlugin);

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
            <img ref={etiquetaRef} className='absolute z-30 bottom-30 size-24 object-contain rounded-lg left-1/3' src={etiqueta} />

            <div ref={titleRef} className="flex justify-between items-center text-center mt-5 flex-col">
                <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-3xl">{title}</h2>
                <p className="text-white/50 flex items-center gap-1 group cursor-pointer mt-5">
                    View new
                    {/* right arrow */}
                    {/* <ChevronRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-all duration-300" /> */}
                </p>
            </div>
            <div className="demo z-10 absolute top-20 left-1/2 -translate-x-36 -translate-y-1/2">
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