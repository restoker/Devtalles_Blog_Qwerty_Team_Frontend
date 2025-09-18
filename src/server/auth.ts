import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import gitHub from 'next-auth/providers/github';
import discord from 'next-auth/providers/discord';
import { loginSchema } from "@/types/login-schema";

export const { handlers, auth, signIn, signOut, unstable_update } = NextAuth({
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user, account }) {
            console.log({ token });
            console.log({ account });

            if (account && account.provider === 'discord') {
                console.log('Hay account :D');
                // token: 
                //   {
                //     name: 'restoker12',
                //     email: 'milthon.doom@gmail.com',
                //     picture: 'https://cdn.discordapp.com/embed/avatars/3.png',
                //     sub: '00081720-79fd-4a78-b6c5-3e617b5dd4de'
                //   }
                // acccount: 
                //   {
                //     token_type: 'bearer',
                //     access_token: 'MTQxNzY2Njc1ODA0NjY0NjMxNA.H95iEmVESVwEuejqp6SDoRp9bSXbZN',
                //     expires_in: 604800,
                //     refresh_token: 'flrF2JUh5tSWXr24klxC1el2EFweDq',
                //     scope: 'identify email',
                //     expires_at: 1758754551,
                //     provider: 'discord',
                //     type: 'oauth',
                //     providerAccountId: '450025853502488588'
                //   }


                const existsAccount = await fetch(`${process.env.ADDRESS_SERVER}/api/auth/discord/login`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (existsAccount.ok) {
                    const existsAccountJson = await existsAccount.json();
                    // token.isOauth = true;
                    token.name = existsAccountJson.user.name;
                    token.email = existsAccountJson.user.email;
                    token.role = existsAccountJson.user.role;
                    token.image = existsAccountJson.user.picture;
                    return token;
                }
                //    si no existe el usuario crear usuario en la base de datos
                const newAccount = await fetch(`${process.env.ADDRESS_SERVER}/api/auth/discord/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        token: token,
                        account: account,
                    }),
                });
                if (!newAccount.ok) return token;
                const existsAccountJson = await newAccount.json();
                // token.isOauth = true;
                token.name = existsAccountJson.user.name;
                token.email = existsAccountJson.user.email;
                token.role = existsAccountJson.user.role;
                token.image = existsAccountJson.user.picture;
                return token;
            }


            if (!token.sub) return token;
            // get user by id
            const existUser = await fetch(`${process.env.ADDRESS_SERVER}/api/user/${token.sub}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const existUserJson = await existUser.json();
            if (!existUserJson.ok) return token;
            token.name = existUserJson.data.name;
            token.lastname = existUserJson.data.lastname;
            token.email = existUserJson.data.email;
            token.role = existUserJson.data.role;
            token.image = existUserJson.data.image;

            return token;
        },
        async session({ session, user, token }) {

            if (session && token.sub) {
                session.user.id = token.sub;
            }
            if (session.user && token.role) {
                session.user.role = token.role as string;
            }

            if (session.user) {
                session.user.image = token.image as string;
                session.user.name = token.name as string;
                session.user.lastname = token.lastname as string;
                session.user.email = token.email as string;
            }
            return session;
        },
    },
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                const validatedFields = loginSchema.safeParse(credentials);
                if (validatedFields.success) {

                    const { email, password, } = validatedFields.data;

                    const user = await fetch(`${process.env.ADDRESS_SERVER}/api/auth/login`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            email,
                            password,
                        }),
                    });

                    const userJson = await user.json();

                    if (!userJson.ok) return null;

                    // if (!userJson.ok || !userJson.password) return null;
                    // if (!userJson.hasOwnProperty("ok")) return null;

                    // verificar el password
                    // const passCorrect = await bcrypt.compare(password, userJson.password);
                    // if (userJson.hasOwnProperty("user")) {
                    return userJson.data.user;
                    // }
                    // if (!passCorrect) return null;
                }
                return null;
            }
        }),
        gitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        discord({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
        }),
    ]
})