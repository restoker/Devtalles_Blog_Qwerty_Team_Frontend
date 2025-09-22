import { CategoriesBlog, Post } from '@/interfaces'
import { auth } from '@/server/auth'
import { PlusIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import PostGrid from './_ui/PostGrid';


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
                    <PostGrid categoriesServer={categoriesServer} postsServer={postsServer} />
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