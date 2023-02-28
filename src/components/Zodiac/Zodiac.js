import React from 'react';
import './Zodiac.css';

export default function Zodiac(sign) {
  return (
    <div className="zodiac-sign">
      <img src={`/signs/${sign.name}.svg`} />
      <h1>{sign.name}</h1>
      <p>{sign.dates}</p>
    </div>
  );
}
