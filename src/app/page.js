// pages/index.js
"use client"

import React, { useState, useEffect } from 'react';
import { getButtonState } from './api/button'; // button.js をインポート

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const fetchButtonState = async () => {
    const buttonState = await getButtonState(); // ボタンの状態を取得
    if (buttonState) {
      setIsOpen(buttonState.isOpen);
    }
  };

  // ... 他のコード

  useEffect(() => {
    fetchButtonState();
  }, []);

  return (
    <div>
      <h1>ボタンの状態</h1>
      <button onClick={getButtonState}>ボタンを押す</button>
      <p>{isOpen ? '空いているよ' : '閉まっているよ'}</p>
    </div>
  );
};

export default Home;
