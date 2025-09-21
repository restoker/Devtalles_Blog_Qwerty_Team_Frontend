import { auth } from "@/server/auth";
import AdminLayout from "../_ui/AdminLayout";
import { notFound } from "next/navigation";

export default async function UsersPage() {
    const session = await auth();
    const user = session?.user;
    if (!user) {
        return notFound();
    }
    if (user.role !== 'admin') {
        return notFound();
    }

    const url = process.env.ADDRESS_SERVER;
    const promise = fetch(`${url}/api/users`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.tokenAuth}`,
        }
    });
    const response = await promise;
    const data = await response.json();

    return (
        <>
            <AdminLayout>
                <h1>Users</h1>
            </AdminLayout>
        </>
    )
}