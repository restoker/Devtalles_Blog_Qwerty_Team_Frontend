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
import { motion } from 'framer-motion'

const FormComment = ({ postId }: { postId: number }) => {
    const form = useForm<z.infer<typeof commentSchema>>({
        resolver: zodResolver(commentSchema),
        defaultValues: {
            postId: postId.toString() || '',
            comment: '',
        }
    });

    const onSubmit = (data: z.infer<typeof commentSchema>) => {
        // console.log(data);
        // form.reset()
        if (!postId) return;
        // execute({
        //     comment: data.comment,
        //     rating: data.rating,
        //     productId: productId,
        // });
    }
    return (
        <>
            <Popover>
                <PopoverTrigger asChild>
                    <div className="w-full">
                        <Button className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium hover:bg-gray-50 sm:w-auto lg:w-full text-black" variant={'secondary'}>Leave a review</Button>
                    </div>
                </PopoverTrigger>
                <PopoverContent className="inline-flex items-center justify-center rounded-md border border-gray-300/30 px-8 py-2 font-medium">
                    {/* <div className="fixed inset-0 bg-zinc-900 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in" /> */}

                    <Form {...form}>
                        <form className="space-y-4 relative z-10" onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="comment"
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
                            {/* <FormField
                                control={form.control}
                                name="comment"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Leave your Rating</FormLabel>
                                        <FormControl>
                                            <Input type="hidden" placeholder="Star Rating" {...field} />
                                        </FormControl>
                                        <div className="flex">
                                            {[1, 2, 3, 4, 5].map((value) => {
                                                return (
                                                    <motion.div
                                                        key={value} className="relative cursor-pointer"
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.8 }}
                                                    >
                                                        <Star
                                                            key={value}
                                                            onClick={() => {
                                                                form.setValue("rating", value, {
                                                                    shouldValidate: true,
                                                                })
                                                            }}
                                                            className={cn(
                                                                "text-yellow-400 bg-transparent transition-all duration-300 ease-in-out",
                                                                form.getValues("rating") >= value
                                                                    ? "fill-yellow-500"
                                                                    : "text-yellow-500"
                                                            )}
                                                        />
                                                    </motion.div>
                                                );
                                            })}
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /> */}
                            <Button
                                className="w-full bg-purple-600 cursor-pointer"
                                type="submit"
                            // disabled={status === 'executing'}
                            >
                                {/* {status === 'executing' ? 'Adding Review...' : 'Add review'} */}
                                Add Comment
                            </Button>
                        </form>
                    </Form>
                </PopoverContent>
            </Popover>
        </>
    )
}

export default FormComment