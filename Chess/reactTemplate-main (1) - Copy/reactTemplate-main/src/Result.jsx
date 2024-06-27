
import React from 'react';

const Result = ({ result }) => (
  <div className="result">
    {result === null && <p>Make your choice...</p>}
    {result === 'win' && <p>You win!</p>}
    {result === 'lose' && <p>You lose!</p>}
    {result === 'draw' && <p>It's a draw!</p>}
  </div>
);

export default Result;
