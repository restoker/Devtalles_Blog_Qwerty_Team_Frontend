
'use client'

import { ChevronRightIcon } from '@heroicons/react/24/outline'
import React from 'react'

const team = [
    {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'Dries Vincent',
        role: 'Business Relations',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'Lindsay Walton',
        role: 'Front-end Developer',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'Courtney Henry',
        role: 'Designer',
        imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'Tom Cook',
        role: 'Director of Product',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'Whitney Francis',
        role: 'Copywriter',
        imageUrl:
            'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'Leonard Krasner',
        role: 'Senior Designer',
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'Floyd Miles',
        role: 'Principal Designer',
        imageUrl:
            'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'Emily Selman',
        role: 'VP, User Experience',
        imageUrl:
            'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'Kristin Watson',
        role: 'VP, Human Resources',
        imageUrl:
            'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'Emma Dorsey',
        role: 'Senior Developer',
        imageUrl:
            'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'Alicia Bell',
        role: 'Junior Copywriter',
        imageUrl:
            'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
]

const Team = () => {
    return (
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
            <div className="mx-auto max-w-7xl lg:mx-0">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-3xl">Our Devs</h2>
                        <p className="mt-6 text-lg/8 text-gray-400">
                            Here are some of our Devs.
                        </p>
                    </div>
                    <p className="text-white/50 flex items-center gap-1 group cursor-pointer">
                        View all Devs
                        {/* right arrow */}
                        <ChevronRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-all duration-300" />
                    </p>
                </div>
            </div>
            <ul
                role="list"
                className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
            >
                {team.map((person) => (
                    <li key={person.name}>
                        <img
                            alt=""
                            src={person.imageUrl}
                            className="mx-auto size-24 rounded-full outline-1 -outline-offset-1 outline-white/10"
                        />
                        <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-white">{person.name}</h3>
                        <p className="text-sm/6 text-gray-400">{person.role}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Team