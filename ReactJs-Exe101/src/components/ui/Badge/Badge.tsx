import React from 'react';

type BadgeVariant = 'default' | 'outline' | 'highlight';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  pulse?: boolean;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  pulse = false,
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider';
  
  const variants: Record<BadgeVariant, string> = {
    default: 'bg-white border border-stone-200 text-stone-500',
    outline: 'border border-stone-200 text-stone-400',
    highlight: 'bg-white shadow-sm text-black',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {pulse && (
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
      )}
      {children}
    </span>
  );
};

export default Badge;
