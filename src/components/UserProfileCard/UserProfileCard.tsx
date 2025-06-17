import React from 'react';
import  type { UserProfileCardProps } from '../../types';

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = true,
  showRole = true,
  onEdit,
  children,
}) => {
  return (
    <div className="border rounded-xl p-4 shadow-md max-w-sm bg-white">
      <div className="flex items-center gap-4">
        <img
          src={user.avatarUrl || 'https://via.placeholder.com/80'}
          alt={`${user.name}'s avatar`}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="text-lg font-bold">{user.name}</h2>
          {showEmail && <p className="text-sm text-gray-600">{user.email}</p>}
          {showRole && <p className="text-sm text-gray-500 italic">{user.role}</p>}
        </div>
      </div>

      {children && <div className="mt-3">{children}</div>}

      {onEdit && (
        <div className="mt-4">
          <button
            onClick={() => onEdit(user.id)}
            className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfileCard;

/**
 * UserProfileCard Component
 * Shows user info with optional email, role, and edit button.
 *
 * Props:
 * - user: User → user object containing name, email, role, avatar.
 * - showEmail?: boolean → toggles email visibility (default: true).
 * - showRole?: boolean → toggles role visibility (default: true).
 * - onEdit?: function → triggers when "Edit" is clicked.
 * - children?: React.ReactNode → optional extra content below profile.
 */