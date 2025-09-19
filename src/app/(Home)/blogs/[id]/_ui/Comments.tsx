// 'use client';
import React from 'react'
import FormComment from './FormComment';
import Comment from './Comment';
import { auth } from '@/server/auth';

const Comments = async ({ postId }: { postId: string }) => {
    const session = await auth();
    const tokenAuth = session?.user?.tokenAuth!;
    const url = `${process.env.ADDRESS_SERVER}/api/comments/post/${postId}`;
    const getComments = await fetch(url);
    const response = await getComments.json();
    // console.log(response);
    const comments = response.data.comments;
    return (
        <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-20">
            <div className="lg:col-span-4">
                <h2 id="reviews-heading" className="text-2xl font-bold tracking-tight">
                    Comments:
                </h2>

                <div className="mt-6">
                    <h3 className="sr-only">Review data</h3>

                </div>

                {session ? <div className='py-4'>
                    <div className="flex gap-2 lg:gap-12 justify-stretch lg:flex-row flex-col">
                        <div className='flex-1'>
                            {/* <ReviewsForm /> */}
                            <FormComment postId={postId} tokenAuth={tokenAuth} />
                        </div>
                    </div>
                </div> : null}

            </div>

            <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
                <h3 className="sr-only">Recent comments</h3>
                <Comment comments={comments} />
            </div>

        </div>
    )
}

export default Comments