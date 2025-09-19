'use server';

import { commentSchema } from "@/types/comment-schema";
import { actionClient } from "@/types/safe-action";
import { revalidatePath } from "next/cache";

export const createCommentAction = actionClient
    .inputSchema(commentSchema)
    .action(async ({ parsedInput: { postId, content, tokenAuth } }) => {
        try {
            const url = `${process.env.ADDRESS_SERVER}/api/comments`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tokenAuth}`
                },
                body: JSON.stringify({ post_id: postId, content })
            });

            const data = await response.json();
            // console.log(data);
            if (!data.ok) {
                return {
                    ok: false,
                    msg: 'Failed creating comment'
                }
            }
            revalidatePath(`/blogs`);
            // revalidatePath(`/blogs/${postId}`);
            return {
                ok: true,
                msg: 'Comment created successfully'
            }
        } catch (e) {
            return {
                ok: false,
                msg: 'Failed on Server side when creating comment'
            }
        }
    })