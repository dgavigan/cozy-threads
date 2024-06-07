import { useSetAtom } from 'jotai';
import { cartAtom } from './cartAtom';
import { contactInfoAtom, shippingAddressAtom } from './checkoutAtom';

export const useClearAtoms = () => {
  const setCart = useSetAtom(cartAtom);
  const setContactInfo = useSetAtom(contactInfoAtom);
  const setShippingAddress = useSetAtom(shippingAddressAtom);

  const clearAtoms = () => {
    setCart([]);
    setContactInfo({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
    });
    setShippingAddress({
      address: '',
      city: '',
      state: '',
      zipcode: '',
    });
  };

  return clearAtoms;
};
