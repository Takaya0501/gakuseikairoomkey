'use client';
// pages/index.js
import React from 'react';
import ButtonToggle from '../components/ButtonToggle';


const Home = ({ isOpen }) => {
  return (
    <div>
      <h1>ボタンの状態</h1>
      {/* <p>{isOpen ? '空いているよ' : '閉まっているよ'}</p> */}
      <ButtonToggle />
    </div>
  );
};

export default Home;
