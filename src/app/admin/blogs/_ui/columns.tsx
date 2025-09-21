"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { modalStore } from "@/store/alertStore";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

type PostColumn = {
    title: string;
    image: string;
    id: number;
    date: string;
}

export const columns: ColumnDef<PostColumn>[] = [
    {
        accessorKey: 'id',
        header: 'ID',
        cell: ({ row }) => {
            const idProduct = row.getValue('id') as string;
            return (
                <p className="line-clamp-1">{idProduct}</p>
            );
        }
    },
    {
        accessorKey: 'title',
        header: 'Title',
    },
    {
        accessorKey: 'image',
        header: 'Image',
        cell: ({ row }) => {
            const cellImage = row.getValue('image') as string;
            const cellTitle = row.getValue('title') as string;
            return (
                <div className="h-14 w-14">
                    <img src={cellImage} alt={cellTitle} className="rounde-lg h-14 w-14 object-cover" />
                </div>
            );
        }
    },
    {
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => {
            const blog = row.original;

            const openModal = modalStore(state => state.openModal);

            return (

                <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"} className="h-8 w-8 bg-transparent" size={'icon'}>
                            <MoreHorizontal className="h-4 w-4 cursor-pointer" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem
                            className="dark:focus:bg-purple-500 focus:bg-amber-500/50 cursor-pointer"
                        >
                            <Link href={`/blogs/new?id=${blog.id}`}>
                                Edit blog
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            className="dark:focus:bg-red-500 focus:bg-destructive/50 cursor-pointer"
                            onClick={() => openModal(blog.id.toString())}
                        >
                            Delete blog
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            )
        }
    }
]


// id: "actions",
// cell: ({ row }) => {
//     const payment = row.original

//     return (
//         <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" className="h-8 w-8 p-0">
//                     <span className="sr-only">Open menu</span>
//                     <MoreHorizontal className="h-4 w-4" />
//                 </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//                 <DropdownMenuLabel>Actions</DropdownMenuLabel>
//                 <DropdownMenuItem
//                     onClick={() => navigator.clipboard.writeText(payment.id)}
//                 >
//                     Copy payment ID
//                 </DropdownMenuItem>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>View customer</DropdownMenuItem>
//                 <DropdownMenuItem>View payment details</DropdownMenuItem>
//             </DropdownMenuContent>
//         </DropdownMenu>
//     )
// },