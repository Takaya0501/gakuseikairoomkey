// components/ButtonToggle.js
import React, { useState } from 'react';

export async function getServerSideProps() {
  // ここでデータを取得し、isOpenの値を設定するロジックを追加
  const isOpen = true; // 例: データベースから取得した状態
  return {
    props: { isOpen },
  };
}

const ButtonToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleState = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleState}>ボタンを押す</button>
      <p>{isOpen ? '空いているよ' : '閉まっているよ'}</p>
    </div>
  );
  
};

export default ButtonToggle;
