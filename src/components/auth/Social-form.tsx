'use client';

import React from 'react'
import { Icons } from '@/components/icons';
import StarBorder from './star-border';
import { signIn } from 'next-auth/react';


const SocialForm = () => {

    return (
        <div className="grid grid-cols-3 gap-3">
            <StarBorder
                className='col-span-3'
                position="left"
                onClick={() => signIn('discord')}
            >
                <Icons.discord className="h-5 w-5 mx-auto" />
            </StarBorder>
        </div>
    )
}

export default SocialForm