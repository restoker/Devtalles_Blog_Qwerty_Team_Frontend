'use client';

import React from 'react'
import { Icons } from '@/components/icons';
import StarBorder from './star-border';
// import { useAction } from 'next-safe-action/hooks';
// import { socialDiscordLoginAction } from '@/server/actions/social-login-action';
import { signIn } from 'next-auth/react';


const SocialForm = () => {

    // const { execute } = useAction(socialDiscordLoginAction, {
    //     onSuccess: (data) => {
    //         console.log(data);
    //     },
    //     onError: (error) => {
    //         console.log(error);
    //     }
    // });

    // const handleSocialLogin = (type: string) => {
    //     execute({ type });
    // };

    return (
        <div className="grid grid-cols-3 gap-3">
            <StarBorder position="left">
                <Icons.google className="h-5 w-5 mx-auto" />
            </StarBorder>
            <StarBorder
                position="left"
                // onClick={() => handleSocialLogin('discord')}
                onClick={() => signIn('discord')}
            >
                <Icons.discord className="h-5 w-5 mx-auto" />
            </StarBorder>
            <StarBorder position="left">
                <Icons.linkedin className="h-5 w-5 mx-auto" />
            </StarBorder>
        </div>
    )
}

export default SocialForm