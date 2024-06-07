import { useQuery } from 'react-query';
import { Product } from '../types';
import { API_BASE_URL } from '../constants';

const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_BASE_URL}/api/products`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const fetchProduct = async (productId: string): Promise<Product> => {
  const response = await fetch(`${API_BASE_URL}/api/products/${productId}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const useProducts = () => {
  return useQuery<Product[]>('products', fetchProducts);
};

export const useProduct = (productId: string) => {
  return useQuery<Product>(
    ['product', productId],
    () => fetchProduct(productId),
    {
      enabled: !!productId, // Only run the query if productId is defined
    }
  );
};
