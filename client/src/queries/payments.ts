import { useMutation } from 'react-query';
import type { CartItem, ShippingAddress, ContactInfo } from 'src/types';
import { API_BASE_URL } from '../constants';

const createPaymentIntent = async ({
  cartItems,
  contactInfo,
  shippingAddress,
}: {
  cartItems: CartItem[];
  contactInfo: ContactInfo;
  shippingAddress: ShippingAddress;
}) => {
  const response = await fetch(`${API_BASE_URL}/api/create-payment-intent`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ items: cartItems, contactInfo, shippingAddress }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

export const useCreatePaymentIntent = () => {
  return useMutation(createPaymentIntent);
};
