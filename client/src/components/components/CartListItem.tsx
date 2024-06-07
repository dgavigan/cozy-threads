import React from 'react';
import type { CartItem } from 'src/types';

interface CartListItemProps {
  item: CartItem;
  onQuantityChange: (productId: string, newQuantity: number) => void;
  onRemove: (productId: string) => void;
}

export const CartListItem: React.FC<CartListItemProps> = ({
  item,
  onQuantityChange,
  onRemove,
}) => {
  return (
    <div className="flex items-center border-b py-4">
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-24 h-24 object-cover mr-4"
      />
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg font-bold">{item.title}</h3>
          <p className="text-sm text-gray-500">
            Each: ${item.price.toFixed(2)}
          </p>
        </div>
        <div className="flex items-center mt-2">
          <label className="text-sm mr-2">Quantity:</label>
          <input
            type="number"
            value={item.quantity}
            min="1"
            onChange={(e) =>
              onQuantityChange(item.id, parseInt(e.target.value))
            }
            className="w-16 border rounded p-1 mr-2"
          />
          <button
            onClick={() => onRemove(item.id)}
            className="text-red-500 text-sm underline"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="text-lg font-bold">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
    </div>
  );
};
