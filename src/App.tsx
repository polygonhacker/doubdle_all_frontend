import React from 'react';
import './App.css';
import Game from './components/Game/Game';
import { GameStateProvider } from './contexts/GameStateContext';


function App() {
  return (
    <div className="App">
      <GameStateProvider>
        <Game />
      </GameStateProvider>
    </div>
  );
}

export default App;
