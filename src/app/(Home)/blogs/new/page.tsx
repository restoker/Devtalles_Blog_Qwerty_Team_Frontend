import { redirect } from "next/navigation";
import FormNewBlog from "./_ui/FormNewBlog";
import { auth } from "@/server/auth";

export default async function NewBlog() {
    const session = await auth();
    if (!session) {
        return redirect('/login');
    }
    return (
        <>
            <div className="mx-auto max-w-5xl pt-16 lg:flex lg:gap-x-16 lg:px-8">
                <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">

                    <div className="mx-auto max-w-2xl space-y-10 lg:mx-0 lg:max-w-none">
                        <h1 className="text-2xl font-bold tracking-tight text-white">New Blog</h1>

                        <FormNewBlog />
                    </div>
                </main>
            </div>
        </>
    )
}