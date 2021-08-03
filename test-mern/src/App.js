import React, {  useState } from "react";
import './App.css';

function App() {
const [count, setCount] = useState(0)
const addClick=()=>{
  
  setCount(count+1)
}
  return (
    <div className="App">
      <header className="App-header">
        <p>
         Counter click
        </p>
        <button onClick={addClick}>Click!</button>
        <h2>{count}</h2>
      </header>
    </div>
  );
}

export default App;
