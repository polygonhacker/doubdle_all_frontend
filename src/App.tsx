import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import MainScreen from './components/MainScreen/MainScreen';
import KeyboardScreen from './components/KeyboardScreen/KeyboardScreen';


function App() {
  return (
    <div className="App">
      <NavBar />
      <MainScreen />
      <KeyboardScreen />
    </div>
  );
}

export default App;
