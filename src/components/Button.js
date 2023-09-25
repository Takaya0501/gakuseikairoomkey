// components/Button.js

import React from 'react';

function Button({ isOpen, onClick }) {
  return (
    <button onClick={onClick} className="p-5 bg-red-200">
      {isOpen ? '閉める' : '開ける'}
    </button>
  );
}

export default Button;
