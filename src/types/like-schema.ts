import z from "zod";

export const likeSchema = z.object({
    postId: z.string(),
    tokenAuth: z.string(),
    userId: z.string(),
})