'use client';

import Link from 'next/link';
import React from 'react';
import { Post } from '@/interfaces';


const BLog = ({ post }: { post: Post }) => {

    return (
        <>
            <article key={post.id} className="flex flex-col items-start justify-between bg-zinc-800 rounded-2xl group">
                <Link href={`/blogs/${post.id}`} className="relative w-full overflow-hidden rounded-t-2xl">
                    <img
                        alt=""
                        src={post.images[0] || '/img/img8.webp'}
                        className="aspect-video w-full rounded-t-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2 group-hover:scale-105 transition-all duration-500 hover:blur-sm"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
                </Link>
                <div className="w-full px-2 pb-2">
                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                        {/* <time dateTime={converDate(post.created_at)} className="text-gray-400"> */}
                        <span className="text-gray-400">
                            {new Date(post.created_at).toLocaleDateString("en-US", {
                                weekday: "short",
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                            })}
                        </span>
                        {/* </time> */}
                        <Link
                            href={`/blogs/${post.id}`}
                            className="relative z-10 rounded-full px-3 py-1.5 font-medium bg-gray-50/5 text-white hover:bg-gray-100/20"
                        >
                            {post.category.name}
                        </Link>
                    </div>
                    <div className="group relative flex justify-center w-full flex-col items-center">
                        <Link href={`/blogs/${post.id}`}>
                            <h3 className="mt-3 text-lg/6 font-semibold text-white group-hover:text-gray-100 line-clamp-1">
                                <span className="absolute inset-0" />
                                {post.title}
                            </h3>
                        </Link>
                        <p className="mt-5 line-clamp-2 text-sm/6 text-gray-400">{post.description}</p>
                    </div>
                    <div className="relative mt-8 flex items-center gap-x-4">
                        <img alt="" src={post.author.image || '/img/img8.webp'} className="size-10 rounded-full bg-gray-100" />
                        <div className="text-sm/6">
                            <p className="font-semibold text-gray-300">
                                <Link href={`/users/${post.author.id}`}>
                                    <span className="absolute inset-0" />
                                    {post.author.name}
                                </Link>
                            </p>
                            <p className="text-gray-400">{post.author.role}</p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default BLog