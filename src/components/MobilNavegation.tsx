'use client';
import { Popover } from '@headlessui/react';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Avatar, AvatarFallback } from './ui/avatar';
import Image from 'next/image';
import { LogIn, LogOut, Plus, Settings, TruckIcon } from 'lucide-react';
import { signOut } from 'next-auth/react';
import { Session } from 'next-auth';

const MobilNavegation = ({ session }: { session: Session }) => {
    // const handleOpen = searchStore(state => state.handleOpen);
    const router = useRouter();
    const path = usePathname();
    // const { data: session } = useSession();
    // const [sesion, setSesion] = useState(false);
    // const [usuario, setUsuario] = useState<Session | undefined>(undefined);
    // const [user, setUser] = useState<Session | undefined>(undefined);
    // useEffect(() => {
    // (async () => {
    // const session = await useSession();
    // const session = await getSessionUser();
    // console.log(session);
    // if (session.data?.user) {
    //     setUser(session.data.user);
    //     // setSesion(session.ok);
    // }
    // })()
    // }, []);
    // const toggleSearchBar = () => {
    //     handleOpen();
    // }
    return (
        <>
            <div className="relative flex justify-end">
                <Popover
                    as="header"
                    className="bg-transparent shadow-sm data-[open]:fixed data-[open]:inset-0 data-[open]:z-40 data-[open]:overflow-y-auto lg:static lg:overflow-y-visible data-[open]:lg:static data-[open]:lg:overflow-y-visible"
                >
                    <div className="relative flex justify-between gap-3 lg:gap-8 rounded-full">
                        <div className="hidden lg:flex lg:justify-end xl:col-span-4">
                            {/* Profile dropdown */}
                            <DropdownMenu>
                                <DropdownMenuTrigger className="rounded-full">
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
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-60 p-3" align="end">
                                    {session?.user ? <div className="mb-4 p-4 flex flex-col gap-1 items-center rounded-lg  bg-primary/10">
                                        {session?.user.image && (
                                            <Image
                                                src={session.user.image}
                                                alt={session.user.name!}
                                                className="rounded-full"
                                                width={36}
                                                height={36}
                                            />
                                        )}
                                        <p className="font-bold text-xs">{session?.user?.name}</p>
                                        <span className="text-xs font-medium text-secondary-foreground">
                                            {session?.user?.email}
                                        </span>
                                    </div> : null}
                                    <DropdownMenuSeparator />

                                    {session?.user ? <DropdownMenuItem
                                        onClick={() => router.push("/dashboard/orders")}
                                        className="group py-2 font-medium cursor-pointer "
                                    >
                                        <Plus
                                            size={14}
                                            className="mr-3 group-hover:scale-125 transition-all duration-300 ease-in-out"
                                        />{" "}
                                        New Blog
                                    </DropdownMenuItem> : null}

                                    {session?.user ? <DropdownMenuItem
                                        onClick={() => router.push("/dashboard/settings")}
                                        className="group py-2 font-medium cursor-pointer  ease-in-out "
                                    >
                                        <Settings
                                            size={14}
                                            className="mr-3 group-hover:rotate-180 transition-all duration-300 ease-in-out"
                                        />
                                        Settings
                                    </DropdownMenuItem> : null}

                                    {session?.user
                                        ?
                                        <DropdownMenuItem
                                            onClick={() => signOut()}
                                            className="py-2 group focus:bg-destructive/30 font-medium cursor-pointer "
                                        >
                                            <LogOut
                                                size={14}
                                                className="mr-3  group-hover:scale-75 transition-all duration-300 ease-in-out"
                                            />
                                            Sign out
                                        </DropdownMenuItem>
                                        :
                                        <DropdownMenuItem
                                            onClick={() => router.push('/auth/login')}
                                            className="py-2 group focus:bg-amber-500/50 font-medium cursor-pointer "
                                        >
                                            <LogIn
                                                size={14}
                                                className="mr-3  group-hover:scale-75 transition-all duration-300 ease-in-out"
                                            />
                                            Log In
                                        </DropdownMenuItem>
                                    }
                                </DropdownMenuContent>
                            </DropdownMenu>
                            {/* <UserMenu usuario={usuario} sesion={sesion} /> */}
                        </div>
                    </div>
                </Popover >
            </div >
        </>
    )
}

export default MobilNavegation