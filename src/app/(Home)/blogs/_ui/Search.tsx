'use client';

import { Dispatch, FC, SetStateAction, useState } from 'react';
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions, Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { FolderIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { Post } from '@/interfaces';
import { useRouter } from 'next/navigation';

interface Props {
    setSearch: Dispatch<SetStateAction<boolean>>,
    seeSearch: boolean,
    children?: React.ReactNode,
    postsServer: Post[]
}

const Search: FC<Props> = ({ setSearch, seeSearch, postsServer }) => {
    const [query, setQuery] = useState('');
    const router = useRouter()

    const filteredProjects =
        query === ''
            ? []
            : postsServer.filter((post) => {
                const lowerCaseQuery = query.toLowerCase();
                return post.title.toLowerCase().includes(lowerCaseQuery);
            });

    return (
        <Dialog
            className="relative z-50"
            open={seeSearch}
            onClose={() => {
                setSearch(false)
                setQuery('')
            }}
        >
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-zinc-50/5 backdrop-blur-xl transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
                <DialogPanel
                    transition
                    className="mx-auto max-w-2xl transform divide-y divide-white/10 overflow-hidden rounded-xl bg-zinc-900/80 shadow-2xl outline-1 -outline-offset-1 outline-white/10 backdrop-blur-sm backdrop-filter transition-all data-closed:scale-95 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                >
                    <Combobox
                        onChange={(post: Post) => {
                            setSearch(false)
                            setQuery('')
                            router.push(`/blogs/${post.id}`)
                        }}
                    >
                        <div className="grid grid-cols-1">
                            <ComboboxInput
                                autoFocus
                                className="col-start-1 row-start-1 h-12 w-full bg-transparent pr-4 pl-11 text-base text-white outline-hidden placeholder:text-gray-400 sm:text-sm"
                                placeholder="Search..."
                                onChange={(event) => setQuery(event.target.value)}
                                onBlur={() => setQuery('')}
                            />
                            <MagnifyingGlassIcon
                                className="pointer-events-none col-start-1 row-start-1 ml-4 size-5 self-center text-gray-500"
                                aria-hidden="true"
                            />
                        </div>

                        {(query === '' || filteredProjects.length > 0) && (
                            <ComboboxOptions static as="ul" className="max-h-80 scroll-py-2 divide-y divide-white/10 overflow-y-auto">
                                <li className="p-2">
                                    {query === '' && <h2 className="mt-4 mb-2 px-3 text-xs font-semibold text-white">Advice</h2>}
                                    <ul className="text-sm text-gray-300">
                                        {(query === '' ? [{ id: 1, title: 'Search by title' }] : filteredProjects).map((project) => (
                                            <ComboboxOption
                                                as="li"
                                                key={project.id}
                                                value={project}
                                                className="group flex cursor-default items-center rounded-md px-3 py-2 select-none data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                                            >
                                                <PaperAirplaneIcon className="size-6 animate-pulse" />
                                                <span className="ml-3 flex-auto truncate">{project.title}</span>
                                                <span className="ml-3 hidden flex-none text-gray-400 group-data-focus:inline">go to...</span>
                                            </ComboboxOption>
                                        ))}
                                    </ul>
                                </li>

                            </ComboboxOptions>
                        )}

                        {query !== '' && filteredProjects.length === 0 && (
                            <div className="px-6 py-14 text-center sm:px-14">
                                <FolderIcon className="mx-auto size-6 text-gray-500" aria-hidden="true" />
                                <p className="mt-4 text-sm text-white">
                                    We couldn't find any blogs with that title. Please try again.
                                </p>
                            </div>
                        )}
                    </Combobox>
                </DialogPanel>
            </div>
        </Dialog>
    )
}

export default Search