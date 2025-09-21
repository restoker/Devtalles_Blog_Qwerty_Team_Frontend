import Link from "next/link";
import AdminLayout from "../_ui/AdminLayout";
import { auth } from "@/server/auth";
import { notFound } from "next/navigation";
import { Post } from "@/interfaces";
import { DataTable } from "./_ui/DataTable";
import { columns } from "./_ui/columns";

export default async function AdminBlogsPage() {
    const session = await auth();
    const user = session?.user;
    if (!user) {
        return notFound();
    }
    if (user.role !== 'admin') {
        return notFound();
    }
    const blogs = await fetch(`${process.env.ADDRESS_SERVER}/api/posts`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session?.user?.tokenAuth}`,
        },
    });
    const blogsData = await blogs.json();
    const postsServer = blogsData.data.posts as Post[];

    const dataTable = postsServer.map((post) => {
        // console.log(product.productVariant);
        // console.log(product);
        // const time = new Date(product.created!);
        // const realTime = time.toLocaleString('pe-PE', { timeZone: 'UTC', month: '2-digit', year: '2-digit', day: '2-digit' });
        // console.log(product.productVariant[0].variantImages);

        // const image = post.images[0];
        return {
            id: post.id,
            title: post.title,
            image: post.images[0] || '/img/img4.webp',
            date: post.created_at,
        };
    });
    return (
        <AdminLayout>
            <div className="h-dvh w-full">
                {/* <h1 className="text-white text-3xl py-5">Blogs</h1> */}

                <DataTable columns={columns} data={dataTable} />
            </div>
        </AdminLayout>
    )
}