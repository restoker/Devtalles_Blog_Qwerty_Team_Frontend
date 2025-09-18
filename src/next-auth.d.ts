import { DefaultSession } from "next-auth";


export type ExtendUser = DefaultSession['user'] & {
    id: string;
    name: string;
    lastname: string;
    email: string;
    image: string;
    role: string | null;
}

declare module 'next-auth' {
    interface Session {
        user: ExtendUser
    }
}