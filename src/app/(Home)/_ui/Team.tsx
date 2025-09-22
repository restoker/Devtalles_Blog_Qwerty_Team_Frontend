
import { ChevronRightIcon } from '@heroicons/react/24/outline'

const team = [
    {
        name: 'Michael Foster',
        role: 'Dev',
        imageUrl:
            '/img/img8.webp',
    },
    {
        name: 'Dries Vincent',
        role: 'Dev',
        imageUrl:
            '/img/img4.webp',
    },
    {
        name: 'Lindsay Walton',
        role: 'Front-end',
        imageUrl:
            '/img/img2.webp',
    },
    {
        name: 'Courtney Henry',
        role: 'Dev',
        imageUrl:
            '/img/img6.webp',
    },
    {
        name: 'Tom Cook',
        role: 'Dev',
        imageUrl:
            '/img/img7.webp',
    },
    {
        name: 'Whitney Francis',
        role: 'Dev',
        imageUrl:
            '/img/img5.webp',
    },
    {
        name: 'Leonard Krasner',
        role: 'Senior Dev',
        imageUrl:
            '/img/img3.webp',
    },
    {
        name: 'Floyd Miles',
        role: 'Dev',
        imageUrl:
            '/img/img9.webp',
    },
    {
        name: 'Emily Selman',
        role: 'Dev',
        imageUrl:
            '/img/img1.webp',
    },
    {
        name: 'Kristin Watson',
        role: 'Dev',
        imageUrl:
            '/img/avatar.webp',
    },
    {
        name: 'Emma Dorsey',
        role: 'Dev',
        imageUrl:
            '/img/heart.gif',
    },
    {
        name: 'Alicia Bell',
        role: 'Dev',
        imageUrl:
            '/img/loader.gif',
    },
]

const Team = async () => {
    const users = await fetch(`${process.env.ADDRESS_SERVER}/api/users/dev/all`)
    const usersResponse = await users.json();
    // console.log(usersResponse);
    // console.log(usersData);
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