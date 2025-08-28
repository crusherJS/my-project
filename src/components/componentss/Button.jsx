// components/common/Button.jsx
import { useTheme } from './contexts/ThemeContext';

const Button = ({ 
  children, 
  type = 'button', 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  ...props 
}) => {
  const { theme } = useTheme();

  const baseClasses = 'font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200';
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  const variantClasses = {
    primary: `text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 ${theme === 'dark' ? 'focus:ring-offset-gray-800' : ''}`,
    secondary: `text-blue-700 bg-blue-100 hover:bg-blue-200 focus:ring-blue-500 ${theme === 'dark' ? 'text-blue-300 bg-blue-900 hover:bg-blue-800' : ''}`,
    danger: `text-white bg-red-600 hover:bg-red-700 focus:ring-red-500 ${theme === 'dark' ? 'focus:ring-offset-gray-800' : ''}`,
    ghost: `text-gray-700 hover:bg-gray-100 focus:ring-gray-500 ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-700' : ''}`,
    outline: `border ${theme === 'dark' ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`
  };

  const disabledClasses = 'opacity-50 cursor-not-allowed';

  return (
    <button
      type={type}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${disabled ? disabledClasses : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;