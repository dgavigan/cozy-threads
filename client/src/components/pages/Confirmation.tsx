import React from 'react';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { contactInfoAtom, shippingAddressAtom } from 'src/store/checkoutAtom';
import { cartAtom } from 'src/store/cartAtom';
import { OrderSummary } from 'src/types';
import { formatCurrency, getOrderTotal } from 'src/utils';
import { useClearAtoms } from 'src/store/atomUtils';

const Confirmation: React.FC = () => {
  const [contactInfo] = useAtom(contactInfoAtom);
  const [shippingAddress] = useAtom(shippingAddressAtom);
  const [cart] = useAtom(cartAtom);
  const clearAtoms = useClearAtoms();
  const navigate = useNavigate();

  const { shipping, tax, total, subtotal } = getOrderTotal(cart);

  const orderSummary: OrderSummary = {
    items: cart,
    subtotal,
    shipping,
    tax,
    total,
    date: new Date().toLocaleDateString(),
    orderId: 123456789, // Example order ID
  };

  const handlePrint = (): void => {
    window.print();
  };

  const handleContinueShopping = (): void => {
    clearAtoms();
    navigate('/shop');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-primary">
          Payment Confirmation
        </h1>
        <p className="mb-6 text-lg">
          Thank you for your purchase, {contactInfo.firstName}!
        </p>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-primary">
            Order Summary
          </h2>
          <div className="border-t border-gray-200 pt-4">
            {orderSummary.items.map((item, index) => (
              <div key={index} className="flex justify-between mb-2">
                <span>
                  {item.quantity} x {item.title} ({item.size}, {item.color})
                </span>
                <span>{formatCurrency(item.price * item.quantity)}</span>
              </div>
            ))}
            <div className="flex justify-between font-bold text-lg mt-4">
              <span>Total</span>
              <span>{formatCurrency(orderSummary.total)}</span>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-primary">
            Shipping Information
          </h2>
          <p>
            {contactInfo.firstName} {contactInfo.lastName}
          </p>
          <p>{shippingAddress.address}</p>
          <p>{shippingAddress.city}</p>
          <p>{shippingAddress.zipcode}</p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-primary">
            Contact Information
          </h2>
          <p>{contactInfo.email}</p>
          <p>{contactInfo.phoneNumber}</p>
        </div>
        <div className="text-center">
          <p className="mb-4">Order Date: {orderSummary.date}</p>
          <p className="mb-4">Order ID: {orderSummary.orderId}</p>
        </div>
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <button
            onClick={handlePrint}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-neutral w-full"
          >
            Print Receipt
          </button>
          <button
            onClick={handleContinueShopping}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-neutral w-full"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
