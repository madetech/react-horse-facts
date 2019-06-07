import React from 'react';
import logo from './logo.svg';
import './App.css';
import GetHorseFact from './RemoteUseCases/GetHorseFact';
import HorseFact from "./Components/HorseFact";

const App: React.FC = () => {
  // var getHorseFact = new GetHorseFact()
  // getHorseFact.getFacts();
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <HorseFact />
    </div>
  );
}

export default App;
