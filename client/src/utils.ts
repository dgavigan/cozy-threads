import type { CartItem, OrderTotal } from 'src/types';

export const calculateCartItemTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const getOrderTotal = (items: CartItem[]): OrderTotal => {
  const subtotal = calculateCartItemTotal(items);
  const tax = subtotal * 0.08;
  const shipping = 0;

  return {
    subtotal,
    tax,
    shipping,
    total: subtotal + shipping + tax,
  };
};
