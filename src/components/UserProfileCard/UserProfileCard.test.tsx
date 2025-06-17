import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserProfileCard from './UserProfileCard';

const mockUser = {
  id: '1',
  name: 'Ian Ifill',
  email: 'ian@example.com',
  role: 'Developer',
  avatarUrl: '',
};

describe('UserProfileCard', () => {
  it('renders user name', () => {
    render(<UserProfileCard user={mockUser} />);
    expect(screen.getByText('Ian Ifill')).toBeInTheDocument();
  });

  it('hides email and role when props are false', () => {
    render(<UserProfileCard user={mockUser} showEmail={false} showRole={false} />);
    expect(screen.queryByText('ian@example.com')).not.toBeInTheDocument();
    expect(screen.queryByText('Developer')).not.toBeInTheDocument();
  });

  it('calls onEdit when button is clicked', () => {
    const mockEdit = jest.fn();
    render(<UserProfileCard user={mockUser} onEdit={mockEdit} />);
    fireEvent.click(screen.getByText('Edit Profile'));
    expect(mockEdit).toHaveBeenCalledWith('1');
  });
});