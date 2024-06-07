import React from 'react';
import { useProducts } from 'src/queries/products';
import { ProductListItem } from 'src/components/components/ProductListItem';

export const ProductList: React.FC = () => {
  const { data: products = [], isLoading, error } = useProducts();

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error)
    return <div>An error occurred: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductListItem key={`${product.id}-item`} product={product} />
      ))}
    </div>
  );
};
