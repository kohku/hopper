import React from 'react';
import { RecoilRoot } from 'recoil';
import World from './components/World';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>Hopper</h1>
        <World />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
      </div>
    </RecoilRoot>
  );
}

export default App;
