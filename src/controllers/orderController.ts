import type { Request, Response } from "express";
import { createOrder } from "../services/orderService.js";

export async function checkout(req: Request, res: Response) {
    try {
        const { userId, items } = req.body;

        const order = await createOrder(userId, items);

        return res.status(201).json({
            success: true,
            order
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Checkout failed"
        });
    }
}
