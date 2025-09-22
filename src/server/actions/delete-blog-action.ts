'use server'

import { actionClient } from "@/types/safe-action"
import { revalidatePath } from "next/cache"
import z from "zod"

export const deleteBlogAction = actionClient
    .inputSchema(z.object({
        id: z.string(),
        tokenAuth: z.string(),
    }))
    .action(async ({ parsedInput: { id, tokenAuth } }) => {
        try {
            const url = process.env.ADDRESS_SERVER;

            const response = await fetch(`${url}/api/posts/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tokenAuth}`,
                },
            });

            if (!response.ok) {
                return {
                    ok: false,
                    msg: 'Error when deleting blog'
                }
            }

            revalidatePath('/admin/blogs')
            return {
                ok: true,
                msg: 'Blog deleted successfully'
            }
        } catch (e) {
            return {
                ok: false,
                msg: 'Error on Server when deleting blog'
            }
        }
    })

