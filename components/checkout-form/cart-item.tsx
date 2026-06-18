'use client'

import { useCartStore } from "@/store/cart-store"

type CartItemProps = {
    item: Product
}

export default function CartItem ({ item } : CartItemProps) {
    const { removeFromCart, addToCart, deleteFromCart } = useCartStore();
    return (
        <div className="border border-slate-300 rounded-2xl p-2 w-full flex justify-between">
            <span>{item.name}</span>
            <div className="flex gap-2">
                <button onClick={()=> addToCart(item)} className="bg-slate-600 text-white border rounded-xl p-1 cursor-pointer">+</button>
                    {item.qty}
                <button onClick={() => removeFromCart(item)} className="bg-slate-600 text-white border rounded-xl p-1 cursor-pointer">-</button>
                <button onClick={()=> deleteFromCart(item)} className="bg-slate-600 text-white border rounded-xl p-1 cursor-pointer">delete</button>
            </div>
        </div>
    )
}