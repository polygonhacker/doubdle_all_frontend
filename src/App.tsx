import React from 'react';
import './App.css';
import Game from './components/Game/Game';
import { GameStateProvider } from './contexts/GameStateContext';
import { HelpModalProvider } from './contexts/helpModalContext';


function App() {
  return (
    <div className="App">
      <HelpModalProvider>
        <GameStateProvider>
          <Game />
        </GameStateProvider>
      </HelpModalProvider>
    </div>
  );
}

export default App;
