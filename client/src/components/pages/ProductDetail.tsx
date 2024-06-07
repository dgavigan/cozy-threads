import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { cartAtom } from 'src/store/cartAtom';
import { useProduct } from 'src/queries/products';

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [cart, setCart] = useAtom(cartAtom);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { data: product, isLoading, error } = useProduct(productId || '');

  const handleAddToCart = () => {
    if (product?.sizes && !selectedSize) {
      setErrorMessage('Please select a size.');
      return;
    }

    if (product?.colors && !selectedColor) {
      setErrorMessage('Please select a color.');
      return;
    }

    setErrorMessage(null);

    if (product) {
      setCart([
        ...cart,
        {
          ...product,
          quantity,
          size: selectedSize,
          color: selectedColor,
        },
      ]);
      navigate('/cart');
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <img
          src={product?.imageUrl}
          alt={product?.title}
          className="w-full md:w-1/2 object-cover"
        />
        <div className="md:ml-4 flex-1">
          <h2 className="text-3xl font-bold mb-2 font-serif text-secondary">
            {product?.title}
          </h2>
          <p className="text-lg mb-4 font-sans text-primary">
            ${product?.price.toFixed(2)}
          </p>
          <p className="mb-4 font-sans text-gray-700">{product?.description}</p>
          {product?.sizes && (
            <div className="mb-4">
              <label className="block mb-2 font-sans">Size:</label>
              <select
                value={selectedSize || ''}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="border p-2 rounded w-full"
              >
                <option value="" disabled>
                  Select size
                </option>
                {product.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          )}
          {product?.colors && (
            <div className="mb-4">
              <label className="block mb-2 font-sans">Color:</label>
              <select
                value={selectedColor || ''}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="border p-2 rounded w-full"
              >
                <option value="" disabled>
                  Select color
                </option>
                {product.colors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="flex items-center mb-4">
            <label className="block mr-2 font-sans">Quantity:</label>
            <input
              type="number"
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-16 border rounded p-2"
            />
          </div>
          {errorMessage && (
            <div className="mb-4 text-red-600">{errorMessage}</div>
          )}
          <button
            onClick={handleAddToCart}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-neutral"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
