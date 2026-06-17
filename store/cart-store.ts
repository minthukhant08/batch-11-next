import { create } from "zustand"

type CartStore = {
    cartItems: Product[],
    addToCart: (product: Product) => void
}

export const useCartStore = create<CartStore>()((set)=> ({
    cartItems: [],
    addToCart: (product: Product) => set((state)=>({ cartItems: [...state.cartItems, product]}))
}))

