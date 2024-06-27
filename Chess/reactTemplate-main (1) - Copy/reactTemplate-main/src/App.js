
import React, { useState } from 'react';
import Choices from './Choise';
import Result from './Result';
import './App.css';

const App = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePlayerChoice = (choice) => {
    setLoading(true);
    fetch('http://localhost:5000/api/play', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ playerChoice: choice }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setResult(data.result);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  };

  return (
    <div className="app">
      <h1>Rock, Paper, Scissors</h1>
      <Choices onPlayerChoice={handlePlayerChoice} />
      {loading && <p>Loading...</p>}
      <Result result={result} />
    </div>
  );
};

export default App;
