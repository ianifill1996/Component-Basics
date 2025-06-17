import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AlertBox from './AlertBox';

describe('AlertBox', () => {
  it('renders message and type correctly', () => {
    render(<AlertBox type="success" message="All good!" />);
    expect(screen.getByText('All good!')).toBeInTheDocument();
    expect(screen.getByText('success')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const mockClose = jest.fn();
    render(<AlertBox type="error" message="Oops!" onClose={mockClose} />);
    fireEvent.click(screen.getByLabelText('Close Alert'));
    expect(mockClose).toHaveBeenCalled();
  });

  it('renders children when provided', () => {
    render(
      <AlertBox type="info" message="Heads up!">
        <p>Extra info</p>
      </AlertBox>
    );
    expect(screen.getByText('Extra info')).toBeInTheDocument();
  });
});