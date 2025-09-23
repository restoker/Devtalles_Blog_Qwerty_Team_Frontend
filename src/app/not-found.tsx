import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="relative isolate flex h-dvh flex-col items-center justify-center py-20 text-center sm:py-56">
            <img className="absolute top-0 object-cover object-center -z-10 w-full h-full blur-sm" src="https://cdn.cosmos.so/02be577a-e54d-46c2-ba2c-b43adac75ed1?format=jpeg" alt="" />
            <p className="text-9xl font-bold text-white mix-blend-difference">404</p>
            <h1 className="mt-2 text-3xl font-medium tracking-tight text-white mix-blend-difference">
                Page not found
            </h1>
            <p className="mt-2 text-lg text-gray-300">
                The page you are looking for doesn't exist or has been moved.
            </p>
            <Link href="/" className="mt-8 text-black hover:text-white hover:bg-purple-600 bg-white rounded-2xl px-4 py-2 flex items-center gap-2">
                <ArrowLeftIcon className="size-5" />
                Return to home
            </Link>
        </div>
    )
}