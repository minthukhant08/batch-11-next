'use server'

import { ordersAPI } from "@/api/orders"
import { Order } from "@/api/orders/type"

export const checkoutAction = async (order: Order) => {
    const res = await ordersAPI.submitOrder(order)
    return res.data
}