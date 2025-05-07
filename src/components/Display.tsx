import React from 'react';

interface DisplayProps {
  value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <div className="display">
      <output>{value}</output>
    </div>
  );
};

export default Display;