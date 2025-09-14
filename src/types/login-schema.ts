import z from "zod";

export const loginSchema = z.object({
    email: z.email({ message: "Enter a valid email" }),
    password: z.string()
        .min(5, { message: "Password is too short" })
        .max(50, { message: "Password is too long" }),
});