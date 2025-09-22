'use server';

import { newBlogSchema } from "@/types/new-blog-schema";
import { actionClient } from "@/types/safe-action";
import { revalidatePath } from "next/cache";


export const createBlogAction = actionClient
    .inputSchema(newBlogSchema)
    .action(async ({ parsedInput: { title, resume, content, cover, tags, categories, tokenAuth, id }, ctx: { } }) => {
        try {
            const url = process.env.ADDRESS_SERVER;
            if (id) {
                const dataToEdit = {
                    ...(title && { title }),
                    ...(resume && { description: resume }),
                    ...(content && { content }),
                    ...(cover && { images: [cover] }),
                    ...(tags && { tags }),
                    ...(categories && { category_id: categories.toString() }),
                }

                const response = await fetch(`${url}/api/posts/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${tokenAuth}`,
                    },
                    body: JSON.stringify(dataToEdit),
                });

                const data = await response.json();

                if (!data.ok) {
                    return {
                        ok: false,
                        msg: data.msg,
                    }
                }

                revalidatePath('/dashboard/blogs');
                return {
                    ok: true,
                    msg: 'Blog edited',
                }

            }

            if (!id) {
                const response = await fetch(`${url}/api/posts/`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${tokenAuth}`,
                    },
                    body: JSON.stringify({
                        title,
                        description: resume,
                        content,
                        images: [cover],
                        tags,
                        category_id: categories.toString(),
                    }),
                });

                const data = await response.json();

                if (!data.ok) {
                    return {
                        ok: false,
                        msg: data.msg,
                    }
                }

                revalidatePath('/blogs');
                return {
                    ok: true,
                    msg: 'Blog created',
                }
            }

            return {
                ok: true,
                msg: 'Blog created',
            }

        } catch (e) {
            return {
                ok: false,
                msg: 'Error creating blog',
            }
        }
    });