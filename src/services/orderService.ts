import type { CartItem, Order } from "../types/order.js";
import { reserveStock } from "./inventoryService.js";

let nextOrderId = 1;

export async function createOrder(
    userId: number,
    items: CartItem[]
): Promise<Order> {

    let total = 0;

    for (const item of items) {
        const reserved = await reserveStock(
            item.productId,
            item.quantity
        );

        if (!reserved) {
            return {
                id: nextOrderId++,
                userId,
                items,
                total,
                status: "failed"
            };
        }

        total += item.unitPrice * item.quantity;
    }

    return {
        id: nextOrderId++,
        userId,
        items,
        total,
        status: "created"
    };
}
