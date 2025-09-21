import { create } from 'zustand'

interface AlertState {
    open: boolean;
    idToDelete: string | undefined;
    openModal: (id: string) => void;
    closeModal: () => void;
    handleOpen: () => void;
}

export const modalStore = create<AlertState>()((set) => ({
    open: false,
    idToDelete: undefined,
    // increase: (by) => set((state) => ({ bears: state.bears + by })),
    openModal: (id) => set(() => ({ open: true, idToDelete: id })),
    handleOpen: () => set((state) => ({ open: !(state.open), idToDelete: !state.open ? undefined : state.idToDelete })),
    closeModal: () => set(() => ({ open: false, idToDelete: undefined })),
}))