'use server';

import { loginSchema } from "@/types/login-schema";
import { actionClient } from "@/types/safe-action";
import { signIn } from "../auth";
import { CredentialsSignin } from "next-auth";

export const loginWithEmailAndPasswordAction = actionClient
    .inputSchema(loginSchema)
    .action(async ({ parsedInput: { email, password }, ctx: { } }) => {
        try {
            const sanitizedEmail = email.trim().toLowerCase();
            const url = process.env.ADDRESS_SERVER;
            const user = await fetch(`${url}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: sanitizedEmail, password })
            });
            const data = await user.json();
            // console.log(data);
            // console.log(data.hasOwnProperty("ok"));
            if (!data.ok) {
                return {
                    ok: false,
                    msg: data.msg
                }
            }

            const usuario = await signIn('credentials', {
                ...{ email, password },
                redirect: false
            })
            // console.log(usuario);
            // const usuario = await signIn('credentials', {
            //     ...{ email, password },
            //     redirect: false
            // })

            return {
                ok: true,
                msg: 'Wellcome back',
            }
        } catch (e) {
            console.log(e as CredentialsSignin);
            return {
                ok: false,
                msg: 'Error al iniciar sesión'
            }
        }
    })