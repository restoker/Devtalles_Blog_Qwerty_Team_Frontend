import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from 'next-auth/providers/github';
import Discord from 'next-auth/providers/discord';

export const { handlers, auth, signIn, signOut, unstable_update } = NextAuth({
    providers: [
        Credentials({
            name: 'Credentials',
        }),
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        Discord({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
        }),
    ]
})