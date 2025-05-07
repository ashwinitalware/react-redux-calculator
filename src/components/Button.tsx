
import React from 'react';

interface ButtonProps {
  label: string;
  onClick: (value: string) => void;
  variant?: 'function' | 'digit' | 'operator';
  wide?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'digit',
  wide = false,
}) => (
  <button
    className={[
      'button',
      variant,
      wide ? 'wide' : '',
    ].join(' ')}
    onClick={() => onClick(label)}
  >
    {label}
  </button>
);

export default Button;
