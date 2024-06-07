import { calculateCartItemTotal, formatCurrency, getOrderTotal } from './utils';
import { CartItem } from 'src/types';

const mockCartItems: CartItem[] = [
  {
    id: '1',
    title: 'Product 1',
    price: 10,
    quantity: 2,
    description: 'bangarang',
    imageUrl: '/foo/bar',
  },
  {
    id: '2',
    title: 'Product 2',
    price: 20,
    quantity: 1,
    description: 'bangarang',
    imageUrl: '/foo/bar',
  },
  {
    id: '3',
    title: 'Product 3',
    price: 5,
    quantity: 4,
    description: 'bangarang',
    imageUrl: '/foo/bar',
  },
];

describe('Utils Functions', () => {
  test('calculateCartItemTotal should return the correct total', () => {
    const total = calculateCartItemTotal(mockCartItems);
    expect(total).toBe(60); // (10*2) + (20*1) + (5*4) = 60
  });

  test('formatCurrency should return a formatted currency string', () => {
    const formattedCurrency = formatCurrency(1000);
    expect(formattedCurrency).toBe('$1,000.00');
  });

  test('getOrderTotal should return the correct order total', () => {
    const orderTotal = getOrderTotal(mockCartItems);
    expect(orderTotal).toEqual({
      subtotal: 60,
      tax: 4.8, // 60 * 0.08
      shipping: 0,
      total: 64.8, // 60 + 4.8
    });
  });
});
