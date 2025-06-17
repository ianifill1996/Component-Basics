# Component Library

This is a reusable component library built with React and TypeScript. It includes styled, functional components designed for use in modern web applications.

## Components

### 1. AlertBox

Displays alert messages for different types (success, error, warning, info).

**Props:**
- `type`: 'success' | 'error' | 'warning' | 'info'
- `message`: string
- `onClose?`: function to handle closing the alert
- `children?`: additional content below the message

### 2. UserProfileCard

Displays user information with optional sections and edit functionality.

**Props:**
- `user`: { id, name, email, role, avatarUrl? }
- `showEmail?`: boolean (default: true)
- `showRole?`: boolean (default: true)
- `onEdit?`: function to handle edit click
- `children?`: extra content below user info

### 3. ProductDisplay

Displays product details with pricing, stock status, and optional action.

**Props:**
- `product`: { id, name, price, description, imageUrl?, inStock }
- `showDescription?`: boolean (default: true)
- `showStockStatus?`: boolean (default: true)
- `onAddToCart?`: function to handle "Add to Cart"
- `children?`: optional promotional or additional info

## Project Structure

src/
components/
AlertBox/
UserProfileCard/
ProductDisplay/
types/
index.ts

bash
Copy
Edit

## Running Tests

This project uses React Testing Library and Jest for component tests.

```bash
npm test
