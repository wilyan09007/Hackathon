// src/App.js

import React, { useState, useEffect } from 'react';
// import "./contentpage/";
// import "./frontpage/";
import './App.css';
import "./Header.css";
import Header from "./Header"
import FrontPage from './frontpage/FrontPage';
import ContentPage from './contentpage/quizPage';
import axios from "axios";

function App() {
  const [tweets, setTweets] = useState([]);
  const [currentTweetIndex, setCurrentTweetIndex] = useState(0);
  const [backgroundClass, setBackgroundClass] = useState('');
  const [showFrontPage, setShowFrontPage] = useState(true);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://localhost:5000",
    };   
    axios
      .request(options)
      .then(function (response) {
        setTweets(response.data.message.content);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);


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
{/* <NavBar /> */}
      {showFrontPage ? (
        <FrontPage onContinue={handleContinue} />
      ) : (
        <ContentPage tweets={tweets} currentTweetIndex={currentTweetIndex} onGuess={checkGuess} />
      )}
      <div id="root"></div>
    </div>
  );
}

export default App;
