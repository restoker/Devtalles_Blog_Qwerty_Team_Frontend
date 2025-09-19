'use server';

import { newBlogSchema } from "@/types/new-blog-schema";
import { actionClient } from "@/types/safe-action";
import { revalidatePath } from "next/cache";


export const createBlogAction = actionClient
    .inputSchema(newBlogSchema)
    .action(async ({ parsedInput: { title, resume, content, cover, tags, categories, tokenAuth }, ctx: { } }) => {
        console.log(tokenAuth);
        try {
            const url = process.env.ADDRESS_SERVER;
            console.log(url);
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
            // console.log(data);

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

        } catch (e) {
            console.log(e);
            return {
                ok: false,
                msg: 'Error creating blog',
            }
        }
    });