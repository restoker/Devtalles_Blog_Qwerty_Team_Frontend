'use client';
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image';

const Comment = ({ comments }: { comments: any[] }) => {
    return (
        <>
            <div className="flow-root">
                <motion.div className="-my-12 divide-y divide-gray-100">
                    {comments.map((comment) => (
                        <div key={comment.id} className="py-2 border-2 px-4 border-zinc-50/10 rounded-lg mt-2">
                            {/* <div className="flex items-center">
                                <img alt={`${review.user.id}.`} src={review.user?.image!} className="h-12 w-12 rounded-full" />
                                <div className="ml-4">
                                    <h4 className="text-sm font-bold">{review.user.name}</h4>
                                    <p className="text-xs text-bold text-muted-foreground pt-1">
                                        {formatDistance(subDays(review.created!, 0), new Date())} ago.
                                    </p>
                                    <div className="mt-1 flex flex-col">
                                        <div className="flex">
                                            {[0, 1, 2, 3, 4].map((rating) => (
                                                <StarIcon
                                                    key={rating}
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        review.rating > rating ? 'fill-amber-500' : 'text-gray-300',
                                                        'h-5 w-5 flex-shrink-0',
                                                    )}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <p className="sr-only">{review.rating} out of 5 stars</p>
                                </div>
                            </div> */}
                            <div className='flex items-center gap-10'>
                                <div className='flex flex-col items-start justify-center gap-2 border-r-2 border-zinc-50/10 pr-3'>
                                    <Image
                                        src={comment.author.image || "/img/img9.webp"}
                                        alt="Foto del autor"
                                        width={40}
                                        height={40}
                                        className="aspect-square h-10 w-10 rounded-full bg-gray-50"
                                    />
                                    <h4 className="text-sm font-bold">{comment.author.name}</h4>
                                </div>
                                <div
                                    // dangerouslySetInnerHTML={{ __html: comment.content }}
                                    className="mt-4 "
                                >
                                    <p className='text-zinc-500 text-xs pb-2 italic'>Comment:</p>
                                    <p className="space-y-6 text-base italic text-amber-400">{comment.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </>
    )
}

export default Comment