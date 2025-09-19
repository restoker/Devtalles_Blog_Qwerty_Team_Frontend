import z from "zod";

export const newBlogSchema = z.object({
    tokenAuth: z.optional(z.string()),
    title: z.string().min(3, { message: "The minimum length is 1" }),
    resume: z.string().min(3, { message: "The minimum length is 1" }),
    content: z.string().min(3, { message: "The minimum length is 1" }),
    cover: z.string(),
    tags: z.array(z.string()).min(1, { message: "The minimum length is 1" }),
    categories: z.string(),
});