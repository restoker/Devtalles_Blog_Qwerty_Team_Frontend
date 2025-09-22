'use client';
import { CategoriesBlog, Post } from '@/interfaces'
import { Disclosure, Menu, Select } from '@headlessui/react'
import React, { useMemo, useState } from 'react'
import BLog from './BLog'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Search from './Search';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const PostGrid = ({ categoriesServer, postsServer }: { categoriesServer: CategoriesBlog[], postsServer: Post[] }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [seeSearch, setSearch] = useState(false);

    const handleSearch = () => {
        setSearch(value => !value);
    }

    const filteredBlogs = useMemo(() => {
        if (selectedCategory === 'All') return postsServer;
        return postsServer.filter(post => {
            const matchesCategory = selectedCategory ? post.category.name.toLowerCase() === selectedCategory.toLowerCase() : true;
            return matchesCategory;
        });
    }, [postsServer, selectedCategory]);

    return (
        <>
            <Search
                setSearch={setSearch}
                seeSearch={seeSearch}
                postsServer={postsServer}
            />
            <Disclosure
                as="section"
                aria-labelledby="filter-heading"
                className="grid items-center border-t border-b border-zinc-50/30"
            >
                {/* menu sort */}
                <h2
                    className="text-sm font-medium tracking-tight text-zinc-50 absolute self-center left-10 flex items-center gap-2 group cursor-pointer"
                    onClick={handleSearch}
                >
                    <MagnifyingGlassIcon
                        className="size-5 group-hover:text-white group-hover:scale-125 transition-all duration-500 ease-in-out"
                    />
                    Press to search posts
                </h2>
                <div className="col-start-1 row-start-1 py-4">
                    <div className="mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
                        <Menu as="div" className="relative inline-block">
                            <Select
                                value={selectedCategory}
                                name="status"
                                aria-label="Project status"
                                className="absolute -top-3.5 right-0 z-10 w-40 origin-top-right rounded-md  ring-1 shadow-2xl ring-white/50 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in px-2 py-1"
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                {/* <div className="py-1"> */}
                                <option value="All">All</option>
                                {categoriesServer.map((option) => (
                                    // <option >
                                    <option
                                        key={option.name}
                                        value={option.name}
                                        className={classNames(
                                            'block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden text-gray-500 hover:text-gray-900',
                                        )}
                                    >
                                        {option.name}
                                    </option>
                                    // </option>
                                ))}
                                {/* </div> */}
                            </Select>
                        </Menu>
                    </div>
                </div>
                {/* menu sort end */}
            </Disclosure>
            {/* Blog grid */}
            <section aria-labelledby="blogs-heading" className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
                <h2 id="blogs-heading" className="sr-only">
                    Blogs
                </h2>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {
                        postsServer.length === 0
                            ?
                            <div className='w-dvw max-w-xl lg:max-w-6xl mx-auto'>
                                <div className="text-center flex items-center justify-center flex-col">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mx-auto size-12 text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                    </svg>
                                    <h3 className="mt-2 text-sm font-semibold text-white">Dont have any blog</h3>
                                    <p className="mt-1 text-sm text-gray-400">Get started by creating a new blog.</p>
                                </div>
                            </div>
                            :
                            <>
                                {
                                    filteredBlogs.length === 0
                                        ?
                                        <div className='w-dvw h-[25rem] flex items-center justify-center lg:max-w-6xl mx-auto flex-col'>
                                            <img
                                                src="/svg/17.svg"
                                                alt="" className="size-24"
                                            />
                                            <p className='text-white text-2xl mt-10 italic'>there are no matches 😅</p>
                                        </div>
                                        :
                                        filteredBlogs.map((post) => (
                                            <div key={post.id}>
                                                <BLog post={post} />
                                            </div>
                                        ))
                                }
                            </>
                    }
                </div>
            </section>
        </>
    )
}

export default PostGrid