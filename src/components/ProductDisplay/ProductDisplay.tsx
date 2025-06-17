import React from 'react';
import type { ProductDisplayProps } from '../../types';

const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription = true,
  showStockStatus = true,
  onAddToCart,
  children,
}) => {
  return (
    <div className="border rounded-xl p-4 max-w-sm bg-white shadow-sm">
      <img
        src={product.imageUrl || 'https://via.placeholder.com/300x200'}
        alt={product.name}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-lg text-green-600 font-bold">${product.price.toFixed(2)}</p>

      {showDescription && <p className="text-sm mt-2 text-gray-700">{product.description}</p>}

      {showStockStatus && (
        <p className={`text-sm mt-1 ${product.inStock ? 'text-green-500' : 'text-red-500'}`}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </p>
      )}

      {children && <div className="mt-2">{children}</div>}

      {onAddToCart && product.inStock && (
        <button
          onClick={() => onAddToCart(product.id)}
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductDisplay;

/**
 * ProductDisplay Component
 * Displays product info with image, price, stock status, and cart button.
 *
 * Props:
 * - product: Product → product object with name, price, description, etc.
 * - showDescription?: boolean → toggles description visibility.
 * - showStockStatus?: boolean → toggles stock text.
 * - onAddToCart?: function → triggers when "Add to Cart" is clicked.
 * - children?: React.ReactNode → optional promotion or detail.
 */

