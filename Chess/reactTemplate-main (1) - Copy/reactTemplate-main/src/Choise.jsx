
import React from 'react';

const Choices = ({ onPlayerChoice }) => {
  const handleChoice = (choice) => {
    onPlayerChoice(choice);
  };

  return (
    <div className="choices">
      <button onClick={() => handleChoice('rock')}>Rock</button>
      <button onClick={() => handleChoice('paper')}>Paper</button>
      <button onClick={() => handleChoice('scissors')}>Scissors</button>
    </div>
  );
};

export default Choices;
