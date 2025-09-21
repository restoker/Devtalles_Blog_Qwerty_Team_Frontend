import { CategoriesBlog, Post } from '@/interfaces'
import { auth } from '@/server/auth'
import {
    Disclosure,
    Menu,
    Select,
} from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import BLog from './_ui/BLog'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}
export default async function Blogs() {
    const session = await auth();
    // console.log(session);
    const categoriesPromise = await fetch(`${process.env.ADDRESS_SERVER}/api/categories`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session?.user?.tokenAuth}`,
        },
    });

    const blogsPromise = await fetch(`${process.env.ADDRESS_SERVER}/api/posts`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session?.user?.tokenAuth}`,
        },
    });

    const [categoriesData, blogsData] = await Promise.all([
        categoriesPromise,
        blogsPromise,
    ]);

    const blogs = await blogsData.json();
    const categories = await categoriesData.json();
    const postsServer = blogs.data.posts as Post[];
    const categoriesServer = categories.data.categories as CategoriesBlog[];
    // const postsServer = [1];
    return (
        <>
            <div className="bg-zinc-950 py-10">
                <div className="pb-24 relative">
                    <div className="px-4 py-16 sm:px-6 lg:px-8">
                        <h1 className="text-5xl font-bold tracking-tight text-zinc-50">Blogs</h1>
                    </div>
                    {
                        !session
                            ?
                            null
                            :
                            <div className='absolute top-16 right-10 rounded-full flex items-center'>
                                <Link href="/blogs/new" className="bg-purple-500/50 px-4 py-2 rounded-full flex gap-2 items-center hover:bg-purple-500/70 transition-colors cursor-pointer">
                                    <PlusIcon className="size-5" />
                                    <p className="text-sm/6 text-white hidden lg:block">new blog</p>
                                </Link>
                            </div>
                    }
                    {/* Filters */}
                    <Disclosure
                        as="section"
                        aria-labelledby="filter-heading"
                        className="grid items-center border-t border-b border-zinc-50/30"
                    >

                        {/* menu sort */}
                        <h2 id="filter-heading" className="text-xl font-medium tracking-tight text-zinc-50 absolute self-center left-1/2 translate-x-3/4">
                            Select Category:
                        </h2>
                        <div className="col-start-1 row-start-1 py-4">
                            <div className="mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
                                <Menu as="div" className="relative inline-block">
                                    <Select
                                        name="status" aria-label="Project status"
                                        className="absolute -top-3.5 right-0 z-10 w-40 origin-top-right rounded-md  ring-1 shadow-2xl ring-white/50 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in px-2 py-1"
                                    >
                                        {/* <div className="py-1"> */}
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
                                        {postsServer.map((post) => (
                                            <div key={post.id}>
                                                <BLog post={post} />
                                            </div>
                                        ))}
                                    </>
                            }
                        </div>
                    </section>
                    {/* Pagination */}
                    {
                        postsServer.length > 0
                            ?
                            <nav
                                aria-label="Pagination"
                                className="mx-auto mt-32 flex max-w-7xl justify-between px-4 text-sm font-medium text-gray-700 sm:px-6 lg:px-8"
                            >
                                <div className="min-w-0 flex-1">
                                    <a
                                        href="#"
                                        className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/25 focus:ring-offset-1 focus:ring-offset-purple-600 focus:outline-hidden"
                                    >
                                        Previous
                                    </a>
                                </div>
                                <div className="hidden space-x-2 sm:flex">
                                    {/* Current: "border-purple-600 ring-1 ring-purple-600", Default: "border-gray-300" */}
                                    <a
                                        href="#"
                                        className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/25 focus:ring-offset-1 focus:ring-offset-purple-600 focus:outline-hidden"
                                    >
                                        1
                                    </a>
                                    <a
                                        href="#"
                                        className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/25 focus:ring-offset-1 focus:ring-offset-purple-600 focus:outline-hidden"
                                    >
                                        2
                                    </a>
                                    <a
                                        href="#"
                                        className="inline-flex h-10 items-center rounded-md border border-purple-600 bg-white px-4 ring-1 ring-purple-600 hover:bg-gray-100 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/25 focus:ring-offset-1 focus:ring-offset-purple-600 focus:outline-hidden"
                                    >
                                        3
                                    </a>
                                    <span className="inline-flex h-10 items-center px-1.5 text-gray-500">...</span>
                                    <a
                                        href="#"
                                        className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/25 focus:ring-offset-1 focus:ring-offset-purple-600 focus:outline-hidden"
                                    >
                                        8
                                    </a>
                                    <a
                                        href="#"
                                        className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/25 focus:ring-offset-1 focus:ring-offset-purple-600 focus:outline-hidden"
                                    >
                                        9
                                    </a>
                                    <a
                                        href="#"
                                        className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/25 focus:ring-offset-1 focus:ring-offset-purple-600 focus:outline-hidden"
                                    >
                                        10
                                    </a>
                                </div>
                                <div className="flex min-w-0 flex-1 justify-end">
                                    <a
                                        href="#"
                                        className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/25 focus:ring-offset-1 focus:ring-offset-purple-600 focus:outline-hidden"
                                    >
                                        Next
                                    </a>
                                </div>
                            </nav>
                            : null
                    }
                </div>
            </div>
        </>
    )
}