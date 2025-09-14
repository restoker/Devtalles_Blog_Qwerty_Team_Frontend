import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().min(3, { message: "The minimum length is 1" }),
    lastName: z.string().min(3, { message: "The minimum length is 1" }),
    email: z.email({ message: "Enter a valid email" }),
    password: z.string()
        .min(5, { message: "Password is too short" })
        .max(50, { message: "Password is too long" }),
});