'use client';

import { generatePagination } from '@/utils/generatePagination';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { redirect, usePathname, useSearchParams } from 'next/navigation';
import React from 'react'

const Pagination = ({ totalPages }: { totalPages: number }) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const pageString = searchParams.get('page') ?? 1;

    const currentPage = isNaN(+pageString) ? 1 : +pageString;

    if (currentPage < 1 || isNaN(+pageString)) {
        redirect(pathname);
    }

    const allPages = generatePagination(currentPage, totalPages);

    const createUrl = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        if (pageNumber === '...') {
            return `${pathname}?${params.toString()}`;
        }
        if (+pageNumber <= 0) {
            return `${pathname}}`;
        }
        if (+pageNumber > totalPages) {
            return `${pathname}}?${params.toString()}`;
        }
        params.set('page', pageNumber.toString());

        return `${pathname}?${params.toString()}`;
    }

    return (
        <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 mt-10">
            <div className="-mt-px flex w-0 flex-1">
                {currentPage === 1 ? null : <Link
                    href={currentPage <= 1 ? createUrl(1) : createUrl(currentPage - 1)}
                    className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-200 disabled:cursor-not-allowed"
                >
                    <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                    Previous
                </Link>}
            </div>

            <div className="hidden md:-mt-px md:flex">
                {allPages.map((page, i) => (
                    <Link
                        key={`key-${i}`}
                        href={createUrl(page)}
                        className={clsx("inline-flex items-center border-t-2 px-4 pt-4 text-sm", currentPage === page ? 'border-purple-500 font-bold text-purple-500 dark:hover:border-purple-400 dark:hover:text-purple-400 hover:border-purple-400 hover:text-purple-400' : 'text-gray-500 dark:hover:text-gray-200 dark:hover:border-gray-200 dark:text-gray-300 hover:text-gray-700 border-transparent hover:border-gray-500 font-medium')}
                        aria-current={currentPage === page ? "page" : 'false'}
                    >
                        {page}
                    </Link>
                ))}

            </div>
            {totalPages < 2 ? <div className='-mt-px flex w-0 flex-1 justify-end' /> : <div className="-mt-px flex w-0 flex-1 justify-end">
                <Link
                    href={createUrl(currentPage + 1)}
                    className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-200"
                >
                    Next
                    <ArrowLongRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                </Link>
            </div>}
        </nav>
    )
}

export default Pagination