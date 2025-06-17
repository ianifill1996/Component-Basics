import React from 'react';
import AlertBox from './AlertBox/AlertBox';
import UserProfileCard from './UserProfileCard/UserProfileCard';
import ProductDisplay from './ProductDisplay/ProductDisplay';

const mockUser = {
  id: 'u1',
  name: 'Ian Ifill',
  email: 'ian@example.com',
  role: 'Engineer',
  avatarUrl: '',
};

const mockProduct = {
  id: 'p1',
  name: 'Bluetooth Speaker',
  price: 29.99,
  description: 'High-quality speaker with rich sound.',
  inStock: true,
};

/**
 * Dashboard Component
 * Demonstrates component composition and prop passing.
 */
const Dashboard: React.FC = () => {
  const handleEditUser = (id: string) => {
    alert(`Editing user with ID: ${id}`);
  };

  const handleAddToCart = (productId: string) => {
    alert(`Added product ${productId} to cart!`);
  };

  return (
    <div className="space-y-6 p-6 max-w-3xl mx-auto">
      {/* ALERT */}
      <AlertBox type="info" message="Welcome back!">
        <p className="text-sm text-blue-700">Check out the new features below.</p>
      </AlertBox>

      {/* USER PROFILE CARD */}
      <UserProfileCard user={mockUser} onEdit={handleEditUser}>
        <p className="text-sm text-gray-600">Member since 2022</p>
      </UserProfileCard>

      {/* PRODUCT DISPLAY */}
      <ProductDisplay product={mockProduct} onAddToCart={handleAddToCart}>
        <p className="text-xs text-gray-500">Limited time offer!</p>
      </ProductDisplay>
    </div>
  );
};

export default Dashboard;