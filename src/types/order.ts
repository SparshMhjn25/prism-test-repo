export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
}

export interface CartItem {
    productId: number;
    quantity: number;
    unitPrice: number;
}

export interface Order {
    id: number;
    userId: number;
    items: CartItem[];
    total: number;
    status: "created" | "failed";
}
