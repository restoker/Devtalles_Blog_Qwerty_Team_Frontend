'use server';

import { registerSchema } from "@/types/register-schema";
import { actionClient } from "@/types/safe-action";

export const registerUserAction = actionClient
    .inputSchema(registerSchema)
    .action(async ({ parsedInput: { name, lastName, email, password }, ctx: { } }) => {
        console.log(name, lastName, email, password);
    })