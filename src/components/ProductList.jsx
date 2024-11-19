import React, { useEffect, useState } from 'react'
import { productUrl } from '../helper';
import ProductCard from './ProductCard';

const ProductList = ({loading,products}) => {
  return (
    <>
      <div className="product-list-container p-4">
        {/* Loading state */}
        {loading ? (
          <div className="text-center text-xl font-semibold text-gray-600">
            Loading products...
          </div>
        ) : (
          <>
            {/* Display products */}
            {products.length > 0 ? (
              <div className="flex flex-wrap gap-6 justify-center">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center text-xl font-semibold text-gray-600">
                No Products Available
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ProductList;
