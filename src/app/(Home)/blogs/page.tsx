import { CategoriesBlog, Post } from '@/interfaces'
import { auth } from '@/server/auth'
import { PlusIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import PostGrid from './_ui/PostGrid';
import Pagination from './_ui/Pagination';


export default async function Blogs({ searchParams }: { searchParams: { page: string } }) {
    const session = await auth();
    const pagina = (await searchParams).page;
    // const skip = (pagina - 1) * 9;
    let page = pagina ? Number(pagina) : 1;
    if (isNaN(Number(pagina))) page = 1;
    const categoriesPromise = await fetch(`${process.env.ADDRESS_SERVER}/api/categories`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session?.user?.tokenAuth}`,
        },
    });

    const blogsPromise = await fetch(`${process.env.ADDRESS_SERVER}/api/posts?skip=${(page - 1) * 9}&limit=9`, {
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
                            <Pagination totalPages={Math.ceil(blogs.data.total / 9)} />
                            : null
                    }
                </div>
            </div>
        </>
    )
}