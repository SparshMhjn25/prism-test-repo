import type { Product } from "../types/order.js";

const products: Product[] = [
    { id: 1, name: "Laptop", price: 75000, stock: 5 },
    { id: 2, name: "Mouse", price: 1000, stock: 20 },
    { id: 3, name: "Keyboard", price: 2500, stock: 10 }
];

export async function getProduct(productId: number) {
    return products.find(product => product.id === productId);
}

export async function updateStock(productId: number, quantity: number) {
    const product = products.find(product => product.id === productId);

    if (!product) return false;

    product.stock -= quantity;
    return true;
}
