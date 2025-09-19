'use client';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import { commentSchema } from '@/types/comment-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import z from 'zod';
// import { motion } from 'framer-motion'
import { useAction } from 'next-safe-action/hooks';
import { createCommentAction } from '@/server/actions/create-comment-action';
import { toast } from 'sonner';

const FormComment = ({ postId, tokenAuth }: { postId: string; tokenAuth: string }) => {
    const form = useForm<z.infer<typeof commentSchema>>({
        resolver: zodResolver(commentSchema),
        defaultValues: {
            postId: postId || '',
            content: '',
        }
    });

    const { execute, status } = useAction(createCommentAction, {
        onSuccess: ({ data }) => {
            if (data.ok) {
                toast.success(data.msg, {
                    duration: 2000,
                });
                form.reset();
            }
            if (!data.ok) {
                toast.error(data.msg, {
                    duration: 2000,
                });
            }
        }
    })
    const onSubmit = (data: z.infer<typeof commentSchema>) => {
        // console.log(data);
        // form.reset()
        const dataToSend = { ...data, tokenAuth };
        if (!postId) return;
        // console.log(data);
        execute(dataToSend);
    }
    return (
        <>
            <Popover>
                <PopoverTrigger asChild>
                    <div className="w-full">
                        <Button className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium hover:bg-purple-600 sm:w-auto lg:w-full text-black hover:text-white" variant={'secondary'}>Leave a comment</Button>
                    </div>
                </PopoverTrigger>
                <PopoverContent className="inline-flex items-center justify-center rounded-md border border-gray-300/30 px-8 py-2 font-medium">
                    {/* <div className="fixed inset-0 bg-zinc-900 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in" /> */}

                    <Form {...form}>
                        <form className="space-y-4 relative z-10" onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="content"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Leave your Comment</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                className="resize-none"
                                                placeholder="Leave your Comment"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <Button
                                className="w-full bg-purple-600 cursor-pointer"
                                type="submit"
                                disabled={status === 'executing'}
                            >
                                {status === 'executing' ? 'Adding Comment...' : 'Add Comment'}
                            </Button>
                        </form>
                    </Form>
                </PopoverContent>
            </Popover>
        </>
    )
}

export default FormComment