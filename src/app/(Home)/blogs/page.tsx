import { Post } from '@/interfaces'
import { auth } from '@/server/auth'
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react'
import { AcademicCapIcon, ChevronDownIcon, FunnelIcon, PlusIcon, StarIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import BLog from './_ui/BLog'

const filters = {
    price: [
        { value: '0', label: '$0 - $25', checked: false },
        { value: '25', label: '$25 - $50', checked: false },
        { value: '50', label: '$50 - $75', checked: false },
        { value: '75', label: '$75+', checked: false },
    ],
    color: [
        { value: 'white', label: 'White', checked: false },
        { value: 'beige', label: 'Beige', checked: false },
        { value: 'blue', label: 'Blue', checked: true },
        { value: 'brown', label: 'Brown', checked: false },
        { value: 'green', label: 'Green', checked: false },
        { value: 'purple', label: 'Purple', checked: false },
    ],
    size: [
        { value: 'xs', label: 'XS', checked: false },
        { value: 's', label: 'S', checked: true },
        { value: 'm', label: 'M', checked: false },
        { value: 'l', label: 'L', checked: false },
        { value: 'xl', label: 'XL', checked: false },
        { value: '2xl', label: '2XL', checked: false },
    ],
    category: [
        { value: 'all-new-arrivals', label: 'All New Arrivals', checked: false },
        { value: 'tees', label: 'Tees', checked: false },
        { value: 'objects', label: 'Objects', checked: false },
        { value: 'sweatshirts', label: 'Sweatshirts', checked: false },
        { value: 'pants-and-shorts', label: 'Pants & Shorts', checked: false },
    ],
}
const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]
const posts = [
    {
        id: 1,
        title: 'El Poder de los Componentes en React',
        href: '/blogs/componentes-react',
        description:
            'Aprende a pensar en componentes reutilizables y a construir interfaces de usuario complejas de manera declarativa y eficiente con la librería más popular.',
        imageUrl:
            'https://i.pinimg.com/1200x/cb/a0/b8/cba0b89d2bf2d96a1ed26edb5849f804.jpg',
        date: 'Mar 26, 2025',
        datetime: '2020-03-16',
        category: { title: 'React', href: '#' },
        author: {
            name: 'Alex Rivera',
            role: 'Full Stack Developer',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 2,
        title: 'Docker: Contenedores para un Desarrollo Consistente',
        href: '/blogs/docker-blog',
        description: 'Descubre cómo Docker simplifica el desarrollo y despliegue de aplicaciones empaquetándolas en contenedores ligeros y portátiles.',
        imageUrl:
            'https://i.pinimg.com/1200x/3c/d2/6f/3cd26f91557248ed05f4626f8e7bdfde.jpg',
        date: 'Mar 26, 2025',
        datetime: '2020-03-16',
        category: { title: 'DevOps', href: '#' },
        author: {
            name: 'Juan Suasnavas',
            role: 'Devops Engineer',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 3,
        title: 'JavaScript Moderno: Más Allá de ES6',
        href: '/blogs/javascript-moderno',
        description: 'Explora las características más recientes de JavaScript que están cambiando la forma en que escribimos código para la web, desde el encadenamiento opcional hasta BigInt.',
        imageUrl:
            'https://i.pinimg.com/1200x/b4/d5/e3/b4d5e3a47472d0a6b2606dd065cb0f93.jpg',
        date: 'Mar 26, 2025',
        datetime: '2020-03-16',
        category: { title: 'JavaScript', href: '#' },
        author: {
            name: 'Milena Quitama',
            role: 'Web Designer',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 4,
        title: 'Bases de Datos SQL vs. NoSQL: ¿Cuál elegir?',
        href: '/blogs/sql-vs-nosql',
        description: 'Entiende las diferencias clave, ventajas y casos de uso de las bases de datos relacionales y no relacionales para tomar la mejor decisión para tu proyecto.',
        imageUrl:
            'https://i.pinimg.com/736x/bd/e1/a1/bde1a1f4653019057400a1c025873407.jpg',
        date: 'Mar 26, 2025',
        datetime: '2020-03-16',
        category: { title: 'Database', href: '#' },
        author: {
            name: 'Carla Moreno',
            role: 'Software Engineer',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    }
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}
export default async function Blogs() {
    const session = await auth();
    // console.log(session);
    const blogs = await fetch(`${process.env.ADDRESS_SERVER}/api/posts`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session?.user?.tokenAuth}`,
        },
    });
    const blogsData = await blogs.json();
    console.log(blogsData);
    const postsServer = blogsData.data.posts as Post[];
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
                        <h2 id="filter-heading" className="sr-only">
                            Filters
                        </h2>
                        <div className="relative col-start-1 row-start-1 py-4">
                            <div className="mx-auto flex max-w-7xl divide-x divide-gray-100 px-4 text-sm sm:px-6 lg:px-8">

                            </div>
                        </div>
                        {/* <DisclosurePanel className="border-t border-gray-200 py-10 bg-zinc-900">
                            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8">
                                <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
                                    <fieldset>
                                        <legend className="block font-medium">Price</legend>
                                        <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                                            {filters.price.map((option, optionIdx) => (
                                                <div key={option.value} className="flex gap-3">
                                                    <div className="flex h-5 shrink-0 items-center">
                                                        <div className="group grid size-4 grid-cols-1">
                                                            <input
                                                                defaultValue={option.value}
                                                                defaultChecked={option.checked}
                                                                id={`price-${optionIdx}`}
                                                                name="price[]"
                                                                type="checkbox"
                                                                className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-purple-600 checked:bg-purple-600 indeterminate:border-purple-600 indeterminate:bg-purple-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                            />
                                                            <svg
                                                                fill="none"
                                                                viewBox="0 0 14 14"
                                                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                            >
                                                                <path
                                                                    d="M3 8L6 11L11 3.5"
                                                                    strokeWidth={2}
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="opacity-0 group-has-checked:opacity-100"
                                                                />
                                                                <path
                                                                    d="M3 7H11"
                                                                    strokeWidth={2}
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="opacity-0 group-has-indeterminate:opacity-100"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <label htmlFor={`price-${optionIdx}`} className="text-base text-gray-200 sm:text-sm">
                                                        {option.label}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <legend className="block font-medium">Color</legend>
                                        <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                                            {filters.color.map((option, optionIdx) => (
                                                <div key={option.value} className="flex gap-3">
                                                    <div className="flex h-5 shrink-0 items-center">
                                                        <div className="group grid size-4 grid-cols-1">
                                                            <input
                                                                defaultValue={option.value}
                                                                defaultChecked={option.checked}
                                                                id={`color-${optionIdx}`}
                                                                name="color[]"
                                                                type="checkbox"
                                                                className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-purple-600 checked:bg-purple-600 indeterminate:border-purple-600 indeterminate:bg-purple-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                            />
                                                            <svg
                                                                fill="none"
                                                                viewBox="0 0 14 14"
                                                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                            >
                                                                <path
                                                                    d="M3 8L6 11L11 3.5"
                                                                    strokeWidth={2}
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="opacity-0 group-has-checked:opacity-100"
                                                                />
                                                                <path
                                                                    d="M3 7H11"
                                                                    strokeWidth={2}
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="opacity-0 group-has-indeterminate:opacity-100"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <label htmlFor={`color-${optionIdx}`} className="text-base text-gray-200 sm:text-sm">
                                                        {option.label}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </fieldset>
                                </div>
                                <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
                                    <fieldset>
                                        <legend className="block font-medium">Size</legend>
                                        <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                                            {filters.size.map((option, optionIdx) => (
                                                <div key={option.value} className="flex gap-3">
                                                    <div className="flex h-5 shrink-0 items-center">
                                                        <div className="group grid size-4 grid-cols-1">
                                                            <input
                                                                defaultValue={option.value}
                                                                defaultChecked={option.checked}
                                                                id={`size-${optionIdx}`}
                                                                name="size[]"
                                                                type="checkbox"
                                                                className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-purple-600 checked:bg-purple-600 indeterminate:border-purple-600 indeterminate:bg-purple-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                            />
                                                            <svg
                                                                fill="none"
                                                                viewBox="0 0 14 14"
                                                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                            >
                                                                <path
                                                                    d="M3 8L6 11L11 3.5"
                                                                    strokeWidth={2}
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="opacity-0 group-has-checked:opacity-100"
                                                                />
                                                                <path
                                                                    d="M3 7H11"
                                                                    strokeWidth={2}
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="opacity-0 group-has-indeterminate:opacity-100"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <label htmlFor={`size-${optionIdx}`} className="text-base text-gray-200 sm:text-sm">
                                                        {option.label}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <legend className="block font-medium">Category</legend>
                                        <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                                            {filters.category.map((option, optionIdx) => (
                                                <div key={option.value} className="flex gap-3">
                                                    <div className="flex h-5 shrink-0 items-center">
                                                        <div className="group grid size-4 grid-cols-1">
                                                            <input
                                                                defaultValue={option.value}
                                                                defaultChecked={option.checked}
                                                                id={`category-${optionIdx}`}
                                                                name="category[]"
                                                                type="checkbox"
                                                                className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-purple-600 checked:bg-purple-600 indeterminate:border-purple-600 indeterminate:bg-purple-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                            />
                                                            <svg
                                                                fill="none"
                                                                viewBox="0 0 14 14"
                                                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                            >
                                                                <path
                                                                    d="M3 8L6 11L11 3.5"
                                                                    strokeWidth={2}
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="opacity-0 group-has-checked:opacity-100"
                                                                />
                                                                <path
                                                                    d="M3 7H11"
                                                                    strokeWidth={2}
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="opacity-0 group-has-indeterminate:opacity-100"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <label htmlFor={`category-${optionIdx}`} className="text-base text-gray-200 sm:text-sm">
                                                        {option.label}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </DisclosurePanel> */}
                        {/* menu sort */}
                        <div className="col-start-1 row-start-1 py-4">
                            <div className="mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
                                <Menu as="div" className="relative inline-block">
                                    <div className="flex">
                                        <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-100 hover:text-purple-600 ring-0 outline-none cursor-pointer">
                                            Sort
                                            <ChevronDownIcon
                                                aria-hidden="true"
                                                className="-mr-1 ml-1 size-5 shrink-0 text-gray-100 group-hover:text-purple-600"
                                            />
                                        </MenuButton>
                                    </div>
                                    <MenuItems
                                        transition
                                        className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white ring-1 shadow-2xl ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                    >
                                        <div className="py-1">
                                            {sortOptions.map((option) => (
                                                <MenuItem key={option.name}>
                                                    <a
                                                        href={option.href}
                                                        className={classNames(
                                                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                            'block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden',
                                                        )}
                                                    >
                                                        {option.name}
                                                    </a>
                                                </MenuItem>
                                            ))}
                                        </div>
                                    </MenuItems>
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
                                            {/* <svg
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                                className="mx-auto size-12 text-gray-500"
                                            >
                                                <path
                                                    d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                                                    strokeWidth={2}
                                                    vectorEffect="non-scaling-stroke"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mx-auto size-12 text-gray-500">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                            </svg>
                                            <h3 className="mt-2 text-sm font-semibold text-white">Dont have any blog</h3>
                                            <p className="mt-1 text-sm text-gray-400">Get started by creating a new blog.</p>
                                            {/* <div className="mt-6">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                                >
                                                    <PlusIcon aria-hidden="true" className="mr-1.5 -ml-0.5 size-5" />
                                                    New Blog
                                                </button>
                                            </div> */}
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