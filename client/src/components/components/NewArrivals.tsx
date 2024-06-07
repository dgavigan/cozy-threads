import React from 'react';
import { useProducts } from 'src/queries/products';
import { ProductListItem } from './ProductListItem';

export const NewArrivals: React.FC = () => {
  const { data = [], error, isLoading } = useProducts();
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900">New Arrivals</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : error instanceof Error ? (
        <div>An error occurred: {error.message}</div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {data.slice(0, 6).map((product) => (
            <ProductListItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
