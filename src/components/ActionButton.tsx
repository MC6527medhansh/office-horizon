
import React from 'react';
import { cn } from '@/lib/utils';

interface ActionButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  secondary?: boolean;
  className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ 
  children, 
  onClick, 
  disabled = false,
  icon,
  secondary = false,
  className
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(`
        flex items-center justify-center gap-1.5 py-3 px-6 rounded-md 
        transition-all duration-300 font-medium text-base
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-xl active:scale-95'}
        ${secondary 
          ? 'bg-secondary/80 hover:bg-secondary text-foreground' 
          : 'bg-blue-500/90 hover:bg-blue-600/90 backdrop-blur-sm text-white shadow-md hover:shadow-blue-500/20'}
        `, className)}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      {children}
    </button>
  );
};

export default ActionButton;
