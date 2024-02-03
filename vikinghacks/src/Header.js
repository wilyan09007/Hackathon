// src/App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import FrontPage from './frontpage/FrontPage';
import ContentPage from './contentpage/quizPage';

function App() {
  const [tweets, setTweets] = useState([]);
  const [currentTweetIndex, setCurrentTweetIndex] = useState(0);
  const [backgroundClass, setBackgroundClass] = useState('');
  const [showFrontPage, setShowFrontPage] = useState(true);

  useEffect(() => {
    loadTweets();
  }, []);

  const loadTweets = async () => {
    // Fetch tweets from the API or use a predefined list
    // ...

    // For this example, using a predefined list
    const fakeTweets = ["This is a fake tweet.", "Another fake tweet for testing."];
    setTweets(fakeTweets);
  };

  const handleContinue = () => {
    setShowFrontPage(false);
  };

  const checkGuess = (isReal) => {
    const correctGuess = isReal === (currentTweetIndex % 2 === 0);

    if (correctGuess) {
      setBackgroundClass('correct');
    } else {
      setBackgroundClass('incorrect');
    }

    setTimeout(() => {
      setCurrentTweetIndex((prevIndex) => prevIndex + 1);
      setBackgroundClass('');
    }, 1000);
  };

  return (
    <div className={`container ${backgroundClass}`}>
      {showFrontPage ? (
        <FrontPage onContinue={handleContinue} />
      ) : (
        <ContentPage tweets={tweets} currentTweetIndex={currentTweetIndex} onGuess={checkGuess} />
      )}
    </div>
  );
}

export default App;
