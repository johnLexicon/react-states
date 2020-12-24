import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [mood, setMood] = useState('happy');

  useEffect(() => {
    console.log(mood);
  });

  return (
    <div className="App">
      <h2>{mood}</h2>
      <button onClick={() => setMood('happy')}>Happy</button>
      <button onClick={() => setMood('frustrated')}>Frustrated</button>
      <button onClick={() => setMood('sad')}>Sad</button>
    </div>
  );
}

export default App;
