import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import MainScreen from './components/MainScreen/MainScreen';
import KeyboardScreen from './components/KeyboardScreen/KeyboardScreen';
import { GuessesProvider } from './contexts/GuessesContext';


function App() {
  return (
    <div className="App">
      <NavBar />
      <GuessesProvider>
        <MainScreen />
        <KeyboardScreen />
      </GuessesProvider>
    </div>
  );
}

export default App;
