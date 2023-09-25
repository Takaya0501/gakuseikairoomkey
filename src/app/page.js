// pages/index.js
"use client"
// pages/index.js

import React, { useState, useEffect } from 'react';
import Button from '../components/Button';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchButtonState = async () => {
      try {
        const response = await fetch('/api/button?id=10000');
        const data = await response.json();
        setIsOpen(data.isOpen);
      } catch (error) {
        console.error('ボタンの状態の取得エラー', error);
      }
    };

    fetchButtonState();
  }, []);

  const toggleState = async () => {
    try {
      const response = await fetch('/api/button', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // JSON形式のデータのヘッダー
        },
        body: JSON.stringify({
          'id': 10000,
          'isOpen': !isOpen,
        })
      });
      const data = await response.json();
      setIsOpen(data.isOpen);
    } catch (error) {
      console.error('ボタンの状態の更新エラー', error);
    }
  };

  return (
    <div>
      <h1>ボタンの状態</h1>
      <Button isOpen={isOpen} onClick={toggleState} />
      <p>{isOpen ? '空いているよ' : '閉まっているよ'}</p>
    </div>
  );
}

