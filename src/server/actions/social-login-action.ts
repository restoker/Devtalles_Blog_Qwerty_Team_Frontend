'use server';

import { auth } from "@/server/auth";
import { actionClient } from "@/types/safe-action";
import z from "zod";

export const socialDiscordLoginAction = actionClient
    .inputSchema(z.object({
        type: z.string(),
    }))
    .action(async ({ parsedInput: { type }, ctx: { } }) => {
        const url = process.env.ADDRESS_SERVER;
        try {
            const response = await fetch(`${url}/api/auth/discord/login`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            // const data = await response.json();
            const responseCallback = await response.status;
            const urlCallback = await response.url;
            await fetch(`${url}/api/auth/discord/callback`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (responseCallback !== 200) return {
                ok: false,
                msg: 'Server error 😢'
            }
            // console.log({ urlCallback });


            // if (!data.ok) {
            //     return {
            //         ok: false,
            //         msg: 'Register user failed 😢' //inser emoji 
            //     }
            // }

            return {
                ok: true,
                msg: 'User registered successfully 😊'
            }
        } catch (e) {
            // console.log(e);
            return {
                ok: false,
                msg: 'Server error 😢'
            }
        }
    })