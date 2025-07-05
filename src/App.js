import React from 'react';
import './App.css';
import Timer from './Timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Timer with React having start , Pause and resume functionality</p>
      </header>
      <main>
          <p>My Timer React App functionalities goes here !</p>
          <Timer />
          <p>Timer will be displayed here</p>
        </main>
    </div>
  );
}

export default App;
