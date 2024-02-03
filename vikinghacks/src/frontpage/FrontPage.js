// src/FrontPage.js

import React from 'react';

const FrontPage = ({ onContinue }) => {
  return (
    <div id="front-page">
      <h1>Faker</h1>
      <p>A simple and fast way to learn about data misinformation.</p>
      <button onClick={onContinue}>Continue</button>
    </div>
  );
};

export default FrontPage;