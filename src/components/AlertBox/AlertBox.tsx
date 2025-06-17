import React from 'react';
import  type { AlertBoxProps } from '../../types';

const alertStyles = {
  success: 'bg-green-100 text-green-800 border-green-300',
  error: 'bg-red-100 text-red-800 border-red-300',
  warning: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  info: 'bg-blue-100 text-blue-800 border-blue-300',
};

const AlertBox: React.FC<AlertBoxProps> = ({ type, message, onClose, children }) => {
  return (
    <div className={`border-l-4 p-4 rounded-md mb-4 ${alertStyles[type]}`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="font-semibold capitalize">{type}</p>
          <p>{message}</p>
          {children && <div className="mt-2">{children}</div>}
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-xl font-bold px-2 hover:text-black"
            aria-label="Close alert"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};

export default AlertBox;

/**
 * AlertBox Component
 * Displays alert messages with optional close and custom content.
 *
 * Props:
 * - type: 'success' | 'error' | 'warning' | 'info' → defines alert style.
 * - message: string → main message to display.
 * - onClose?: function → optional close handler.
 * - children?: React.ReactNode → optional extra info below message.
 */