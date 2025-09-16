import z from "zod";

export const newBlogSchema = z.object({
    title: z.string().min(3, { message: "The minimum length is 1" }),
    description: z.string().min(3, { message: "The minimum length is 1" }),
    cover: z.string(),
    tags: z.array(z.string()).min(1, { message: "The minimum length is 1" }),
    categories: z.array(z.string()).min(1, { message: "The minimum length is 1" }),
});