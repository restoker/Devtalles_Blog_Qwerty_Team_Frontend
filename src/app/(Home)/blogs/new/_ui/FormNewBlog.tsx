'use client';

import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod';
import { newBlogSchema } from '@/types/new-blog-schema';
import { useSearchParams } from 'next/navigation';
import { ChevronDownIcon, PhotoIcon } from '@heroicons/react/24/outline';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import TipTap from './TipTap';

const FormNewBlog = () => {
    // const router = useRouter();
    const params = useSearchParams();
    const editMode = params.get('id');

    const form = useForm<z.infer<typeof newBlogSchema>>({
        resolver: zodResolver(newBlogSchema),
        defaultValues: {
            title: "",
            description: "",
            cover: "",
            tags: [],
            categories: [],
        },
        mode: "all",
    })

    function checkProduct() {
        throw new Error('Function not implemented.');
    }


    useEffect(() => {
        if (!editMode) return;
        if (editMode) {
            // TODO: get blog by id
            checkProduct();
        }
    }, [editMode]);


    function onSubmit(values: z.infer<typeof newBlogSchema>) {
        console.log(values);
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="space-y-12">
                        <div className="border-b border-white/10 pb-12">
                            <h2 className="text-base/7 font-semibold text-white">Primary information</h2>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <FormField
                                        control={form.control}
                                        name="title"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Title of publication</FormLabel>
                                                <FormControl>
                                                    <div className="flex items-center rounded-md bg-white/5 mt-2">
                                                        <Input
                                                            className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-3 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                                                            placeholder="P.e: How to become a millionaire in 1 day"
                                                            {...field}
                                                        />
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <p className="mt-3 text-sm/6 text-gray-400"> Set a title for your publication, create a original and interesting title for attract the attention of your readers. P.e: "How to become a millionaire in 1 day"</p>
                                </div>
                                <div className="sm:col-span-4">
                                    <FormField
                                        control={form.control}
                                        name="title"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Resume of publication</FormLabel>
                                                <FormControl>
                                                    <div className="flex items-center rounded-md bg-white/5 mt-2">
                                                        <Input
                                                            className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-3 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                                                            placeholder="P.e: How to become a millionaire in 1 day"
                                                            {...field}
                                                        />
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <p className="mt-3 text-sm/6 text-gray-400"> Set a resume of your publication, be short and interesting, be specific and clear.</p>
                                </div>
                                <div className="col-span-full">
                                    <FormField
                                        control={form.control}
                                        name="description"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="block text-sm/6 font-medium text-white"> Content of blog</FormLabel>
                                                <div className='mt-2'>
                                                    <TipTap value={field.value} setValue={form.setValue} />
                                                </div>
                                                <FormControl />
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <p className="mt-3 text-sm/6 text-gray-400">Write the content of your blog, will be displayed on your blog. this is it that your readers will read.</p>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="cover-photo" className="block text-sm/6 font-medium text-white">
                                        Cover Photo of publication
                                    </label>
                                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10">
                                        <div className="text-center">
                                            <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-600" />
                                            <div className="mt-4 flex text-sm/6 text-gray-400">
                                                <label
                                                    htmlFor="file-upload"
                                                    className="relative cursor-pointer rounded-md bg-transparent font-semibold text-indigo-400 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-500 hover:text-indigo-300"
                                                >
                                                    <span>Upload a file</span>
                                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs/5 text-gray-400">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    </div>
                                    <p className="mt-3 text-sm/6 text-gray-400">This is the first image that will be displayed on your publication. Choose a photo that will engage your users</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-white/10 pb-12">
                            <h2 className="text-base/7 font-semibold text-white">Tags and categories</h2>
                            <p className="mt-1 text-sm/6 text-gray-400">Add tags and categories to your blog.</p>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm/6 font-medium text-white">
                                        First name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="first-name"
                                            name="first-name"
                                            type="text"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="country" className="block text-sm/6 font-medium text-white">
                                        Category
                                    </label>
                                    <div className="mt-2 grid grid-cols-1">
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                        >
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>Mexico</option>
                                        </select>
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm/6 font-semibold text-white">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </Form>
        </>
    )
}

export default FormNewBlog