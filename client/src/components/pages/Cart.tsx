import React from 'react';
import { useAtom } from 'jotai';
import { cartAtom } from '../../store/cartAtom';
import { useNavigate } from 'react-router-dom';
import { CartListItem } from '../components/CartListItem';
import { useProducts } from 'src/queries/products';
import { getOrderTotal } from 'src/utils';

export const Cart: React.FC = () => {
  const [cart, setCart] = useAtom(cartAtom);
  const navigate = useNavigate();

  const { data: products = [] } = useProducts();
  const { subtotal, total, tax } = getOrderTotal(cart);
  const shouldNotDisplayCart = !cart || !cart.length;

  const getProduct = (productId: string) => {
    return products?.find((product) => product.id === productId);
  };

  const handleRemove = (productId: string) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    setCart(
      cart.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">My Cart</h2>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          {shouldNotDisplayCart ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="bg-white p-4 shadow rounded-lg">
              {cart.map((item) => {
                const product = getProduct(item.id);
                return (
                  product && (
                    <CartListItem
                      key={item.id}
                      item={item}
                      onQuantityChange={handleQuantityChange}
                      onRemove={handleRemove}
                    />
                  )
                );
              })}
            </div>
          )}
        </div>
        <div className="w-full md:w-1/3 md:ml-4 mt-4 md:mt-0">
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Taxes</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg mb-4">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button
              disabled={shouldNotDisplayCart}
              onClick={() => navigate('/checkout-page')}
              className="bg-yellow-500 text-white p-2 rounded w-full"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
