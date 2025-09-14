'use server';

import { loginSchema } from "@/types/login-schema";
import { actionClient } from "@/types/safe-action";

export const loginWithEmailAndPasswordAction = actionClient
    .inputSchema(loginSchema)
    .action(async ({ parsedInput: { email, password }, ctx: { } }) => {
        console.log(email, password);
    })