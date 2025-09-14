import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const blogPosts = [
    {
        id: 1,
        title: 'Vel expedita assumenda placeat aut nisi optio voluptates quas',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        author: {
            name: 'Michael Foster',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 2,
        title: 'Libero quisquam voluptatibus nam iusto qui dolor',
        href: '#',
        description: 'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
        imageUrl:
            'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
        date: 'Mar 10, 2020',
        datetime: '2020-03-10',
        author: {
            name: 'Lindsay Walton',
            imageUrl:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 3,
        title: 'Asperiores mollitia et dolor autem modi sit eius quisquam',
        href: '#',
        description:
            'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.',
        imageUrl:
            'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        author: {
            name: 'Tom Cook',
            imageUrl:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
]

const Blogs = () => {
    return (
        <>
            <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className='flex justify-between items-center'>
                        <div>
                            <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-3xl">Blogs:</h2>
                            <p className="mt-2 text-lg/8 text-gray-400">Here are some of our blogs.</p>
                        </div>
                        <Link href="/blogs" className="text-white/50 flex items-center gap-1 group cursor-pointer">
                            View all blogs
                            {/* right arrow */}
                            <ChevronRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-all duration-300" />
                        </Link>
                    </div>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {blogPosts.map((post) => (
                        <article
                            key={post.id}
                            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-800 px-8 pt-80 pb-8 sm:pt-48 lg:pt-80"
                        >
                            <img alt="" src={post.imageUrl} className="absolute inset-0 -z-10 size-full object-cover" />
                            <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/80 via-black/40" />
                            <div className="absolute inset-0 -z-10 rounded-2xl inset-ring inset-ring-white/10" />

                            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                                <time dateTime={post.datetime} className="mr-8">
                                    {post.date}
                                </time>
                                <div className="-ml-4 flex items-center gap-x-4">
                                    <svg viewBox="0 0 2 2" className="-ml-0.5 size-0.5 flex-none fill-gray-300/50">
                                        <circle r={1} cx={1} cy={1} />
                                    </svg>
                                    <div className="flex gap-x-2.5">
                                        <img alt="" src={post.author.imageUrl} className="size-6 flex-none rounded-full bg-gray-800/10" />
                                        {post.author.name}
                                    </div>
                                </div>
                            </div>
                            <h3 className="mt-3 text-lg/6 font-semibold text-white">
                                <a href={post.href}>
                                    <span className="absolute inset-0" />
                                    {post.title}
                                </a>
                            </h3>
                        </article>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Blogs