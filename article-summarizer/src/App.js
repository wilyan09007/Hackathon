// src/App.js

import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);

  const scrapeArticle = async () => {
    try {
      const response = await axios.post('http://localhost:3001/scrape', { url });
      setResult(response.data);
    } catch (error) {
      console.error('Error:', error);
      setResult({ error: 'An error occurred during scraping.' });
    }
  };

  return (
    <div className="container">
      <h1>Article Summarizer</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter article link"
      />
      <button onClick={scrapeArticle}>Summarize</button>
      {result && (
        <div id="result">
          {result.error ? (
            <p>Error: {result.error}</p>
          ) : (
            <>
              <h2>{result.title}</h2>
              <p>{result.summary}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
