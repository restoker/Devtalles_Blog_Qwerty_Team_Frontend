'use client';
import React from 'react'
import FormComment from './FormComment';

const Comments = () => {
    const postId = 10;
    return (
        <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-20">
            <div className="lg:col-span-4">
                <h2 id="reviews-heading" className="text-2xl font-bold tracking-tight">
                    Customer Reviews
                </h2>

                {/* <div className="mt-3 flex items-center">
                        <div>
                            <div className="flex items-center">
                                {[1, 2, 3, 4, 5].map((rating) => (
                                    <StarIcon
                                        key={rating}
                                        aria-hidden="true"
                                        className={classNames(
                                            getReviewAverage(data.map(r => r.rating)) > rating ? 'fill-amber-500' : 'text-gray-300',
                                            'h-5 w-5 flex-shrink-0',
                                        )}
                                    />
                                ))}
                            </div>
                            <p className="sr-only">{getReviewAverage(data.map(r => r.rating))} out of 5 stars</p>
                        </div>
                        <p className="ml-2 text-sm">Based on {data.length} reviews</p>
                    </div> */}

                <div className="mt-6">
                    <h3 className="sr-only">Review data</h3>

                    {/* <dl className="space-y-3">
                            {reviews.counts.map((count) => (
                                <div key={count.rating} className="flex items-center text-sm">
                                    <dt className="flex flex-1 items-center">
                                        <p className="w-3 font-medium">
                                            {count.rating}
                                            <span className="sr-only"> star reviews</span>
                                        </p>
                                        <div aria-hidden="true" className="ml-1 flex flex-1 items-center">
                                            <StarIcon
                                                aria-hidden="true"
                                                className={classNames(
                                                    count.count > 0 ? 'fill-yellow-400' : 'fill-gray-300',
                                                    'h-5 w-5 flex-shrink-0',
                                                )}
                                            />

                                            <div className="relative ml-3 flex-1">
                                                <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                                                {count.rating > 0 ? (
                                                    <div
                                                        style={{ width: `calc(${count.rating} / ${count.rating} * 100%)` }}
                                                        className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
                                                    />
                                                ) : null}
                                            </div>
                                        </div>
                                    </dt>
                                    <dd className="ml-3 w-10 text-right text-sm tabular-nums">
                                        {Math.round(getReviewAverage(data.map(r => r.rating)) * 100)}%
                                    </dd>
                                </div>
                            ))}
                        </dl> */}
                    {/* <ReviewChart reviews={data} /> */}
                </div>

                {/* <Reviews productId={variant.productId} /> */}
                <div className='py-4'>
                    <div className="flex gap-2 lg:gap-12 justify-stretch lg:flex-row flex-col">
                        <div className='flex-1'>
                            {/* <ReviewsForm /> */}
                            <FormComment postId={postId} />
                        </div>
                    </div>
                </div>

                {/* <div className="mt-10">
                                    <h3 className="text-lg font-medium">Share your thoughts</h3>
                                    <p className="mt-1 text-sm text-gray-400">
                                        If you’ve used this product, share your thoughts with other customers
                                    </p>

                                    <a
                                        href="#"
                                        className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium hover:bg-gray-50 sm:w-auto lg:w-full text-black"
                                    >
                                        Write a review
                                    </a>
                                </div> */}
            </div>

            <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
                <h3 className="sr-only">Recent comments</h3>
                {/* <Review reviews={data} /> */}
            </div>

        </div>
    )
}

export default Comments