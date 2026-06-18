import { create } from "zustand"
import { persist } from 'zustand/middleware'

type CartStore = {
    cartItems: Product[],
    lastAddedItemId: string | null,
    setLastAddedItemId: (id: string | null) => void,
    addToCart: (product: Product) => void,
    removeFromCart: (product: Product) => void,
    deleteFromCart: (product: Product) => void,
}

export const useCartStore = create<CartStore>()(persist((set) => ({
    cartItems: [],
    lastAddedItemId: null,
    setLastAddedItemId: (id: string | null) => set(() => ({ lastAddedItemId: id })),
    addToCart: (product: Product) => set((state) => {
        let found = false;
        const newProducts = state.cartItems.map((item) => {
            if (item.id == product.id) {
                found = true
                item.qty ? item.qty++ : item.qty = 1
            }
            return item
        })

        if (found) {
            return { cartItems: newProducts }
        } else {
            return { cartItems: [...state.cartItems, { ...product, qty: 1 }] }
        }
    }),
    removeFromCart: (product: Product) => set((state) => {
        const newProducts: Product[] = []
        state.cartItems.map((item) => {
            if (item.id == product.id) {
                if (item.qty > 1) {
                    item.qty--
                    newProducts.push(item)
                }
            }
        })

        return { cartItems: newProducts }
    }),
    deleteFromCart: (product: Product) => set((state) => {
        const newProducts = state.cartItems.filter((item) => item.id != product.id)
        return { cartItems: newProducts }
    })
}),
    { name: 'cart-store' },
),)

