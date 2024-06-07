import React from 'react';
import { useAtom } from 'jotai';
import { cartAtom } from 'src/store/cartAtom';
import { getOrderTotal } from 'src/utils';

const OrderSummary: React.FC<{}> = () => {
  const [cart] = useAtom(cartAtom);

  const { shipping, total, tax, subtotal } = getOrderTotal(cart);

  return (
    <div className="p-4 border border-gray-200 rounded bg-secondary text-white">
      <h2 className="text-xl font-semibold mb-2 text-primary">Order Summary</h2>
      {cart.map((item, index) => (
        <div key={index} className="flex justify-between mb-2">
          <span>
            {item.quantity} x {item.title} ({item.size}, {item.color})
          </span>
          <span>${item.price.toFixed(2)}</span>
        </div>
      ))}
      <div className="border-t border-gray-200 mb-2"></div>
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Shipping</span>
        <span>{shipping > 0 ? `$${shipping.toFixed(2)}` : 'FREE'}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Tax</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <div className="border-t border-gray-200 mb-2"></div>
      <div className="flex justify-between mb-2">
        <span className="font-semibold">Order total</span>
        <span className="font-semibold">${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrderSummary;
