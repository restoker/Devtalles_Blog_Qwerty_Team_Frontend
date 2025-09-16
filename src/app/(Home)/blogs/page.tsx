import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react'
import { ChevronDownIcon, FunnelIcon, StarIcon } from '@heroicons/react/24/outline'

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
        title: 'Boost your conversion rate',
        href: '/blogs/componentes-react',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            '/img/img1.webp',
        date: 'Mar 26, 2025',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Nombre del autor',
            role: 'Full Stack Developer',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 2,
        title: 'Boost your conversion rate',
        href: '/blogs/docker-blog',
        description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            '/img/img2.webp',
        date: 'Mar 26, 2025',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Nombre del autor',
            role: 'Devops Engineer',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 3,
        title: 'Boost your conversion rate',
        href: '/blogs/javascript-moderno',
        description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            '/img/img3.webp',
        date: 'Mar 26, 2025',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Nombre del autor',
            role: 'Designer',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 4,
        title: 'Boost your conversion rate',
        href: '/blogs/sql-vs-nosql',
        description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            '/img/img4.webp',
        date: 'Mar 26, 2025',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Nombre del autor',
            role: 'Designer',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    }
]

export default function Blogs() {
    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <>
            <div className="bg-zinc-950 py-10">
                <div className="pb-24">
                    <div className="px-4 py-16 text-center sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-50">Blogs</h1>
                    </div>
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
                                <div className="pr-6">
                                    <DisclosureButton className="group flex items-center font-medium text-gray-200 hover:text-purple-600">
                                        <FunnelIcon
                                            aria-hidden="true"
                                            className="mr-2 size-5 flex-none text-gray-100 group-hover:text-purple-600"
                                        />
                                        2 Filters
                                    </DisclosureButton>
                                </div>
                                <div className="pl-6">
                                    <button type="button" className="text-gray-100">
                                        Clear all
                                    </button>
                                </div>
                            </div>
                        </div>
                        <DisclosurePanel className="border-t border-gray-200 py-10 bg-zinc-900">
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
                        </DisclosurePanel>
                        {/* menu sort */}
                        <div className="col-start-1 row-start-1 py-4">
                            <div className="mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
                                <Menu as="div" className="relative inline-block">
                                    <div className="flex">
                                        <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-100 hover:text-purple-600">
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
                            {posts.map((post) => (
                                <article key={post.id} className="flex flex-col items-start justify-between bg-zinc-800 rounded-2xl">
                                    <div className="relative w-full">
                                        <img
                                            alt=""
                                            src={post.imageUrl}
                                            className="aspect-video w-full rounded-t-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
                                        />
                                        <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
                                    </div>
                                    <div className="max-w-xl px-2 pb-2">
                                        <div className="mt-8 flex items-center gap-x-4 text-xs">
                                            <time dateTime={post.datetime} className="text-gray-400">
                                                {post.date}
                                            </time>
                                            <a
                                                href={post.category.href}
                                                className="relative z-10 rounded-full px-3 py-1.5 font-medium bg-gray-50/5 text-white hover:bg-gray-100/20"
                                            >
                                                {post.category.title}
                                            </a>
                                        </div>
                                        <div className="group relative">
                                            <h3 className="mt-3 text-lg/6 font-semibold text-white group-hover:text-gray-100">
                                                <a href={post.href}>
                                                    <span className="absolute inset-0" />
                                                    {post.title}
                                                </a>
                                            </h3>
                                            <p className="mt-5 line-clamp-3 text-sm/6 text-gray-400">{post.description}</p>
                                        </div>
                                        <div className="relative mt-8 flex items-center gap-x-4">
                                            <img alt="" src={post.author.imageUrl} className="size-10 rounded-full bg-gray-100" />
                                            <div className="text-sm/6">
                                                <p className="font-semibold text-gray-300">
                                                    <a href={post.author.href}>
                                                        <span className="absolute inset-0" />
                                                        {post.author.name}
                                                    </a>
                                                </p>
                                                <p className="text-gray-400">{post.author.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                    {/* Pagination */}
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
                </div>
            </div>
        </>
    )
}