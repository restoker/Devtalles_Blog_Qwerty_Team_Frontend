import z from "zod";


export const commentSchema = z.object({
    postId: z.string(),
    content: z.string().min(1, "Comment is required"),
    tokenAuth: z.optional(z.string()),
    // rating: z.number().min(1, "Rating is required").max(5, "Rating must be between 1 and 5"),
});