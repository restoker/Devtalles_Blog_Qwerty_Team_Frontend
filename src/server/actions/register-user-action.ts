'use server';

import { registerSchema } from "@/types/register-schema";
import { actionClient } from "@/types/safe-action";

export interface RegisterResponse {
    ok: boolean;
    msg: string;
    data?: Data;
}

export interface Data {
    id: number;
    name: string;
    lastname: string;
    email: string;
    role: string;
    image: string | null;
    description: string | null;
    position: string | null;
    stack: string | null;
}


export const registerUserAction = actionClient
    .inputSchema(registerSchema)
    .action(async ({ parsedInput: { name, lastname, email, password }, ctx: { } }) => {
        const sanitizedEmail = email.trim().toLowerCase();
        const url = process.env.ADDRESS_SERVER;
        try {
            const user = await fetch(`${url}/api/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, lastname, email: sanitizedEmail, password })
            });
            const data: RegisterResponse = await user.json();

            if (!data.ok) {
                return {
                    ok: false,
                    msg: 'Register user failed 😢' //inser emoji 
                }
            }

            return {
                ok: true,
                msg: 'User registered successfully 😊'
            }
        } catch (e) {
            return {
                ok: false,
                msg: 'Server error 😢'
            }
        }
    })