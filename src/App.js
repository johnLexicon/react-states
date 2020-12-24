import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [mood, setMood] = useState('happy');
  const [secondMood, setSecondMood] = useState('tired');

  useEffect(() => {
    console.log(mood);
  }, [mood]);

  return (
    <div className="App">
      <h2>
        {mood} and {secondMood}
      </h2>
      <button onClick={() => setMood('happy')}>Happy</button>
      <button onClick={() => setMood('frustrated')}>Frustrated</button>
      <button onClick={() => setMood('sad')}>Sad</button>
      <button onClick={() => setSecondMood(['tired', 'exhausted'][Math.floor(Math.random() * 2)])}>
        Random second mood
      </button>
    </div>
  );
}

export default App;
