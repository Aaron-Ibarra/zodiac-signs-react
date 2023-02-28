import React from 'react';
import './Main.css';
import { zodiac } from '../../data.js';
import Zodiac from '../Zodiac/Zodiac.js';

export default function Main() {
  return (
    <main>
      {zodiac.map((sign) => (
        <Zodiac key={sign.id} {...sign} />
      ))}
    </main>
  );
}
