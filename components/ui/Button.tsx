import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'outline' | 'text';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  href, 
  variant = 'primary',
  className = ''
}) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-widest uppercase transition-all duration-300 font-sans group overflow-hidden";
  
  const variants = {
    primary: "bg-bronze text-white shadow-lg hover:shadow-xl",
    outline: "border border-current text-current hover:bg-current hover:text-white dark:hover:text-black",
    text: "text-bronze underline-offset-4 hover:underline p-0",
  };

  const Component = href ? motion.a : motion.button;
  const props = href ? { href, target: href.startsWith('tel') ? '_self' : '_self' } : { onClick };

  if (variant === 'text') {
    return (
      // @ts-ignore
      <Component 
        {...props} 
        className={`${baseStyles} ${variants[variant]} ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </Component>
    );
  }

  return (
    // @ts-ignore
    <Component
      {...props}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 h-full w-full scale-0 rounded transition-all duration-300 group-hover:scale-100 group-hover:bg-bronzeLight/20" />
      )}
    </Component>
  );
};