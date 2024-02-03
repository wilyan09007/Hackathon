// src/ContentPage.js

import React from 'react';

const ContentPage = ({ tweets, currentTweetIndex, onGuess }) => {
  return (
    <div id="content-page">
      <div id="tweet-container">
        <p>{tweets[currentTweetIndex]}</p>
      </div>
      <div id="buttons-container">
        <button onClick={() => onGuess(true)}>Real</button>
        <button onClick={() => onGuess(false)}>Fake</button>
      </div>
    </div>
  );
};

export default ContentPage;
