export interface ProductQueryParams {
    limit?: number | 10;
    offset?: number | 0;
    name?: string;
    minPrice?: number;
    maxPrice?: number;
    category?: string | undefined;
    availability: boolean[] ;
    rating: boolean[] ;
}

export interface User {
    email: string;
    username?: string | undefined;
    password: string;
    orders?: Order[] | undefined;
}

export interface Product {
    id: number;
    name: string;
    sku?: string;
    trademark?: string;
    width?: number;
    length?: number;
    height?: number;
    manufacturer?: string;
    propertyName?: string;
    propertyValue?: string;
    rating?: number;
    price: number;
    stock: number | 0;
    image?: string;
    category: string;
    orderItems?: OrderItem[] | undefined;
}

export interface Order {
    id: number;
    orderDate: string
    contactPhoneNumber: string;
    address: string;
    user: User;
    orderItems: OrderItem[];
    totalPrice?: number | undefined;
    IsOrdered: boolean;
}

export interface OrderItem {
    id: number;
    order?: Order | undefined;
    product?: Product | undefined;
    quantity: number;
    totalPrice: number;
}

export interface OrderDto {
    orderDate: string;
    email: string;
    orderItems: OrderItemDto[];
}

export interface OrderItemDto {
    productId: number;
    quantity: number;
}

export interface updateORderItemDto {
    email: string;
    productId: number;
    quantity: number;
}
export interface Products {
    products: Product[];
    total: number
}