import { getProduct, updateStock } from "../repositories/productRepository.js";

export async function reserveStock(productId: number, quantity: number) {
    const product = await getProduct(productId);

    if (!product || product.stock < quantity) {
        return false;
    }

    await updateStock(productId, quantity);

    return true;
}
