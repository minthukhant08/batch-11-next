import { create } from "zustand"

type CartStore = {
    cartItems: Product[],
    lastAddedItemId: string | null,
    setLastAddedItemId: (id: string | null) => void,
    addToCart: (product: Product) => void
}

export const useCartStore = create<CartStore>()((set)=> ({
    cartItems: [],
    lastAddedItemId: null,
    setLastAddedItemId: (id: string | null) =>set(() => ({ lastAddedItemId: id }) ),
    addToCart: (product: Product) => set((state)=>({ cartItems: [...state.cartItems, product]}))
}))

