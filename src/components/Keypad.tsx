
import React from 'react';
import Button from './Button';

interface KeypadProps {
  onButtonClick: (value: string) => void;
}

const Keypad: React.FC<KeypadProps> = ({ onButtonClick }) => {
  const buttons = [
    'AC', '+/-', '%', '÷',
    '7',  '8',   '9', '×',
    '4',  '5',   '6', '−',
    '1',  '2',   '3', '+',
    '0',  '.',   '='      
  ];

  const functionKeys = ['AC', '+/-', '%'];
  const operatorKeys = ['÷', '×', '−', '+', '='];

  return (
    <div className="keypad">
      {buttons.map((label) => (
        <Button
          key={label}
          label={label}
          onClick={onButtonClick}
          variant={
            functionKeys.includes(label)
              ? 'function'
              : operatorKeys.includes(label)
                ? 'operator'
                : 'digit'
          }
          wide={label === '0'}
        />
      ))}
    </div>
  );
};

export default Keypad;
