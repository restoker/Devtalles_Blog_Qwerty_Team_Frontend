'use client';

import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod';
import { newBlogSchema } from '@/types/new-blog-schema';
import { useRouter, useSearchParams } from 'next/navigation';
import { CheckCircleIcon, ChevronDownIcon, PhotoIcon } from '@heroicons/react/24/outline';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import TipTap from './TipTap';
import { CategoriesBlog, TagsBlog } from '@/interfaces';
import { UploadButton } from '@/app/api/uploadthing/upload';
import { useAction } from 'next-safe-action/hooks';
import { createBlogAction } from '@/server/actions/create-blog-action';
import { MultiSelect } from '@/components/multi-select';
import clsx from 'clsx';
import { toast } from 'sonner';
import type { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import { getBlogAction } from '@/server/actions/gt-blog-action';


const FormNewBlog = ({ categories, tags, session }: { categories: CategoriesBlog[]; tags: TagsBlog[]; session: Session }) => {
    const router = useRouter();
    const [chargetBlog, setChargetBlog] = useState(false);
    const [coverUploading, setCoverUploading] = useState(false);
    const params = useSearchParams();
    const editMode = params.get('id');
    // console.log(categories);
    const form = useForm<z.infer<typeof newBlogSchema>>({
        resolver: zodResolver(newBlogSchema),
        defaultValues: {
            title: "",
            resume: "",
            content: "",
            cover: "",
            tags: [],
            categories: categories[0].id.toString(),
        },
        mode: "all",
    });

    const { execute, status } = useAction(createBlogAction, {
        onSuccess: ({ data }) => {
            if (data.ok) {
                toast.success(data.msg, {
                    classNames: {
                        toast: 'text-white bg-lime-600',
                        closeButton: 'bg-lime-600 text-red-700'
                    },
                    closeButton: true,
                    position: 'top-right',
                    // duration: Infinity,
                    icon: <CheckCircleIcon className='animate-bounce' />,
                    duration: 2000,
                });
                form.reset();
                router.push('/blogs');
            }

            if (!data.ok) {
                toast.error(data.msg, {
                    classNames: {
                        toast: 'text-white bg-red-500',
                        closeButton: 'bg-red-500 text-red-700'
                    },
                    closeButton: true,
                    position: 'top-right',
                    // duration: Infinity,
                    icon: <CheckCircleIcon className='animate-bounce' />,
                    duration: 2000,
                });
                if (data.msg === 'Token inválido') {
                    signOut({ callbackUrl: "/login" })
                }
            }
        }
    })

    // const categoriesWatch = form.watch('categories');
    // console.log(categoriesWatch);
    // console.log(form.formState.errors);
    // console.log(form.watch('cover'));
    async function checkBlog() {
        // console.log(editMode);
        if (editMode) {
            setChargetBlog(true);
            const { ok, data: blog, msg } = await getBlogAction(editMode);
            setChargetBlog(false);
            if (!ok) {
                toast.error(`${msg}`);
                router.push('/dashboard/products');
                return;
            }
            if (blog) {
                // console.log(blog);
                form.setValue('title', blog.title);
                form.setValue('resume', blog.description);
                form.setValue('content', blog.content);
                form.setValue('cover', blog.images[0]);
                form.setValue('tags', blog.tags.map((tag: TagsBlog) => tag.name));
                form.setValue('categories', blog.category.id);
                form.setValue('id', editMode);
            }
        }
    }
    // console.log(form.getValues());
    // console.log(form.watch('tags'));

    useEffect(() => {
        if (!editMode) return;
        if (editMode) {
            // TODO: get blog by id
            checkBlog();
        }
    }, [editMode]);


    function onSubmit(values: z.infer<typeof newBlogSchema>) {
        if (!session.user.tokenAuth) {
            return toast.error("You need to be logged in to create a blog");
            // TODO: redirect to login
        }
        const dataToSend = {
            ...values,
            tokenAuth: session.user.tokenAuth,
        }
        execute(dataToSend);
    }

    if (chargetBlog) {
        return (
            <p className="text-white text-center text-2xl">Charging the Blog 😝... </p>
        )
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
                                        name="resume"
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
                                        name="content"
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
                                <div className="col-span-full border border-white/25 rounded-2xl p-4 flex items-center flex-col">
                                    <FormLabel className="block text-sm/6 font-medium text-white">
                                        Cover Photo of publication
                                    </FormLabel>
                                    {/* <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10">
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
                                    <p className="mt-3 text-sm/6 text-gray-400">This is the first image that will be displayed on your publication. Choose a photo that will engage your users</p> */}
                                    {!form.getValues('cover') ? <img src="/svg/23.svg" className='size-48' alt="" /> : <img src={form.getValues('cover')} className='size-48' alt='user_image' />}
                                    <UploadButton
                                        className="scale-75 ut-button:ring-primary  ut-label:bg-red-50  ut-button:bg-amber-500  hover:ut-button:bg-amber-600 ut:button:transition-all ut-button:duration-500  ut-label:hidden ut-allowed-content:hidden"
                                        disabled={status === 'executing'}
                                        onUploadBegin={() => {
                                            setCoverUploading(true);
                                        }}
                                        onUploadError={(error) => {
                                            form.setError('cover', {
                                                type: 'validate',
                                                message: error.message,
                                            });
                                            setCoverUploading(false);
                                            return;
                                        }}
                                        onClientUploadComplete={(res) => {
                                            form.setValue('cover', res[0].ufsUrl);
                                            setCoverUploading(false);
                                            return;
                                        }}
                                        endpoint="avatarUploader"
                                        content={{
                                            button({ ready }) {
                                                if (ready) return <div>Press to upload cover</div>
                                                return <div className="text-white tetx-2xl absolute z-50 bg-black/50 w-full h-full flex items-center justify-center">Uploading...</div>
                                            },
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-white/10 pb-12">
                            <h2 className="text-base/7 font-semibold text-white">Tags and categories</h2>
                            <p className="mt-1 text-sm/6 text-gray-400">Add tags and categories to your blog.</p>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    {/* <label htmlFor="first-name" className="block text-sm/6 font-medium text-white">
                                        Tags
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="first-name"
                                            name="first-name"
                                            type="text"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                        />
                                    </div> */}
                                    <FormField
                                        control={form.control}
                                        name="tags"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Tags</FormLabel>
                                                <FormControl>
                                                    <div className=" mt-2">
                                                        <MultiSelect
                                                            {...field}
                                                            options={tags.map((tag) => ({ label: tag.name, value: tag.id.toString() }))}
                                                            value={field.value}
                                                            defaultValue={field.value}
                                                            onValueChange={field.onChange}
                                                            placeholder="Full width multi-select"
                                                            className="w-full"
                                                            maxCount={7}
                                                            variant={'inverted'}
                                                            animationConfig={{
                                                                badgeAnimation: "bounce",
                                                                popoverAnimation: "scale",
                                                                optionHoverAnimation: "glow",
                                                            }}
                                                        />
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="sm:col-span-3">
                                    {/* <label htmlFor="country" className="block text-sm/6 font-medium text-white">
                                        Category
                                    </label> */}
                                    <FormField
                                        control={form.control}
                                        name="categories"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="block text-sm/6 font-medium text-white"> Content of blog</FormLabel>
                                                <div className="mt-2 grid grid-cols-1">
                                                    <select
                                                        {...field}
                                                        value={field.value}
                                                        onBlur={field.onBlur}
                                                        id="category"
                                                        name="category"
                                                        autoComplete="country-name"
                                                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                                        onChange={(selectedOption) => field.onChange(selectedOption ? selectedOption.target.value : null)}
                                                    >
                                                        {categories.map((category) => (
                                                            <option
                                                                key={category.id}
                                                                value={category.id}
                                                            >
                                                                {category.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <ChevronDownIcon
                                                        aria-hidden="true"
                                                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                                                    />
                                                </div>
                                                <FormControl />
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm/6 font-semibold text-white">
                            Cancel
                        </button>
                        <button
                            disabled={status === 'executing' || Object.keys(form.formState.errors).length > 0}
                            type="submit"
                            className={clsx(
                                "rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 cursor-pointer",
                                status === 'executing' || Object.keys(form.formState.errors).length > 0 ? 'opacity-50 bg-gray-500 cursor-not-allowed' : 'opacity-100',
                                !form.formState.isDirty ? 'opacity-50 bg-gray-500 cursor-not-allowed' : 'opacity-100',
                            )}
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