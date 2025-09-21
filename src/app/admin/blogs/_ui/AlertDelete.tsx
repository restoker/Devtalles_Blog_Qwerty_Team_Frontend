'use client'

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { CheckCircleIcon, ExclamationTriangleIcon, FaceFrownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { modalStore } from '@/store/alertStore';
import { useAction } from 'next-safe-action/hooks';
// import { deleteProductAction } from '@/server/actions/delete-product';
import { toast } from 'sonner';
import { deleteBlogAction } from '@/server/actions/delete-blog-action';
import { useSession } from 'next-auth/react';

const AlertDelete = () => {
    // const [open, setOpen] = useState(true);
    const { data: session } = useSession();
    const open = modalStore(state => state.open);
    const setOpen = modalStore(state => state.handleOpen);
    const closeModal = modalStore(state => state.closeModal);
    const idToDelete = modalStore(state => state.idToDelete);
    const { execute, status } = useAction(deleteBlogAction, {
        onSuccess: ({ data }) => {
            if (data) {
                if (data.ok) {
                    toast.success(data.msg, {
                        duration: 2000,
                        classNames: {
                            toast: 'text-white bg-lime-600',
                            closeButton: 'bg-lime-600 text-red-700'
                        },
                        closeButton: true,
                        position: 'top-right',
                        icon: <CheckCircleIcon className='animate-bounce' />,
                    });
                    // closeModal();
                }
                if (!data.ok) {
                    toast.error(data.msg, {
                        duration: 2000,
                        classNames: {
                            toast: 'text-white bg-lime-600',
                            closeButton: 'bg-lime-600 text-red-700'
                        },
                        closeButton: true,
                        position: 'top-right',
                        icon: <FaceFrownIcon className='animate-bounce' />,
                    });
                }
            }
        },
        onExecute: () => {
            toast.loading("Deleting Blog");
        }
    });

    const deleteProduct = () => {
        if (!idToDelete) return;
        if (!session) return;
        // console.log(idToDelete);
        execute({ id: idToDelete, tokenAuth: session.user.tokenAuth });
        closeModal();
    }

    return (
        <>
            <Dialog open={open} onClose={setOpen} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-zinc-100/10 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in backdrop-blur-lg"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-zinc-950/50 px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="rounded-md bg-white/10 text-red-400 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    <span className="sr-only">Close</span>
                                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                                </button>
                            </div>
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-red-600 animate-ping" />
                                </div>
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-100">
                                        Delete Blog
                                    </DialogTitle>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-300">
                                            Are you sure you want to delete the blog? The blog will be permanently removed from
                                            our servers forever. This action cannot be undone.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    onClick={deleteProduct}
                                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                >
                                    Delete Blog
                                </button>
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                >
                                    Cancel
                                </button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default AlertDelete;