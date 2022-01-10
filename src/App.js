import './App.css';
import { useState } from 'react';
import Color from './component/Color.js';

function App() {

  const [showComponent, setShowComponent ] = useState(true);


  return (
    <div className="App">
      <button onClick={() => setShowComponent(!showComponent)}> mostrar / Ocultar </button>
      {showComponent ? <Color /> : null }
      
    </div>
  );
}

export default App;
