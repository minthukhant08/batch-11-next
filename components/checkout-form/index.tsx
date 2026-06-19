'use client'

import { useCartStore } from "@/store/cart-store"
import CartItem from "./cart-item"

export default function CheckOutForm(){
    const { cartItems } = useCartStore()
    return (
        <div>
            {
                cartItems.map((item) => <CartItem key={item.id} item={item} /> )
            }
        </div>
    )
}   