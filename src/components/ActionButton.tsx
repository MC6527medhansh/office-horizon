
import React from 'react';

interface ActionButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  secondary?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({ 
  children, 
  onClick, 
  disabled = false,
  icon,
  secondary = false
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        flex items-center justify-center gap-1.5 py-2 px-4 rounded-md 
        transition-all duration-300 font-medium text-sm
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'active:scale-97 hover:shadow-md'}
        ${secondary 
          ? 'bg-secondary/80 hover:bg-secondary text-foreground' 
          : 'glass-button'
        }
      `}
    >
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
    </button>
  );
};

export default ActionButton;
