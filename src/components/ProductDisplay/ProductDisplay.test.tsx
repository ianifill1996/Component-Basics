import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductDisplay from './ProductDisplay';

const mockProduct = {
  id: 'prod1',
  name: 'Keyboard',
  price: 49.99,
  description: 'A cool mechanical keyboard.',
  inStock: true,
};

describe('ProductDisplay', () => {
  it('renders product name and price', () => {
    render(<ProductDisplay product={mockProduct} />);
    expect(screen.getByText('Keyboard')).toBeInTheDocument();
    expect(screen.getByText('$49.99')).toBeInTheDocument();
  });

  it('hides description and stock status when props are false', () => {
    render(
      <ProductDisplay
        product={mockProduct}
        showDescription={false}
        showStockStatus={false}
      />
    );
    expect(screen.queryByText('A cool mechanical keyboard.')).not.toBeInTheDocument();
    expect(screen.queryByText(/In Stock/)).not.toBeInTheDocument();
  });

  it('calls onAddToCart when button is clicked', () => {
    const mockAdd = jest.fn();
    render(<ProductDisplay product={mockProduct} onAddToCart={mockAdd} />);
    fireEvent.click(screen.getByText('Add to Cart'));
    expect(mockAdd).toHaveBeenCalledWith('prod1');
  });
});