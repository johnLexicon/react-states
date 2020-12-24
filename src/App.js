import React, { useReducer } from 'react';
import './App.css';

function App() {
  const [checked, toggleChecked] = useReducer((checked) => !checked, true);

  return (
    <div className="App">
      <input type="checkbox" name="chk" id="chk" onChange={toggleChecked} value={checked} />
      <p>{checked ? 'Checked' : 'Not checked'}</p>
    </div>
  );
}

export default App;
