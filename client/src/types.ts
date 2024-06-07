export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  sizes?: string[];
  colors?: string[];
}

export interface CartItem extends Product {
  quantity: number;
  size?: string | null;
  color?: string | null;
}

export interface OrderTotal {
  subtotal: number;
  tax: number;
  total: number;
  shipping: number;
}

export interface ContactInfo {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export interface ShippingAddress {
  address: string;
  state: string;
  city: string;
  zipcode: string;
}

export interface OrderSummary {
  orderId?: number;
  date?: string;
  total: number;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  tax: number;
}
