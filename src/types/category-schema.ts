import z from "zod";


export const categorySchema = z.object({
    name: z.string().min(3, { message: "The minimum length is 1" }),
    description: z.string().min(3, { message: "The minimum length is 1" }),
})