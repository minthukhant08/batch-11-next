import { create } from "zustand"
import { persist } from 'zustand/middleware'

type DialogStore = {
    isOpen : boolean,
    setOpen: (isOpen: boolean) => void
    selectProduct: Product | null,
    setSelectProduct: (product: Product) => void
}

export const useDialogStore = create<DialogStore>()(persist((set) => ({
    isOpen: false,
    selectProduct: null,
    setOpen: (isOpen) => set(()=>  {
        return { isOpen : isOpen}
    }),
    setSelectProduct: (product: Product) => set(() => {
        return { selectProduct : product }
    })
}),
    { name: 'dialog-store' },
),)

