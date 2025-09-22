'use server';

import { likeSchema } from "@/types/like-schema";
import { actionClient } from "@/types/safe-action";
import { revalidatePath } from "next/cache";

export const createLikeAction = actionClient
    .inputSchema(likeSchema)
    .action(async ({ parsedInput: { postId, tokenAuth } }) => {
        try {

            const serverUrl = process.env.ADDRESS_SERVER;
            const response = await fetch(`${serverUrl}/api/likes/toggle`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tokenAuth}`,
                },
                body: JSON.stringify({ post_id: postId }),
            });
            const data = await response.json();
            if (!response.ok) {
                return {
                    ok: false,
                    msg: data.msg,
                }
            }
            revalidatePath(`/blogs/${postId}`);
            return {
                ok: true,
                msg: 'Like created successfully',
            }
        } catch (e) {
            return {
                ok: false,
                msg: e instanceof Error ? e.message : 'Something went wrong',
            }
        }

    })
