import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import {
    ArrowPathIcon,
    ChartPieIcon,
    ChevronDownIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    PhoneIcon,
    PlayCircleIcon,
    SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import type { Session } from 'next-auth';
import { Avatar, AvatarFallback } from './ui/avatar';
import { LogOutIcon } from 'lucide-react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

const solutions = [
    { name: 'new Blog', description: 'Get a better understanding of your traffic', href: '/blogs/new', icon: CursorArrowRaysIcon },
    { name: 'Profile', description: 'Speak directly to your customers', href: '#', icon: FingerPrintIcon },
    { name: 'All Blogs', description: "Your customers' data will be safe and secure", href: '/blogs', icon: PlayCircleIcon },
    // { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    // { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]

const PopperMenuUser = ({ session }: { session: Session }) => {
    const user = session?.user;
    // console.log(user);
    return (
        <>
            <Popover className="relative">
                <PopoverButton className="inline-flex items-center text-sm/6 font-semibold rounded-full ring-0 cursor-pointer outline-0">
                    <Avatar className="w-8 h-8 rounded-full">
                        {session?.user.image && (
                            <img alt="" src={session?.user?.image} className="h-8 w-8 rounded-full" />
                        )}
                        {!session?.user.image && (
                            <AvatarFallback className="bg-transparent">
                                {/* <div className="font-bold">
                                                    {user?.user.name?.charAt(0).toUpperCase()}
                                                </div> */}
                                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-8 w-8 rounded-full object-cover" />
                            </AvatarFallback>
                        )}
                    </Avatar>

                </PopoverButton>

                <PopoverPanel
                    transition
                    className="absolute left-1/2 z-10 flex w-screen max-w-max -translate-x-[90%] bg-transparent backdrop-blur-lg px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                >
                    {({ close }) => (
                        <>
                            <div className="w-64 max-w-md flex-auto overflow-hidden rounded-3xl bg-zinc-800 text-sm/6 outline-1 -outline-offset-1 outline-white/10">
                                <div className="p-2 flex flex-col items-center">
                                    <p>{session?.user.name}</p>
                                    <p>{session?.user.email}</p>
                                </div>
                                <div className="p-4">
                                    {solutions.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex gap-x-6 rounded-lg hover:bg-white/10"
                                            onClick={() => close()}
                                        >
                                            <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700/20 group-hover:bg-gray-700 group">
                                                <item.icon aria-hidden="true" className="size-6 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
                                            </div>
                                            <div className='flex flex-col justify-center'>
                                                <Link href={item.href} className="font-semibold text-white group-hover:translate-x-1 transition-all duration-300 ease-in-out">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </Link>
                                                {/* <p className="mt-1 text-gray-400">{item.description}</p> */}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-1 divide-x divide-white/10 bg-gray-700/50 group">
                                    {/* {callsToAction.map((item) => ( */}
                                    <button
                                        // key={item.name}
                                        // href={item.href}
                                        className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-white hover:bg-gray-700/50 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
                                        onClick={() => signOut()}
                                    >
                                        <LogOutIcon aria-hidden="true" className="size-5 flex-none text-gray-500" />
                                        Logout
                                    </button>
                                    {/* ))} */}
                                </div>
                            </div>
                        </>
                    )}

                </PopoverPanel>
            </Popover>
        </>
    )
}

export default PopperMenuUser