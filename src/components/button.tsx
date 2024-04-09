import React from 'react'; 
import '../styles/atoms/buttons.scss';
 

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: string, // default, primary, info, success, warning, danger, dark
  size?: string, // sm, md, lg
  disabled?: boolean,
  className?: string;
}

 
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'default',
  size = '',
  disabled,
  ...rest
}) => {
  return (
    <button
      className={`${variant} ${size}` + (disabled ? ' disabled' : '')}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
 
export default Button;  