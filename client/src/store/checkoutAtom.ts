import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import {
  ContactInfo,
  ShippingAddress as ShippingAddressType,
  OrderSummary as OrderSummaryType,
} from '../types';

export const contactInfoAtom = atomWithStorage<ContactInfo>('contactInfo', {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
});
export const shippingAddressAtom = atomWithStorage<ShippingAddressType>(
  'shippingAddress',
  {
    address: '',
    city: '',
    state: '',
    zipcode: '',
  }
);
export const orderSummaryAtom = atom<OrderSummaryType>({
  items: [],
  subtotal: 0,
  shipping: 0,
  tax: 0,
  total: 0,
});
