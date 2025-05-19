// packages/shared-ui/src/components/Button.js
import React from 'react';
import './Button.css'; // We'll add basic styling

const Button = ({ children, onClick, type = 'button', variant = 'primary' }) => {
  return (
    <button
      type={type}
      className={`shared-button shared-button-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;