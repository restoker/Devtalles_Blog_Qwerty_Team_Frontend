'use client';
import { createLikeAction } from '@/server/actions/create-like-action';
import { HeartIcon } from '@heroicons/react/24/outline'
import { useAction } from 'next-safe-action/hooks';
import { useRouter } from 'next/navigation';
import React from 'react'

const LikeButton = ({ postId, tokenAuth, userId, likesState }: { postId: string; tokenAuth: string; userId: string; likesState: boolean }) => {
    const router = useRouter();
    const { execute, status } = useAction(createLikeAction, {
        onSuccess: ({ data }) => {
            if (data.ok) {
                // setIsLiked(true);
            }
            if (!data.ok) {
                // toast.error(data.msg, {
                //     duration: 2000,
                // });
                // setIsLiked(false);
            }
        }
    })

    return (
        <>
            <button
                disabled={status === 'executing'}
                className='sticky bottom-10 md:top-20 left-10 lg:left-60 md:right-10 bg-white/70 backdrop-blur-2xl size-16 rounded-xl flex items-center justify-center cursor-pointer'
                onClick={() => {
                    if (!tokenAuth) {
                        router.push('/login')
                    }
                    execute({ postId, tokenAuth, userId })
                }}
            >
                {
                    status === 'executing' ? (
                        <div className='size-6'>
                            <img src="/img/loader.gif" alt="" />
                        </div>
                    ) : (
                        likesState ? (
                            <HeartIcon className='size-6 text-red-500' fill='red' />
                            // <div className='size-full'>
                            //     <img src="/img/heart.gif" alt="" />
                            // </div>
                        ) : (
                            <HeartIcon className='size-6 text-red-500' />
                        )
                    )
                }
            </button>
        </>
    )
}

export default LikeButton