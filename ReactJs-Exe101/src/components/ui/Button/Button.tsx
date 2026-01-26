import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-bold rounded-full transition-all inline-flex items-center justify-center gap-2';
  
  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-black text-white hover:bg-orange-600 shadow-lg shadow-black/10',
    secondary: 'bg-white text-black border-2 border-stone-200 hover:border-black',
    outline: 'border border-black text-black hover:bg-black hover:text-white',
    ghost: 'text-black hover:text-orange-600 bg-transparent',
  };

  const sizes: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `.trim()}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
